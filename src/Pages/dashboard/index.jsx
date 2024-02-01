import React, { useEffect } from 'react'
import { Card, Container } from 'react-bootstrap'
import Layout from '../../Components/layout'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
    let navigate = useNavigate()

    useEffect(() => {
        if (!localStorage.getItem('token')) {
            navigate('/login')
        }
        // localStorage.getItem('token')
    })
    return (
        <div>
            <Layout>
                <Container>
                    <Card>
                        <h5>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro dolore culpa ex doloribus. Alias quae tempora aperiam dignissimos deleniti quia!</h5>
                    </Card>
                </Container>
            </Layout>
        </div>
    )
}

export default Dashboard
