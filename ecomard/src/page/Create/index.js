import { Button, Col, Form, FormGroup, Label } from "reactstrap"
import React, {useState,usseEffect} from "react"

const Create = () => {
    return (
        <Col xs="12">
            <h1>Crear Articulo</h1>
            <Form className="bg-dark text-white border rounded
            my-3 p-3">
                <FormGroup>
                    <Label>Titulo</Label>
                    <input>
                    </input>
                </FormGroup>

                <FormGroup>
                    <Label> Contenido</Label>
                    <input>
                    </input>
                </FormGroup>

                <FormGroup>
                    <Label>Imagen</Label>
                    <input>
                    </input>
                </FormGroup>
                <Button type="button" color= "light">Guardar</Button>
            </Form>

        </Col>
    )
}

export default Create