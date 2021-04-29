import React from 'react';
import {Container, Col, Card, Button} from 'react-bootstrap'

const Tasks = ({ taskList }) => {
    

    const {name} = taskList
    return (

        <Container>
            <Col md={4}>
                <Card className="text-center">
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
                </Col>
        </Container>
     );
}
 
export default Tasks;