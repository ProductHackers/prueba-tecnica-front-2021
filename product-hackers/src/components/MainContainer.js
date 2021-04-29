import React from 'react';
import './maincontainer.css';
import { Container, Row, Col } from 'react-bootstrap'

const MainContainer = () => {
    return (
        <div className="whatever">
            <Container>
                <video playsInline autoPlay muted loop className='homepage-Video'>
                    <source src={`https://res.cloudinary.com/javiferiv/video/upload/v1619633154/Product-hackers/White_Wheel_Moving___4K_Relaxing_Screensaver_n2lkch.mp4`} />
                </video>
                <Row>
                    <Col md={8}>
                        <h1 className="main-title">Administrador de Tareas</h1>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default MainContainer;