import React, { useState, useEffect } from 'react';

const SearchBar = ({ setResults, setUniListTitle }) => {
    const [searchQuery, setSearchQuery] = useState(null);
    
    const onSearchHandler = (e) => {
        e.preventDefault();
        
        if (e.target.classList.contains('search-country') ) {
            let countryQuery = e.target.elements.countrySearch.value;
            if (countryQuery) {
                countryQuery = countryQuery.toLowerCase();
                setUniListTitle('Universities in ' + countryQuery[0].toUpperCase() + countryQuery.slice(1));
                setSearchQuery("country=" + countryQuery);
            }
        }
        
        if (e.target.classList.contains('search-name') ) {
            let nameQuery = e.target.elements.nameSearch.value;
            if (nameQuery) {
                setUniListTitle('Universities matching: ' + nameQuery);
                setSearchQuery("name=" + nameQuery.toLowerCase());
            }
        }
        
        fetchData(searchQuery);
    };
    
    const fetchData = (searchQuery) => {
        fetch("http://universities.hipolabs.com/search?" + searchQuery)
            .then(res => res.json())
            .then(data => setResults(data))
            .catch(err => console.log(err))
    }

    return (
        <>
            <form onSubmit={onSearchHandler} className="search-form search-country">
                <input type="text" 
                    id="countrySearch"
                    className="search" 
                    placeholder="Search by country" 
                />
                <button type="submit" className="search-button">🔎</button>
            </form>
            <form onSubmit={onSearchHandler} className="search-form search-name">
                <input type="text" 
                    id="nameSearch"
                    className="search" 
                    placeholder="Search by university name"
                />
                <button type="submit" className="search-button">🔎</button>
            </form>
        </>
    );
};

export default SearchBar;