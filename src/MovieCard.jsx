import React from "react"

const MovieCard = ({ samplemovie }) => {
    return (
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
    )

}

export default MovieCard;