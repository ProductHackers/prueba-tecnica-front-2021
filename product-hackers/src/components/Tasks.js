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

            <Col md={4}>
                <Card className="text-center">
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        {completed ?
                        <Button
                            variant="dark"
                            className="incompleted-btn"
                            onClick={() => completedTask(id)}
                        >Completada</Button>
                            :
                        <Button
                            variant="dark"
                            className="completed-btn"
                            onClick={() => completedTask(id)}
                        >No completada</Button>
                        }
                        <br></br>
                        <Button onClick={() => favoritesTasks(id)}>
                            {favorite ? <Image className='fullHeart'src={FullHeart}/>
                                :
                            <Image className='emptyHeart' src={EmptyHeart} />
                            }
                        </Button>
                        <Button className='delete-button' onClick={() => deleteAlert()}>
                            <Image className='trush' src={Trush} />
                        </Button>
                    </Card.Body>
                </Card>
                </Col>
     );
}
 
export default Tasks;

{/* <Button
    variant="warning"
    onClick={() => favoritesTasks(id)}
>Marcar como favorita</Button> */}