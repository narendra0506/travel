import React, { useState } from 'react'
import Layout from '../../Components/layout'
import { Button, Card, CardBody, CardHeader, Container } from 'react-bootstrap'
import { Formik } from 'formik'
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const FormLogin = () => {
    const [serverErr,setServerErr]=useState("");
    const navigate = useNavigate();
    return (
        <Layout>
            <Container>
                <Card>
                    <CardHeader>Form Login</CardHeader>
                    <CardBody>
                        <Formik
                            initialValues={{
                                email: "",
                                password: ""
                            }}
                            onSubmit={(values) => {
                                axios.post("https://api.darwinstech.com/api/login", values)
                                    .then((res) => {
                                        console.log(res)
                                        console.log("token===>",res.data.data.token);
                                        localStorage.setItem('token',res.data.data.token)
                                          navigate("/dashboard");
                                    })
                                    .catch((err) => { console.log("erroer----->", err.response.data.msg)
                                    setServerErr(err.response.data.msg) })
                                // console.log(values);

                            }}
                            validate={(values) => {
                                const errors = {};
                                if (values.email === "") {
                                    errors.email = "Enter your email";
                                }
                                if (values.password === "") {
                                    errors.password = "Enter your email";
                                }
                                return errors;

                            }}
                        >
                            {({ values, handleChange, handleSubmit, errors }) => {
                                return (
                                    <Form onSubmit={handleSubmit}>
                                        <Form.Group className="mb-3" controlId="ControlInput1">
                                            <Form.Label>Enter your Email</Form.Label>
                                            <Form.Control type="email"
                                                name="email"
                                                value={values.email}
                                                onChange={handleChange}
                                            />
                                            <div className='text-danger'>{errors.email}</div>
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="ControlInput2">
                                            <Form.Label>Enter Your password</Form.Label>
                                            <Form.Control type="password"
                                                name='password'
                                                value={values.password}
                                                onChange={handleChange} />
                                            <div className='text-danger'>{errors.email}</div>
                                        </Form.Group>
                                        <Button type='submit'>Login</Button>

                                    </Form>
                                )
                            }}

                        </Formik>
                        {serverErr}
                    </CardBody>
                </Card>
            </Container>
        </Layout>
    )
}

export default FormLogin

