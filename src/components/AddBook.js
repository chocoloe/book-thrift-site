import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import NavBar from './NavBar';

export default function AddBook(props) {
    
    const nameRef = useRef();
    const courseRef = useRef();
    const conditionRef = useRef();
    const priceRef = useRef();
    const contactRef = useRef();
    const locationRef = useRef();

    const handleSubmit = event => {
        event.preventDefault();
        console.log(nameRef.current.value);
        console.log(courseRef.current.value);
        console.log(conditionRef.current.value);
        console.log(priceRef.current.value);
        console.log(contactRef.current.value);
        console.log(locationRef.current.value);
    }

    return (
        <>
        <NavBar />
        <Form>
            <Form.Group controlId="addBook">
                <Form.Label>Book Name: </Form.Label>
                <Form.Control type='text' ref={nameRef} placeholder="Ex. Harry Potter..." />
                <Form.Label>Course Number: </Form.Label>
                <Form.Control type='text' ref={courseRef} placeholder="Ex. INFO 340..." />
                <Form.Label>Condition: </Form.Label>
                <Form.Control type='text' ref={conditionRef} placeholder="Ex. New..." />
                <Form.Label>Price: </Form.Label>
                <Form.Control type='text' ref={priceRef} placeholder="Ex. $10..." />
                <Form.Label>Contact: </Form.Label>
                <Form.Control type='text' ref={contactRef} placeholder="Ex. test@gmail.com..." />
                <Form.Label>Location: </Form.Label>
                <Form.Control type='text' ref={locationRef} placeholder="Ex. U District..." />
            </Form.Group>
        </Form>
        <div className="col-auto mb-4">
            <Button onClick={handleSubmit} type="submit" className="btn btn-primary" active>Add Book</Button>
        </div>
        </>
    );
}