import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export function Signin( props ) {
    document.title = "Sign in"
    return(
        <Container>
            <Row>
                <Col md={{ span: 4, offset:4 }}>
                    <Form>
                        <h2>Sign in</h2>
                        
                        <Form.Group>
                            <Form.Label>Username</Form.Label>
                            <Form.Control 
                                name="username"
                                type="username"
                                placeholder="Username"
                                required
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Control 
                                name="email"
                                type="email"
                                placeholder="user@domain.com"
                                required
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>First Name</Form.Label>
                            <Form.Control 
                                name="name"
                                type="name"
                                placeholder="First name"
                                required
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control 
                                name="name"
                                type="name"
                                placeholder="Last Name"
                                required
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Address</Form.Label>
                            <Form.Control 
                                name="address"
                                type="address"
                                placeholder="Your full address"
                                required
                            />
                        </Form.Group>
                        

                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control 
                                name="password"
                                type="password"
                                placeholder="minimum 8 characters"
                                required
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control 
                                name="password"
                                type="password"
                                placeholder="minimum 8 characters"
                                required
                            />
                        </Form.Group>
                        <div style={{margin: '1rem'}}></div>
                        <Button variant="primary" type="submit">
                            Sign up
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}