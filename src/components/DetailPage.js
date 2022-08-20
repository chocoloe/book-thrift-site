import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { getDownloadURL, getStorage, ref } from "firebase/storage";
import { async } from '@firebase/util';

export default function DetailPage() {
    const location = useLocation();
    const { book } = location.state;

    const [url, setUrl] = useState('');

    useEffect(() => {
        const func = async() => {
            const storage = getStorage();
            const goBackRef = ref(storage, '/goback-icon.png');
            await getDownloadURL(goBackRef).then((url) => {
                setUrl(url);
            })
        }
        func();

    }, []);

    return (
        <>
            <div className="container">
                <div></div>
                <Link to='/home' ><img src={url} alt='go back icon' className='gobackIcon' /></Link>
                <div className="card m-3 mx-auto rounded-4 shadow detailCard">
                    <div className="row g-0">
                        <div className="col-8 col-md-4 m-4">
                            <img src={book.img} className="bookDetailImg" ></img>
                        </div>
                        <div className="col-md m-3">
                            <p><b>Book name: </b>{book.bookName}</p>
                            <p><b>Course name: </b>{book.course}</p>
                            <p><b>Price: </b>{book.price}</p>
                            <p><b>Contact: </b>{book.contact}</p>
                            <p><b>Location: </b>{book.location}</p>
                            <p><b>Description: </b>{book.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}