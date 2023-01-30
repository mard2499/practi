import { Col, Form, FormGroup, Label } from "reactstrap"
import React, {useState,usseEffect} from "react"
import firebase from "../../lib/firebase"

const Home = () => {
    console.log(firebase.database)
    return (
        <Col xs="12">
            <h1>Home</h1>

        </Col>
    )
}

export default Home
