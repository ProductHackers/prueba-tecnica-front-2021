import React from 'react';
import {Container, Col, Card, Button} from 'react-bootstrap'

const Tasks = ({ taskList, deleteTask, completedTask, favoritesTasks }) => {
    

    const { name, id } = taskList;

    return (

        <Container>
            <Col md={4}>
                <Card className="text-center">
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Button
                            variant="dark"
                            onClick={() => completedTask(id)}
                        >Completada</Button>
                        <Button
                            variant="danger"
                            onClick={() => deleteTask(id)}
                        >Eliminar tarea</Button>
                        <Button
                            variant="warning"
                            onClick={() => favoritesTasks(id)}
                        >Marcar como favorita</Button>
                    </Card.Body>
                </Card>
                </Col>
        </Container>
     );
}
 
export default Tasks;