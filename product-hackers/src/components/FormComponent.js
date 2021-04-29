import React, { useState } from 'react';
import { Container, Col, Form, Button } from 'react-bootstrap';

import { v4 as uuidv4 } from 'uuid';

const FormComponent = ({ addTask }) => {

    const [task, addOneTask] = useState({
        name: '',
        completed: false,
        favorite: false
    });

    const [error, updateError] = useState(false);

    const handleChange = e => {
        addOneTask({
            ...task,
            [e.target.name]: e.target.value
        })
    };

    const { name } = task;

    const submitTask = e => {
        e.preventDefault();
        
        if (name.trim() === "") {
            updateError(true)
            return;
        }

        updateError(false);
        task.id = uuidv4();
        addTask(task)

        addOneTask({
            name: '',
            completed: false,
            favorite: false
        });

    }
    return (

        <Container>
            <Form
                onSubmit={submitTask}
            >
            <Form.Row className="align-items-center">
                <Col sm={6} className="my-1">
                    <Form.Control size="lg"
                        type="text"
                        name="name"
                        placeholder="Añade tu tarea"
                        value={name}
                        onChange={handleChange}
                        />
                    {error ? <p>Debes añadir una tarea</p> : null}
                </Col>
                <Col sm={4}>
                        <Button
                            variant="outline-danger"
                            className="submit-btn"
                            type="submit"
                        >Añadir tarea</Button>
                </Col>
            </Form.Row>
            </Form>
        </Container>
        
    );
}

export default FormComponent;
