import React, {useState, useEffect} from "react";
import { Card,CardBody, CardTitle,  CardText, Col  } from "reactstrap"
import { useParams } from "react-router-dom";
import firebase from "../../lib/firebase";


const Detail = () => {
    const [entryData, setEntryData] = useState({});
    const {id}=useParams();
    const database = firebase.database()


    useEffect(() => { 
        database.ref(`/entries/${id}`).on("value", snapshot =>{
           setEntryData(snapshot.val()) 
        })
        },[])
    const {title, picture, content}= entryData

    return(
                            
        <Col xs="180" >
            <Card
            style={{width: '35rem' }}
            >
                <img
                    alt="Sample"
                    src={picture}
                />
                <CardBody>
                    <CardTitle tag="h5">
                    {title}
                    </CardTitle>
                    <CardText>
                    {content}
                    </CardText>

                </CardBody>
            </Card>
        </Col>    
    )}

export default Detail