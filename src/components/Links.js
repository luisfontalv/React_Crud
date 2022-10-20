import React, {useEffect, useState} from "react"
import LinkForm from "./LinkForm";
import {db} from '../firebase';
import {toast} from 'react-toastify';

const Links = () => {

    const [links, setLinks] = useState([]);
    const [currentId, setCurrentId] = useState('');    

    const addOrEdit = async(usuObject) => {
        try {
            if (currentId === '') {
                await db.collection('usu').doc().set(usuObject);
                toast('Nuevo Usuario Agregado',{
                    type:'success',
                    autoClose: 1500
                })
            }else{
                await db.collection('usu').doc(currentId).update(usuObject);
                toast('Usuario Actualizado',{
                    type:'info',
                    autoClose: 1500
                });
                setCurrentId('');
            }
        } catch (error) {
            console.error(error);
        }
    }

    const onDeleteLink = async id =>{
        if (window.confirm('Estas Seguro De Querer Eliminar El Usuario')) {
            await db.collection('usu').doc(id).delete();
            toast('Usuario Eliminado',{
                type:'error',
                autoClose: 1500
            })
        }
    }

    const getLinks = async () => {
      db.collection('usu').onSnapshot((querySnapshot) => {
          const docs = [];
            querySnapshot.forEach(doc => {
                docs.push({...doc.data(), id:doc.id})
            })  
            setLinks(docs);
       });
    }

    useEffect(() => {
        getLinks();
    }, []);


    return <div>
        <div className="col-md-4 p-2">
            <LinkForm {...{addOrEdit, currentId, links}}/>
        </div>
        <div className="col-md-8">
            {links.map(link => (
                <div className="card mb-1" key={link.id}>
                    <div className="card-body">
                        <div className="d-flex justify-content-between">
                            <h2>{link.nombre} {link.apellido}</h2>
                            <div>
                            <i className="material-icons text-danger" onClick={() => onDeleteLink(link.id)}>close</i>
                            <i className="material-icons " onClick={() => setCurrentId(link.id)} >create</i>
                            </div>
                        </div>
                        <h1>{link.ciudad} {link.direccion}</h1>
                        <h1>{link.estado} {link.edad} años</h1>
                        <p>{link.descripcion}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
}

export default Links;