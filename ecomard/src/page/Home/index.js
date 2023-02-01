import { Card,CardBody, CardTitle,  CardText, Col, Row } from "reactstrap"
import React, {useState,useEffect} from "react"
import firebase from "../../lib/firebase"

const Home = () => {
    const [entrieslist, setEntriesList] = useState({});

    const database = firebase.database()
    const entriesRef=database.ref("/entries")

    useEffect(() => {
        console.log("montando componentes")
        entriesRef.on("value",snapshot => {
            console.log(snapshot)
            setEntriesList(snapshot.val())
        }
        )
    },[])

    return (
        <Col xs="12">
            <h1>Home</h1>
            <Row>
                {
                    Object.keys(entrieslist).map(entry =>{
                        const entryData=entrieslist[entry]
                        const {title, picture, content}= entryData
                   return(
                        <Card
                        style={{width: '18rem' }}>
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
                   )
                   
                   
                    })
                }

            </Row>
        </Col>
    )
}

export default Home
