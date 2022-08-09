import React, { useState } from 'react';

export default function AddBook(props) {
    const [addBook, setAddBook] = useState({
        name: "",
        courseName: "",
        condition: "",
        price: "",
        contact: "",
        location: ""
    });

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    const handleChange = (event) => {
        const value = event.target.value;
        setAddBook({
            ...addBook,
            [event.target.name]: value
        });
    }

    return (
        <div className="container addingBook">
            
            <form onSubmit={handleSubmit}>
                <label>
                Name:
                <input type="text" value={addBook.name} name="name" placeholder="Ex. Harry Potter..." onChange={handleChange} />
                </label>

                <label>
                Course Name:
                <input type="text" value={addBook.courseName} name="courseName" placeholder="Ex. INFO 340..." onChange={handleChange} />
                </label>

                <label>
                Condition:
                <input type="text" value={addBook.condition} name="condition" placeholder="Ex. New..." onChange={handleChange} />
                </label>

                <label>
                Price:
                <input type="text" value={addBook.price} name="price" placeholder="Ex. $10..." onChange={handleChange} />
                </label>

                <label>
                Contact:
                <input type="text" value={addBook.contact} name="contact" placeholder="Ex. xyz123@uw.edu..." onChange={handleChange} />
                </label>

                <label>
                Location:
                <input type="text" value={addBook.location} name="location" placeholder="Ex. U-DISTRICT..." onChange={handleChange} />
                </label>

                <button className="btn btn-primary" type="submit" >
                    <span>Submit</span>
                </button>
            </form>

        </div>
    ); 
}