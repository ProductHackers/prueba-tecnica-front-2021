import React, { useState } from 'react';
import { Container, Col, Form, Button } from 'react-bootstrap'

const FormComponent = () => {

    const [task, addTask] = useState({
        name: ''
    });

    const [error, updateError] = useState(false);

    const handleChange = e => {
        addTask({
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
                        placeholder="Añade tu tarea"
                        onChange={handleChange}
                        />
                    {error ? <p>Debes añadir una tarea</p> : null}
                </Col>
                <Col sm={4}>
                        <Button
                            variant="outline-danger"
                            type="submit"
                        >Añadir tarea</Button>
                </Col>
            </Form.Row>
            </Form>
        </Container>
        
    );
}

export default FormComponent;
