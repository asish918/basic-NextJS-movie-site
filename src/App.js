import React from "react";
import { useEffect } from "react";

// ca1132f

const API_URL = 'http://omdbapi.com?apikey=ca1132f'

const samplemovie = {

    "Title": "Spiderman",
    "Year": "2010",
    "imdbID": "tt1785572",
    "Type": "movie",
    "Poster": "N/A"


}

const App = () => {

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        console.log(data.Search);
    }

    useEffect(() => {
        searchMovies('Spiderman');
    }, []);

    return (
        <div className="app">
            <h1>BingeLand</h1>

            <div className="search">
                <input
                    placeholder="Search for movies"
                    value="Spiderman"
                    onChange={() => { }}
                />
                <img
                    src=""
                    alt="Search Icon"
                    onCLick={() => { }}
                />
            </div>

            <div className="container">
                <div className="movie">
                    <div>
                        <p>{samplemovie.Year}</p>
                    </div>

                    <div>
                        <img src={samplemovie.Poster !== 'N/A' ? samplemovie.Poster : 'https://via.placeholder.com/400'} alt={samplemovie.Title} 
                            />
                    </div>

                    <div>
                        <span>{samplemovie.Type}</span>
                        <h3>{samplemovie.Title}</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App;