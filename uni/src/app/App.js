import './App.css';
import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';

function App() {

    const [items, setItems] = useState([]);

    return (
        <div className="App">
        <header>
            <div className="container">
                <h4>Uni Finder</h4>
                <SearchBar />
            </div>
        </header>
        <main>
            <div className="wrapper">
                <div className="grid-left">
                    { items 
                        ? items.map((item) => (
                            <li key={item.name}>
                                {item}
                            </li>
                        )) 
                        : 'Loading...'
                    }
                </div>
                <div className="grid-right">
                    Temporary Content 2
                </div>
            </div>
        </main>
        <footer>
            <div className="container">
                <p>Temporary Footer Content</p>
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
