import React, { useEffect, useState } from 'react'
import { Button, Card, CardBody, CardFooter, CardHeader, Col, Container, Row } from 'react-bootstrap'
import Layout from '../../Components/layout'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { IoMdCheckmarkCircleOutline, IoMdTime } from "react-icons/io";



const Exams = () => {
    const [isLoggedIn, SetIsLoggedIn] = useState(false);
    const [examData, setExamData] = useState([]);

    useEffect(() => {
        if (localStorage.getItem("token")) {
            SetIsLoggedIn(true);
        }
    })

    useEffect(() => {
        getexam();
    }, []);

    const getexam = () => {
        axios.get("https://api.darwinstech.com/api/exams",
            {
                headers: {
                    Accept: "application/json",
                    Authorization: "Bearer " + localStorage.getItem("token"),
                }
                
            })
            .then((resp) => {
                setExamData(resp.data);
                console.log(resp.data);
            })
            .catch((err) => { console.log(err); })

    }
    return (
        <Layout>
            <Container>
                {isLoggedIn ? (<>
                    <h1>Exam List</h1>
                    <Row className="g-2">
                        {examData.map((exm, index) => {
                            return (
                                <Col md={3} key={exm.id}>
                                    <Card>
                                        <Card.Header>
                                            {index + 1}.{exm.name.slice(0, 20)}...

                                        </Card.Header>
                                        <Card.Body>
                                            {exm.description.slice(0, 120)}...
                                            <div className='d-flex justify-content-between mt-4'>
                                                
                                                <div><IoMdCheckmarkCircleOutline size={30} color="red"/>
                                                {exm.marks}</div>
                                                
                                                <div>
                                                <IoMdTime size={30} color='green' />
                                                {exm.duration}
                                                </div>
                                            </div>

                                        </Card.Body>
                                        <CardFooter>
                                            <Button className="w-100">START EXAM</Button>
                                        </CardFooter>
                                    </Card>
                                </Col>

                            )
                        })}
                    </Row>
                </>) : (<>
                    <Card>
                        <Card.Header>
                            Opps Please login to check all the exams.
                        </Card.Header>
                        <CardBody>
                            To access all the exams list you must{" "}
                            <Link to="/login">Login</Link> first.
                        </CardBody>
                    </Card></>)}


            </Container>
        </Layout>
    )
}

export default Exams
