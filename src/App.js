import React from "react";
import { useEffect } from "react";

// ca1132f

const API_URL = 'http://omdbapi.com?apikey=ca1132f'

const App = () => {

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        console.log(data.Search);
    }

    useEffect(() => {
        searchMovies('ironman');
    }, []);

    return (
        <div className="app">
            <h1>BingeLand</h1>

            <div className="search">
                <input 
                    placeholder="Search for movies"
                    value="Spiderman"
                    onChange={() => {}}
                />
                <img 
                    src=""
                    alt="Search Icon"
                    onCLick={() => {}}
                />
            </div>

            <div className="container">
                
            </div>
        </div>
    )
}

export default App;