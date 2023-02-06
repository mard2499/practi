import { Button, Col, Form, FormGroup, Label } from "reactstrap"
import React, {useState,useEffect} from "react"
import firebase from "../../lib/firebase"




const Create = () => {

    const [file, setfile]=useState(null)
    const [entryData, setEntryData]=useState({})
    const database = firebase.database()
    const entriesRef=database.ref("/entries")
    const storageRef = firebase.storage().ref()

    useEffect(() => {
        console.log("montando componentes")
        console.log(database)
        entriesRef.on("value",snapshot => {
            console.log(snapshot)
            console.log(snapshot.val())
        }
        )
    },[])
    
    const fileHandler = event =>{
     const file=event.target.files[0]
     setfile(file)
    }
    const changeHandler = event =>{
        const propierty=event.target.name
        const value=event.target.value
        setEntryData({...entryData,[propierty]:value});
    }

    const saveEntry = () =>{
        console.log(entryData)
        
        let uploadTask=storageRef.child(`/pictures/${file.name}`).put(file)
        uploadTask.on('state_changed', function(snapshot) {
            var progress=(snapshot.bytesTransferred / snapshot.totalBytes)*100;
            console.log(`Progreso de subida ${progress}% `);
            switch(snapshot.state){
                case firebase.storage.TaskState.PAUSED:
                    console.log("Se pauso la carga");
                    break;
                    case firebase.storage.TaskState.RUNNING:
                        console.log("Se esta cargando el archivo")
                        break;

                
            }
        },function( error){
            console.log("error")
    },function(){
        uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL){
            console.log("File avalible at: ",downloadURL);
            entriesRef.push({...entryData,picture:downloadURL })
        });
    });

       
    }



    

    return (
        <Col xs="12">
            <h1>Crear Articulo</h1>
            <Form className="bg-dark text-white border rounded
            my-3 p-3">
                <FormGroup>
                    <Label>Titulo</Label>
                    <input name="title" onChange={changeHandler}/> 
                </FormGroup>

                <FormGroup>
                    <Label> Contenido</Label>
                    <input name="content" onChange={changeHandler}/>  
                </FormGroup>

                <FormGroup>
                    <Label>Imagen</Label>
                    
                    <input type="file" name="picture" onChange={fileHandler}/>
                </FormGroup>

                <Button type="button" color= "light" className="mt-3" onClick={saveEntry}>Guardar</Button>
            </Form>

        </Col>
    )
}

export default Create