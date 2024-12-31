import React, { useState, useEffect } from "react";
import '../styles.css'
import MoiveCard from "./MoiveCard";

export default function MoviesGrid() {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [genre, setGenre] = useState("All Genres");
    const [rating, setRating] = useState("All");
    useEffect(() => {

        fetch("movies.json")
            .then(respons => respons.json())
            .then(data => setMovies(data))

    }, [])

    const handelSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handelGenereChange = (e) => {
        setGenre(e.target.value);
    };

    const handelRatingChange = (e) => {
        setRating(e.target.value);
    };

    const matchesGenre = (movie, genre) => {
        return genre === "All Genres" || movie.genre.toLowerCase() === genre.toLowerCase();
    }

    const matchesSearchTerm = (movie, searchTerm) => {
        return movie.title.toLowerCase().includes(searchTerm.toLowerCase());
    }

    const matchesRating = (movie, rating) => {
        switch (rating) {
            case 'All':
                return true;

            case 'Good':
                return movie.rating >= 8;

            case 'Ok':
                return movie.rating >= 5 && movie.rating < 8;

            case 'Bad':
                return movie.rating < 5;

            default:
                return false;
        }
    }

    const filteredMovies = movies.filter(movie =>
        matchesGenre(movie, genre) &&
        matchesRating(movie, rating) &&
        matchesSearchTerm(movie, searchTerm)
    );

    return (
        <div>
            <input type="text"
                className="search-input"
                placeholder="Search movies..."
                value={searchTerm}
                onChange={handelSearchChange}>
            </input>

            <div className="filter-bar">
                <div className="filter-slot">
                    <label>Genre</label>
                    <select className="filter-dropdown" value={genre} onChange={handelGenereChange}>
                        <option>All Genres</option>
                        <option>Action</option>
                        <option>Drama</option>
                        <option>Fantasy</option>
                        <option>Horror</option>
                    </select>
                </div>

                <div className="filter-slot">
                    <label>Rating</label>
                    <select className="filter-dropdown" value={rating} onChange={handelRatingChange}>
                        <option>All</option>
                        <option>Good</option>
                        <option>Ok</option>
                        <option>Bad</option>
                    </select>
                </div>

            </div>

            <div className="movies-grid">
                {
                    filteredMovies.map(movie => (
                        <MoiveCard movie={movie} key={movie.id}></MoiveCard>
                    ))
                }
            </div>
        </div>
    )
}