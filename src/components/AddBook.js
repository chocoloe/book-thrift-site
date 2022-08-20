import React, { useState, useEffect } from 'react';
import { getDatabase, ref, push as firebasePush } from 'firebase/database';
import { getAuth } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';


export default function AddBook(props) {

    const auth = getAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!auth.currentUser) {
            console.log('LOGIN NOT ALLOWED');
            navigate('/signin');
            return;
        }
        console.log('LOGIN SUCCESS');
    }, []);

    const [complete, setComplete] = useState(false);

    const addNewBook = (bookName, courseName, condition, price, contact, location, description) => {
        const newBook = {
          bookName: bookName,
          course: courseName,
          condition: condition,
          price: price,
          timestamp: Date.now(),
          contact: contact,
          location: location,
          description: description
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
        location: "",
        description: ""
    }

    const [addBook, setAddBook] = useState(emptyState);

    const handleSubmit = (event) => {
        event.preventDefault();
        addNewBook(addBook.name, addBook.courseName, addBook.condition, 
            addBook.price, addBook.contact, addBook.location, addBook.description);
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

            { complete && <p>Upload Success!</p>}

            <form onSubmit={handleSubmit}>
                <label>
                Name:
                <input type="text" value={addBook.name} name="name" placeholder="Ex. Braiding Sweetgrass..." onChange={handleChange} />
                </label>

                <label>
                Course Name:
                <input type="text" value={addBook.courseName} name="courseName" placeholder="Ex. ENGL 299..." onChange={handleChange} />
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

                <label>
                Other description:
                <input type="text" value={addBook.description} name="location" placeholder="Contact me for more details." onChange={handleChange} />
                </label>

                <button className="btn btn-primary" type="submit" >
                    <span>Submit</span>
                </button>
            </form>
        </div>
    ); 
}