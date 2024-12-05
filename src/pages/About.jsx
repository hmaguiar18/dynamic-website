import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export function About( props ) {
    document.title = "Who we are"
    return(
        <Container>
            <Row>
            <div style={{margin: '1rem'}}></div>
                <Col md={{ span: 8, offset:2 }}>
                    <h2>Discover Grapy, Your Ultimate Wine Haven</h2>
                    <p>
                        Welcome to Grapy, where every bottle is a journey waiting to be uncorked. We pride ourselves on offering a handpicked selection of wines from the world’s most esteemed vineyards, ensuring you find the perfect match for any moment.
                    </p>
                    <h2>Our Commitment to You</h2>
                    <p>
                        At Grapy, we are dedicated to making your wine shopping experience exceptional. Whether you’re a wine aficionado or just beginning your journey, we aim to make wine discovery enjoyable and accessible for everyone. Explore our collection today and let Grapy guide you through the world of fine wines.
                    </p>
                    <img src='https://daily.sevenfifty.com/app/uploads/2019/05/SFD_Making_Most_retail_space_4_Compass_Wines_2520x1420.jpg' style={{maxWidth: '800px'}}></img>
                </Col>
            </Row>
        </Container>
    )
}