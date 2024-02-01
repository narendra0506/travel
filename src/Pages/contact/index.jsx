import { Button, Card, Col, Container, Row } from "react-bootstrap"
import Layout from "../../Components/layout"
import { Formik } from "formik"
import "./contact.css"
import { useNavigate } from "react-router-dom"
import Thankyou from "../contact/thankyou.png"
import * as Yup from "yup";
import Form from 'react-bootstrap/Form';


const Contact = () => {
    const signUpSchema = Yup.object({
        name: Yup.string().min(2).max(25).required("Please enter your name"),
        email: Yup.string().email().required("Please enter your email")

      });

    const navigate = useNavigate();
    return (

        <Layout>
            <Container>
                <div>
                    {/* <h1>Contact us</h1> */}
                    <Formik

                        initialValues={{

                            name: "",
                            email: "",
                            number: "",
                            radio: "",
                            hobbies: [],
                            msg: "",
                        }}
                        // // validate={(values) => {
                        // //     let errors = {};
                        // //     if (values.name === "") {
                        // //         errors.name = "Enter your Name";
                        // //     }
                        // //     if (values.email === "") {
                        // //         errors.email = "Enter Your Email"
                        // //     }
                        // //     if (values.number === "") {
                        // //         errors.number = "Enter your Contact number"
                        // //     }
                        // //     return errors;

                        // }}
                        onSubmit={(values, { setSubmitting }) => {
                            setTimeout(() => {
                                alert(JSON.stringify(values, null, 2));
                                console.log("form submmited", values);
                                setSubmitting(true);
                            }, 5000)

                        }}
                     validationSchema={signUpSchema}
                    >
                        {({ handleChange, handleBlur, values, errors, touched, handleSubmit, isSubmitting }) => {
                            // console.log('touched:', touched);
                            // console.log('errors:', errors);
                            return (
                                <>
                                    <Card>
                                        <Card.Header className="text-center">Contact Us</Card.Header>
                                        <Row>

                                            <Col><div className="bg-info">
                                                <Card.Body>

                                                    {isSubmitting ? <img src={Thankyou}
                                                        alt="thankyou"
                                                        width="100%"
                                                    /> :

                                                        <Form onSubmit={handleSubmit}>
                                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                                <Form.Label>Enter Your Name</Form.Label>
                                                                <Form.Control
                                                                    type="text"
                                                                    name="name"
                                                                    // className={errors.name ? "is-invalid" : ""}
                                                                    value={values.name}
                                                                    onChange={handleChange}
                                                                    isInvalid={!!errors.name && touched.name}
                                                                    
                                                                />
                                                                
                                                                <div className="text-danger">{touched.name && errors.name}</div>
                                                                
                                                            </Form.Group>

                                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                                <Form.Label>Enter your Email</Form.Label>
                                                                <Form.Control
                                                                    type="text"
                                                                    name="email"
                                                                    value={values.email}
                                                                    onChange={handleChange}
                                                                    isInvalid={!!errors.email && touched.email}
                                                            />
                                                            <div className="text-danger">{touched.email && errors.email}</div>
                                                                
                                                            </Form.Group>

                                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                                <Form.Label>Enter your Number</Form.Label>
                                                                <Form.Control type="number"
                                                                    name="number"
                                                                    id="number1"
                                                                    
                                                                    value={values.number}
                                                                    onChange={handleChange}
                                                                    className="form-control" />
                                                                
                                                                    <div className="text-danger">{errors.number}</div>
                                                                    
            
                                                            </Form.Group>

                                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                                <Form.Label>Gender</Form.Label>
                                                                <div>
                                                                    Male<Form.Check inline type="radio"
                                                                        name="radio"
                                                                        value="male"
                                                                        checked={values.radio === "male"}
                                                                        onChange={handleChange}
                                                                
                                                                    />
                                                                    
                                                                    Female<Form.Check inline type="radio"
                                                                        name="radio"
                                                                        value="female"
                                                                        checked={values.radio === "female"}
                                                                        onChange={handleChange}
                                                                        
                                                                    />
                                                                    
                                                                </div>
                                                            </Form.Group>

                                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                                <Form.Label>Hobbies</Form.Label>
                                                                <div>
                                                                   Dance <Form.Check type="checkbox"
                                                                        name="hobbies"
                                                                        value="dance"
                                                                        inline
                                                                        checked={values.hobbies.includes("dance")}
                                                                        onChange={handleChange}
                                                                    
                                                                    />
                                                                Music
                                                                    <Form.Check type="checkbox"
                                                                        name="hobbies"
                                                                        value="music"
                                                                        inline
                                                                        checked={values.hobbies.includes("music")}
                                                                        onChange={handleChange}
                                                            
                                                                    />
                                                                    Writing
                                                                    <Form.Check type="checkbox"
                                                                        name="hobbies"
                                                                        value="writing"
                                                                        inline
                                                                        checked={values.hobbies.includes("writing")}
                                                                        onChange={handleChange}
                                                                        
                                                                    />
                                                                    
                                                                </div>
                                                            </Form.Group>

                                                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                                                <Form.Label>message</Form.Label>
                                                                <Form.Control as="textarea" rows={3}
                                                                    type="text"
                                                                    name="msg"
                                                                    placeholder="Enter Your Message"
                                                                    value={values.msg}
                                                                    onChange={handleChange}
                                                                    className="form-control" />
                                                            </Form.Group>

                                                            <Button type="submit" disabled={isSubmitting} className="mt-3">SEND INQUIRY</Button>
                                                        </Form>}


                                                </Card.Body>
                                            </div>
                                            </Col>
                                            <Col >
                                                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14881.075460587183!2d72.824909!3d21.1814757!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04fbc53566d6b%3A0xa05f4515a070c233!2sDarwin!5e0!3m2!1sen!2sin!4v1706178137140!5m2!1sen!2sin" className="h-100 w-100" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                            </Col>
                                        </Row>
                                    </Card>
                                </>
                                // <section>
                                // <div className="row">
                                //     <div className="col-6">
                                //         {isSubmitting ? <img src={Thankyou}
                                //             alt="thankyou"
                                //             width="100%"
                                //         /> :
                                //             <form onSubmit={handleSubmit}>
                                //                 <div>
                                //                     <label htmlFor="" class="form-label">Enter Name</label>
                                //                     <input
                                //                         type="text"
                                //                         name="name"
                                //                         // className={errors.name ? "is-invalid" : ""}
                                //                         value={values.name}
                                //                         onChange={handleChange}
                                //                         className="form-control is-invalid"
                                //                     />
                                //                     <div className="text-danger">{errors.name}</div>


                                //                 </div>
                                //                 <div>
                                //                     <label htmlFor="">Enter Email</label>
                                //                     <input
                                //                         type="text"
                                //                         name="email"

                                //                         value={values.email}
                                //                         onChange={handleChange}
                                //                         className="form-control" />
                                //                     <div className="text-danger">{errors.email}</div>
                                //                 </div>

                                //                 <div>
                                //                     <label htmlFor="number1">Enter Number</label>
                                //                     <input
                                //                         type="number"
                                //                         name="number"
                                //                         id="number1"

                                //                         value={values.number}
                                //                         onChange={handleChange}
                                //                         className="form-control" />
                                //                     <div className="text-danger">{errors.number}</div>
                                //                 </div>

                                //                 <div>
                                //                     <label>Gender</label>
                                //                     <input type="radio"
                                //                         name="radio"
                                //                         value="male"
                                //                         checked={values.radio === "male"}
                                //                         onChange={handleChange} />Male
                                //                     <input type="radio"
                                //                         name="radio"
                                //                         value="female"
                                //                         checked={values.radio === "female"}
                                //                         onChange={handleChange} />Female
                                //                 </div>

                                //                 <div>
                                //                     <label>Hobbies</label>
                                //                     <input type="checkbox"
                                //                         name="hobbies"
                                //                         value="dance"
                                //                         checked={values.hobbies.includes("dance")}
                                //                         onChange={handleChange} />Dance

                                //                     <input type="checkbox"
                                //                         name="hobbies"
                                //                         value="music"
                                //                         checked={values.hobbies.includes("music")}
                                //                         onChange={handleChange} />Music

                                //                     <input type="checkbox"
                                //                         name="hobbies"
                                //                         value="writing"
                                //                         checked={values.hobbies.includes("writing")}
                                //                         onChange={handleChange} />Writing
                                //                 </div>

                                //                 <div>
                                //                     <label htmlFor="">Enter Message</label>
                                //                     <textarea
                                //                         type="text"
                                //                         name="msg"
                                //                         placeholder="Enter Your Message"
                                //                         value={values.msg}
                                //                         onChange={handleChange}
                                //                         className="form-control" />

                                //                 </div>
                                //                 {/* <button type="submit" disabled={isSubmitting}>SEND INQUIRY</button> */}
                                //                 <Button type="submit" disabled={isSubmitting} className="mt-3">SEND INQUIRY</Button>
                                //             </form>}
                                //     </div>
                                //     <div className="col-6"><iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14881.075460587183!2d72.824909!3d21.1814757!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04fbc53566d6b%3A0xa05f4515a070c233!2sDarwin!5e0!3m2!1sen!2sin!4v1706178137140!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
                                // </div>
                                // </section>
                            )
                        }}
                    </Formik>
                </div>
            </Container>
        </Layout >
    )
}
export default Contact

