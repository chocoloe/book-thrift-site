import React, { useState } from 'react';

export function SearchForm({ allBooks, setDisplayBooks }) {

    const [search, setSearch] = useState("");

    const handleChange = event => {
        const searchInput = event.target.value;
        setSearch(searchInput);
    }

    const handleSearch = event => {
        event.preventDefault();
        const filteredBooks = allBooks.filter(book => book.bookName.toLowerCase().includes(search));
        setDisplayBooks(filteredBooks);
    }
    
    return (
        <div className="container searchbar p-3">
            <form onSubmit={handleSearch}>
                <input type="text" value={search} onChange={handleChange} placeholder="Please type in book name." />
                <button className="btn btn-primary" type="submit" >
                    <span>Search</span>
                </button>
            </form>
        </div>
    );
}