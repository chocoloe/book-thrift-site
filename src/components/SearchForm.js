import React, { useRef } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';

export function SearchForm({ allBooks, setBooks }) {

    const searchRef = useRef();

    const handleSearch = event => {
        event.preventDefault();
        const filteredBooks = allBooks.filter(book => book.name.toLowerCase().includes(searchRef.current.value));
        setBooks(filteredBooks);
    }
    
    return (
        <div className="container-fluid">
            <div className="row align-items-center justify-content-center p-3">
                <div className="col-auto align-items-center">
                    <Form>
                        <Form.Group controlId="searchBook">
                            <Form.Control type='text' ref={searchRef} placeholder="Search..." />
                            <Form.Text className="text-muted">
                            Please type in the book name you want to search for. 
                            </Form.Text>
                        </Form.Group>
                    </Form>
                </div>
                <div className="col-auto mb-4">
                    <Button onClick={handleSearch} type="submit" className="btn btn-primary" active>Search</Button>
                </div>
            </div>
        </div>
    );
}