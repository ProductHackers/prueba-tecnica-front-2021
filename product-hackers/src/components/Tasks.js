import React from 'react';
import EmptyHeart from './../img/empty_heart.png';
import FullHeart from './../img/full_heart.png';
import Trush from './../img/trush.png';
import { Container, Col, Card, Button, Image } from 'react-bootstrap';
import swal from 'sweetalert';

const Tasks = ({ taskList, deleteTask, completedTask, favoritesTasks }) => {
    

    const { name, id, favorite, completed } = taskList;

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
                        {completed ?                         <Button
                            variant="dark"
                            onClick={() => completedTask(id)}
                        >Completada</Button>
                            :
                        <Button
                            variant="dark"
                            onClick={() => completedTask(id)}
                        >No completada</Button>
                        }
                        <Button
                            variant="danger"
                            onClick={() => deleteAlert()}
                        >Eliminar tarea</Button>
                        <Button className='delete-button' onClick={() => deleteAlert()}>
                            <Image className='trush' src={EmptyHeart} />
                        </Button>
                        <Button className='detail-fav-btn-card' onClick={() => favoritesTasks(id)}>
                            {favorite ? <span className='detail-likeHeart' ><Image className='fullHeart'src={FullHeart}/></span>
                                :
                                <span className='detail-unliked-btn '><Image className='emptyHeart' src={EmptyHeart}  /></span>
                            }
                        </Button>
                    </Card.Body>
                </Card>
                </Col>
        </Container>
     );
}
 
export default Tasks;

{/* <Button
    variant="warning"
    onClick={() => favoritesTasks(id)}
>Marcar como favorita</Button> */}