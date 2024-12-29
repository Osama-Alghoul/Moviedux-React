import React, { useState, useEffect } from "react";
import '../styles.css'
import MoiveCard from "./MoiveCard";

export default function MoviesGrid() {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {

        fetch("movies.json")
            .then(respons => respons.json())
            .then(data => setMovies(data))

    }, [])

    const handelSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredMovies = movies.filter(movie =>
        movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    )

    return (
        <div>
            <input type="text" 
            className="search-input" 
            placeholder="Search movies..." 
            value={searchTerm} 
            onChange={handelSearchChange}></input>
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