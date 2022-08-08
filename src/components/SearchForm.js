import React, { useState, useRef } from 'react';

export function SearchForm({ allBooks, setBooks }) {

    const [search, setSearch] = useState("");

    const handleClick = event => {
        const searchInput = event.target.value;
        setSearch(searchInput);
    }

    const handleSearch = event => {
        event.preventDefault();
        const filteredBooks = allBooks.filter(book => book.name.toLowerCase().includes(search));
        setBooks(filteredBooks);
    }
    
    return (
        <div className="container searchbar">
            <form onSubmit={handleSearch}>
                <input type="text" value={search} onChange={handleClick} placeholder="Please type in book name." />
                <button className="btn btn-primary" type="submit" >
                    <span>Search</span>
                </button>
            </form>
        </div>
    );
}