import React from "react";
import '../styles.css'

export default function MoiveCard({ movie, isWatchlisted, toggleWatchlist }) {
    const ImgHandelError = (e) => {
        e.target.src = "images/default.jpg"
    }

    const ratingColorClass = (rating) => {
        if (rating >= 8) return "rating-good"
        else if (rating < 8 && rating >= 5) return "rating-ok"
        return "rating-bad"
    }

    return (
        <div key={movie.id} className='movie-card'>
            <img src={`images/${movie.image}`} alt={movie.title} onError={ImgHandelError} />
            <div className="movie-card-info">
                <h3 className='movie-card-title' >{movie.title}</h3>
                <div>
                    <span className='movie-card-genre'>{movie.genre}</span>
                    <span className={`movie-card-rating ${ratingColorClass(movie.rating)}`}>{movie.rating}</span>
                </div>
                <label className="switch">
                    <input>

                    </input>
                    <span className="slider">
                        <span className="slider-label" {isWatchlisted ? "In Watchlist" : "Add to Watchlist"}></span>
                    </span>
                </label>
            </div>
        </div>
    )
}