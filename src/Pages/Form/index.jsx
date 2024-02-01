import React, { useState } from 'react'
import Layout from '../../Components/layout'
import { Button, Card, CardHeader, Container } from 'react-bootstrap'
import { Formik } from 'formik'
import Form from 'react-bootstrap/Form';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';



const Formdata = () => {
    const [servererre, setservererre] = useState("");
    const navigate=useNavigate();
    let Schema = Yup.object({
        name: Yup.string().required().min(2).max(20),
        email: Yup.string().required(),
        password: Yup.string().required(),
        c_password: Yup.string().required().
            oneOf([Yup.ref("password"), null], "Passwords must match")
    })
    return (
        <div>
            <Layout>
                <Container>
                    <Card>
                        <CardHeader>Form</CardHeader>
                        <Card.Body>
                            <Formik
                                initialValues={{
                                    name: "",
                                    email: "",
                                    password: "",
                                    c_password: ""

                                }}
                                onSubmit={(values,{setSubmitting}) => {
                                    // console.log(values);
                                    axios.post("https://api.darwinstech.com/api/register", values)
                                        .then((res) => {
                                            console.log("this is responce ===>", res)
                                            setSubmitting(false)
                                        
                                            navigate("/login");

                                            
                                        })
                                        .catch((err) => { 
                                            setservererre(err.response.data.message)
                                            console.log("this is error", err.response.data.message) 
                                            setSubmitting(false);   
                                        
                                        })

                                }}

                                validate={values => {
                                    const errors = {};
                                    if (values.name === "") {
                                        errors.name = "Please Enter your Name";
                                    }
                                    return errors
                                }}

                                validationSchema={Schema}
                            >
                                {({ values, handleChange, handleSubmit, errors ,isSubmitting}) => {
                                    return (

                                        <Form onSubmit={handleSubmit}>
                                            <Form.Group className="mb-3" controlId="ControlInput1">
                                                <Form.Label>Enter your Name</Form.Label>
                                                <Form.Control type="text"
                                                    name='name'
                                                    value={values.name}
                                                    onChange={handleChange}
                                                />
                                                <div className='text-danger'>{errors.name}</div>
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="ControlInput2">
                                                <Form.Label>Enter your Email</Form.Label>
                                                <Form.Control type="email"
                                                    name="email"
                                                    value={values.email}
                                                    onChange={handleChange} />
                                                <div className='text-danger'>{errors.email}</div>
                                            </Form.Group>

                                            <Form.Group className="mb-3" controlId="ControlInput3">
                                                <Form.Label>Enter your Password</Form.Label>
                                                <Form.Control type="password"
                                                    name="password"
                                                    value={values.password}
                                                    onChange={handleChange} />
                                                <div className='text-danger'>{errors.password}</div>
                                            </Form.Group>

                                            <Form.Group className="mb-3" controlId="ControlInput4">
                                                <Form.Label>Enter your Confirm Password</Form.Label>
                                                <Form.Control type="password"
                                                    name="c_password"
                                                    value={values.c_password}
                                                    onChange={handleChange} />
                                                <div className='text-danger'>{errors.c_password}</div>
                                            </Form.Group>
                                            <Button type='submit' disabled={isSubmitting} >Send Inqury
                                            {isSubmitting?(
                                                    <Spinner animation="border" role="status">
                                                    <span className="visually-hidden">Loading...</span>
                                                  </Spinner>
                                            ):("")}
                                            </Button>



                                        </Form>

                                        
                                    )
                                }}

                            </Formik>
                            {servererre}
                        </Card.Body>
                    </Card>
                </Container>
            </Layout>
        </div>
    )
}
export default Formdata;