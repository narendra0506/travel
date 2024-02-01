import React from "react"
import Layout from "../../Components/layout"
import Container from "react-bootstrap/esm/Container"
import { Card, Button, Alert, Spinner } from "react-bootstrap"
import { Formik } from "formik"
import axios from 'axios'
import Form from 'react-bootstrap/Form'
import * as Yup from 'yup';
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Register = () => {
    const navigate = useNavigate();
    const [serverErr, setServerErr] = useState("")


    let schema = Yup.object({
        name: Yup.string().required().min(3).max(20),
        email: Yup.string().required().email(),
        radio: Yup.string().required(),
        password: Yup.string().min(5).required(),
        c_password: Yup.string().required().oneOf([Yup.ref("password"), null], "Passwords must match"),
    })

    return (
        <>
            <Layout>
                <Container>
                    <Card>
                        <Card.Header>Registrasion Form</Card.Header>
                        <Card.Body>
                            <Formik
                                initialValues={{
                                    name: "",
                                    email: "",
                                    radio: "",
                                    password: "",
                                    c_password: ""

                                }}
                                onSubmit={(values, { setSubmitting, resetForm }) => {
                                    axios.post('https://api.darwinstech.com/api/register', values).then((res) => {
                                        console.log(res);
                                        setSubmitting(false)
                                        resetForm()
                                        navigate('/login');
                                    })
                                        .catch((err) => {
                                            setServerErr(err.response.data.message)
                                            console.log('erro=====>', err.response.data.message);
                                            setSubmitting(false)

                                        })
                                }}
                                validationSchema={schema}
                            >
                                {({ handleChange, handleSubmit, values, errors, isSubmitting }) => {
                                    return (
                                        <Form onSubmit={handleSubmit}>
                                            <Form.Group className="mb-3" controlId="name">
                                                <Form.Label>Enter your Name</Form.Label>
                                                <Form.Control type="text"
                                                    value={values.name}
                                                    onChange={handleChange}
                                                    className={errors.name ? "is-invalid" : ""} />
                                                <div className="text-danger">{errors.name}</div>
                                            </Form.Group>

                                            <Form.Group className="mb-3" controlId="email">
                                                <Form.Label>Enter your Email</Form.Label>
                                                <Form.Control type="email"
                                                    value={values.email}
                                                    onChange={handleChange}
                                                    className={errors.email ? "is-invalid" : ""} />
                                                <div className="text-danger">{errors.email}</div>
                                            </Form.Group>

                                            <Form.Group className="mb-3" controlId="Gender">
                                                <Form.Label>Gender</Form.Label>
                                                <Form.Check inline type="radio" name="radio"
                                                    value="male"
                                                    onChange={handleChange}
                                                    checked={values.radio === "male"} />Male
                                                <Form.Check inline className="px-2"
                                                    type="radio"
                                                    name="radio"
                                                    value="female"
                                                    onChange={handleChange} 
                                                    checked={values.radio === "female"}/>Female

                                                <div className="text-danger">{errors.radio}</div>
                                            </Form.Group>



                                            <Form.Group className="mb-3" controlId="password">
                                                <Form.Label>Enter your Password</Form.Label>
                                                <Form.Control type="password"
                                                    value={values.password}
                                                    onChange={handleChange}
                                                    className={errors.password ? "is-invalid" : ""} />
                                                <div className="text-danger">{errors.password}</div>
                                            </Form.Group>

                                            <Form.Group className="mb-3" controlId="c_password">
                                                <Form.Label>Enter your Confirm Password</Form.Label>
                                                <Form.Control type="password"
                                                    value={values.c_password}
                                                    onChange={handleChange}
                                                    className={errors.c_password ? "is-invalid" : ""} />
                                                <div className="text-danger">{errors.c_password}</div>
                                            </Form.Group>
                                            <Button type="submit" disabled={isSubmitting}>Send Inqury
                                                {isSubmitting ? (

                                                    <Spinner animation="border" role="status">
                                                        <span className="visually-hidden">Loading...</span>
                                                    </Spinner>
                                                ) : ("")}
                                            </Button>

                                        </Form>
                                    )
                                }}
                            </Formik>
                            {serverErr && (<Alert variant="danger" className="mt-4">
                                {serverErr}
                            </Alert>
                            )}

                        </Card.Body>
                    </Card>
                </Container>
            </Layout>
        </>
    )
}
export default Register







