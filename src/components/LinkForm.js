import React, {useState, useEffect} from "react";
import { db } from "../firebase";
import {toast} from 'react-toastify'



const LinkForm = (prosp) => {

    const initialStateValues = {
        nombre: '',
        apellido: '',
        direccion:'',
        edad: '',
        ciudad: '',
        estado: '',
        descripcion:''
    }; 
    const [values, setValues] = useState(initialStateValues);

    const handleInputChange = e => {
        const {name, value} = e.target;
        setValues({...values, [name]: value})
    }

    const validarCampos = str => {
        if (str === '') {
            return true;
        } else {
            return false;
        }
    }
    const handleSubmit = e => {
        e.preventDefault();
        if (validarCampos(values.nombre) || validarCampos(values.apellido)|| 
         validarCampos(values.direccion) || validarCampos(values.edad)
         || validarCampos(values.estado)|| validarCampos(values.descripcion)
         || validarCampos(values.ciudad)) {
            return toast('Campo Vacio',{
                type:'warning',
                autoClose: 1000
            })
        }
        prosp.addOrEdit(values);
        setValues({...initialStateValues})
    }

    const getLinkById =  async (id) => {
       const doc =  await db.collection('usu').doc(id).get();
       setValues({...doc.data()})
    }

    useEffect(() => {
        if (prosp.currentId === '') {
            setValues({...initialStateValues})
        }else{
           getLinkById(prosp.currentId)
        }
    }, [prosp.currentId]);


    return(
        <form className="card card-body" onSubmit={handleSubmit}>
            <div className="form-group input-group">
            <div className="input-group-text bg-light">
                <i className="material-icons">insert_link</i>
            </div>
            <input value={values.nombre} onChange={handleInputChange} type="text" className="form-control" placeholder="Nombre" name="nombre"/>
            </div>
            <br />
            <div className="form-group input-group">
                <div className="input-group-text bg-light">
                    <i className="material-icons">create</i>
                </div>
                <input value={values.apellido} onChange={handleInputChange} type="text" className="form-control" name="apellido" placeholder="Apellido"/>
            </div>
            <br />
            <div className="form-group input-group">
                <div className="input-group-text bg-light">
                    <i className="material-icons">create</i>
                </div>
                <input value={values.direccion} onChange={handleInputChange} type="text" className="form-control" name="direccion" placeholder="Direccion"/>
            </div>
            <br />
            <div className="form-group input-group">
                <div className="input-group-text bg-light">
                    <i className="material-icons">create</i>
                </div>
                <input value={values.edad} onChange={handleInputChange} type="number" className="form-control" name="edad" placeholder="Edad"/>
            </div>
            <br />
            <div className="form-group input-group">
                <div className="input-group-text bg-light">
                    <i className="material-icons">create</i>
                </div>
                <input value={values.ciudad} onChange={handleInputChange} type="text" className="form-control" name="ciudad" placeholder="Ciudad De Residencia"/>
            </div>
            <br />
            <div className="form-group input-group">
                <div className="input-group-text bg-light">
                    <i className="material-icons">create</i>
                </div>
                <input value={values.estado} onChange={handleInputChange} type="text" className="form-control" name="estado" placeholder="Estado Civil"/>
            </div>
            <br />
            <div className="form-group">
                <textarea value={values.descripcion} onChange={handleInputChange} name="descripcion" placeholder="Descripcion"  rows="3" className="form-control"></textarea>
            </div>
            <br />
            <button className="btn btn-primary btn-block">
                {prosp.currentId === '' ? 'Guardar': 'Actualizar'}
            </button>
        </form>
    )
}

export default LinkForm;