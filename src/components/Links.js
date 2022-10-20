import React, {useEffect, useState} from "react"
import LinkForm from "./LinkForm";
import {db} from '../firebase';

const Links = () => {

    const [links, setLinks] = useState([]);

    const addOrEdit = async(usuObject) => {
        await db.collection('usu').doc().set(usuObject);
        console.log("Nuevo Usu Agregado");
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
            <LinkForm addOrEdit={addOrEdit}/>
        </div>
        <div className="col-md-8">
            {links.map(link => (
                <div className="card mb-1">
                    <div className="card-body">
                        <h2>{link.nombre} {link.apellido}</h2>
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