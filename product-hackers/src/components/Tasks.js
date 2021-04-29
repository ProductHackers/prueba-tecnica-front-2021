import React from 'react';
import {Container, Col, Card, Button} from 'react-bootstrap'

const Tasks = ({ taskList }) => {
    

    const { name } = taskList;



    return (

        <Container>
            <Col md={4}>
                <Card className="text-center">
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Button variant="dark">Completada</Button>
                        <Button variant="danger">Eliminar tarea</Button>
                        <Button variant="danger">Marcar como favorita</Button>
                    </Card.Body>
                </Card>
                </Col>
        </Container>
     );
}
 
export default Tasks;