import './App.css';
import React, { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import DisplayList from '../components/DisplayList';

function App() {
    const [results, setResults] = useState([]);
    const [uniList, setUniList] = useState([]); 
    const [shortlist, setShortlist] = useState([]);
    
    const [uniListTitle, setUniListTitle] = useState('');

    return (
        <>
            <header>
                <div className="container">
                    <h1 className="app-title">Uni Finder</h1>
                    <SearchBar setResults={setResults} setUniListTitle={setUniListTitle}/>
                </div>
            </header>
            <main>
                <DisplayList setItems={setResults} items={results} />
            </main>
            <footer>
                <div className="container">
                    <a className="App-link"
                        href="https://github.com/Hipo/university-domains-list-api"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Built using the free University Domains and Names API 
                    </a>
                </div>
            </footer>
        </>
    );
}

export default App;
