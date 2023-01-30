import { Button, Col, Form, FormGroup, Label } from "reactstrap"
import React, {useState,usseEffect} from "react"
import firebase from "../../lib/firebase"



const Create = () => {

    
    const [entryData, setEntryData]=useState({})
    const database = firebase.database()
    const entriesRef=database.ref("/entries")
    
   
    
    const changeHandler = event =>{
        const propierty=event.target.name
        const value=event.target.value
        setEntryData({...entryData,[propierty]:value});
    }

    const saveEntry = event =>{
        console.log(entryData)
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
                    <input name="picture" onChange={changeHandler}/>
                </FormGroup>

                <Button type="button" color= "light" className="mt-3" onClick={saveEntry}>Guardar</Button>
            </Form>

        </Col>
    )
}

export default Create