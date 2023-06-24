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
        <div className="App">
        <header>
            <div className="container">
                <h1 className="app-title">Uni Finder</h1>
                <SearchBar setResults={setResults} setUniListTitle={setUniListTitle}/>
            </div>
        </header>
        <main>
            <div className="wrapper">
                <div className="grid-left">
                    { results && results.length > 0 
                        ? <DisplayList items={results} title={uniListTitle}/> 
                        : <h4>Enter a search above to begin</h4>
                    }
                </div>
                <div className="grid-right">
                    { shortlist && shortlist.length > 0 
                        ? <DisplayList items={shortlist} title={shortlist ? "Shortlist" : ""}/> 
                        : <h4>Build your  very own shortlist!</h4>
                    }
                </div>
            </div>
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
        </div>
    );
}

export default App;
