import React from 'react';
import { Container, Col, Card, Button } from 'react-bootstrap';
import swal from 'sweetalert';

const Tasks = ({ taskList, deleteTask, completedTask, favoritesTasks }) => {
    

    const { name, id } = taskList;

    const deleteAlert = () => {
        swal({
            title: "Eliminar",
            text: "¿Estás seguro de que deseas eliminar la tarea?",
            icon: "warning",
            buttons: ["No", "Sí"]
        }).then(answer => {
            if (answer) {
                deleteTask(id)
                swal({
                    text: "La tarea ha sido eliminada con éxito",
                    icon: "success"
                })
            }
        })
    }

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
                            onClick={() => deleteAlert()}
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