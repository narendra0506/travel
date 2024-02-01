import { Card, CardBody, CardHeader, CardLink, CardText, CardTitle, Container } from "react-bootstrap"
import Layout from "../../Components/layout"

const Home = () => {
    return (
        <>
            <Layout>
                <Container>
                    <Card className="mt-5">
                        <CardHeader>Welcome to Volvo Tours & Travels</CardHeader>
                        <CardBody>
                            <CardTitle>Lets Know About Volvo Tours & Travels</CardTitle>
                            <CardText>Volvo Buses (Volvo Bus Corporation / formal name: Volvo Bussar AB)
                                (stylized as VOLVO) is a subsidiary and a business area of the Swedish
                                vehicle maker Volvo, which became an independent division in 1968. It is
                                based in Gothenburg</CardText>
                            <CardLink>Card link</CardLink>
                            <CardLink>Other Link</CardLink>
                        </CardBody>
                    
                    </Card>
                    {/* <Card className="mt-5 p-3">Welcome to Volvo Tours & Travels</Card>
                <Card.Body>
                    <Card.Title>Lets Know About Volvo Tours & Travels</Card.Title>
                </Card.Body> */}
                </Container>
            </Layout>
        </>
    )
}
export default Home