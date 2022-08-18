import React, { useState } from 'react';
import { getDatabase, ref, push as firebasePush } from 'firebase/database';

export default function AddBook(props) {

    const [complete, setComplete] = useState(false);

    const addNewBook = (bookName, courseName, condition, price, contact, location) => {
        const newBook = {
          bookName: bookName,
          course: courseName,
          condition: condition,
          price: price,
          timestamp: Date.now(),
          contact: contact,
          location: location
        }
    
        //reference Firebase
        const db = getDatabase(); //url for the database, not the data itself
        const allBooks = ref(db, "Books"); //refers to "message" location in the database
        firebasePush(allBooks, newBook)
        .then(msg => {
            console.log(msg);
            setComplete(true);
        })
        .catch(err => console.err(err));
    }
    

    const emptyState = {
        name: "",
        courseName: "",
        condition: "",
        price: "",
        contact: "",
        location: ""
    }

    const [addBook, setAddBook] = useState(emptyState);

    const handleSubmit = (event) => {
        event.preventDefault();
        addNewBook(addBook.name, addBook.courseName, addBook.condition, 
            addBook.price, addBook.contact, addBook.location);
            setAddBook(emptyState);
    }

    const handleChange = (event) => {
        setComplete(false);
        const value = event.target.value;
        setAddBook({
            ...addBook,
            [event.target.name]: value
        });
    }

    return (
        <div className="container addingBook">

            { complete && <p>MISSON SUCCESS</p>}

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