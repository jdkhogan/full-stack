import React, { useRef, useState, useEffect } from 'react';
import { createSearchParams } from 'react-router-dom';

const Search = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState(null);
    
    const countryInputRef = useRef();
    const nameInputRef = useRef();

    let search = null;

    const onSearchHandler = (e) => {
        e.preventDefault();
        
        if (e.target.classList.contains('search-country') ) {
            const country = countryInputRef.current.value;
            search = "country=" + country;
        }
        
        if (e.target.classList.contains('search-name') ) {
            const uniName = nameInputRef.current.value;
            search = "name=" + uniName;
        }
    };

    useEffect(() => {
        fetch("http://universities.hipolabs.com/search?" + search)
        .then((res) => res.json())
        .then(
            (result) => {
                setIsLoaded(true);
                setItems(result);
            }, 
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
            );
      }, []);

    return (
        <>
            <form onSubmit={onSearchHandler} className="search-form search-country">
                <input type="text" className="search" placeholder="Search by country" ref={countryInputRef} />
                <button type="submit" className="search-button">
                    🔎
                </button>
            </form>
            <form onSubmit={onSearchHandler} className="search-form search-name">
                <input type="text" className="search" placeholder="Search by university name" ref={nameInputRef} />
                <button type="submit" className="search-button">
                    🔎
                </button>
            </form>
        </>

    );
};

export default Search;
