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
        <h1>Hello World</h1>
    )
}

export default App;