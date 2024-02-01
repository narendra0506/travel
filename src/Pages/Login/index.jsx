import React from 'react'
import Layout from '../../Components/layout'
import { Button, Card, Container } from 'react-bootstrap'
import { Formik } from 'formik'
import Form from 'react-bootstrap/Form'
import axios from 'axios'
import { Navigate, useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()

    return (
        <div>
            <Layout>
                <Container>
                    <Card>
                        <Card.Header>Login Form</Card.Header>
                        <Card.Body>
                            <Formik
                                initialValues={{
                                    email: "",
                                    password: ""
                                }}
                                onSubmit={(values) => {
                                    axios.post("https://api.darwinstech.com/api/login", values)
                                        .then((res) => {
                                            console.log("sucess", res.data.msg)
                                            console.log("token", res.data.data.token)
                                            localStorage.setItem('token', res.data.data.token)

                                            navigate("/dashboard")
                                        })
                                        .catch((err) => { console.log("error", err.response.data.msg) })

                                }}
                                validate={(values) => {
                                    const errors = {};
                                    if (values.email === "") {
                                        errors.email = "Enter your email id";
                                    }
                                    if (values.password === "") {
                                        errors.password = "Enter your password";
                                    }
                                    return errors
                                }}
                            >
                                {({ handleChange, handleSubmit, values, errors }) => {
                                    return (

                                        <Form onSubmit={handleSubmit}>
                                            <Form.Group className="mb-3" controlId="email">
                                                <Form.Label>Enter Email</Form.Label>
                                                <Form.Control type="email"
                                                    name='email'
                                                    value={values.email}
                                                    onChange={handleChange}
                                                    className={errors.email ? 'is-invalid' : ""}
                                                />
                                                <div className='text-danger'>{errors.email}</div>
                                            </Form.Group>

                                            <Form.Group className="mb-3" controlId="password">
                                                <Form.Label>Enter Password</Form.Label>
                                                <Form.Control type="password"
                                                    name='password'
                                                    value={values.password}
                                                    onChange={handleChange}
                                                    className={errors.password ? 'is-invalid' : ""} />
                                                <div className='text-danger'>{errors.password}</div>
                                            </Form.Group>

                                            <Button type='submit'>Login</Button>

                                        </Form>

                                    )
                                }}


                            </Formik>
                        </Card.Body>
                    </Card>
                </Container>
            </Layout>
        </div>
    )
}

export default Login
