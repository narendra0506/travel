import { Card, CardBody, CardHeader, CardLink, CardText, CardTitle, Container } from "react-bootstrap"
import Layout from "../../Components/layout"

const About = () => {
    return (
        <>
            <Layout>
                <Container>
                    <Card className="mt-5">
                        <CardBody>
                            <CardTitle>ABOUT PAGE</CardTitle>
                            <CardText>Volvo Buses (Volvo Bus Corporation / formal name: Volvo Bussar AB) 
                                (stylized as VOLVO) is a subsidiary and a business area of the Swedish 
                                vehicle maker Volvo, which became an independent division in 1968. It is
                                It is one of the world's largest bus manufacturers, with a complete range of heavy buses for passenger transportation. The product range includes complete buses and coaches as well as chassis combined with a comprehensive range of services.[2]</CardText>
                            <CardLink>Link</CardLink>
                            <CardLink>Link 2</CardLink>
                        </CardBody>

                    </Card>
                </Container>
            </Layout>
        </>
    )
}
export default About