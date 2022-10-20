import React, {useState} from "react";


const LinkForm = () => {

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


    const handleSubmit = e => {
        e.preventDefault();
        console.log(values);
    }
    return(
        <form className="card card-body" onSubmit={handleSubmit}>
            <div className="form-group input-group">
            <div className="input-group-text bg-light">
                <i className="material-icons">insert_link</i>
            </div>
            <input onChange={handleInputChange} type="text" className="form-control" placeholder="Nombre" name="nombre"/>
            </div>
            <br />
            <div className="form-group input-group">
                <div className="input-group-text bg-light">
                    <i className="material-icons">create</i>
                </div>
                <input onChange={handleInputChange} type="text" className="form-control" name="apellido" placeholder="Apellido"/>
            </div>
            <br />
            <div className="form-group input-group">
                <div className="input-group-text bg-light">
                    <i className="material-icons">create</i>
                </div>
                <input onChange={handleInputChange} type="text" className="form-control" name="direccion" placeholder="Direccion"/>
            </div>
            <br />
            <div className="form-group input-group">
                <div className="input-group-text bg-light">
                    <i className="material-icons">create</i>
                </div>
                <input onChange={handleInputChange} type="number" className="form-control" name="edad" placeholder="Edad"/>
            </div>
            <br />
            <div className="form-group input-group">
                <div className="input-group-text bg-light">
                    <i className="material-icons">create</i>
                </div>
                <input onChange={handleInputChange} type="text" className="form-control" name="ciudad" placeholder="Ciudad De Residencia"/>
            </div>
            <br />
            <div className="form-group input-group">
                <div className="input-group-text bg-light">
                    <i className="material-icons">create</i>
                </div>
                <input onChange={handleInputChange} type="text" className="form-control" name="estado" placeholder="Estado Civil"/>
            </div>
            <br />
            <div className="form-group">
                <textarea onChange={handleInputChange} name="descripcion" placeholder="Descripcion"  rows="3" className="form-control"></textarea>
            </div>
            <br />
            <button className="btn btn-primary btn-block">
                Guardar
            </button>
        </form>
    )
}

export default LinkForm;