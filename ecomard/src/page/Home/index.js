import { Card,CardBody, CardTitle,  CardText, Col, Row, Button } from "reactstrap"
import React, {useState,useEffect} from "react"
import firebase from "../../lib/firebase"
import { Link } from "react-router-dom";

const Home = () => {
    const [entriesList, setEntriesList] = useState({});

    const database = firebase.database()
    const entriesRef=database.ref("/entries")

    useEffect(() => {
        console.log("montando componentes")
        entriesRef.on("value",snapshot => {
            setEntriesList(snapshot.val())
        }
        )
    },[])

    return (
        <Col >
            <h1>Home</h1>
            <Row>
                {
                    Object.keys(entriesList).map(key =>{
                        const entryData=entriesList[key]
                        const {title, picture, content}= entryData
                        return(
                            
                            <Col xs="12" md="3" key={key}>
                                <Card
                                style={{width: '18rem' }}
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
                                        <Link to={`/detail/${key}`}>
                                        <Button>Ver mas</Button>
                                        
                                        </Link>
                                    </CardBody>
                                </Card>
                            </Col>    
                   )
                   
                   
                    })
                }

            </Row>
        </Col>
    )
}

export default Home
