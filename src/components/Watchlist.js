import React from "react";
import '../styles.css';
import MoiveCard from "./MoiveCard";

export default function Watchlist({ movies, watchlist, toggleWatchlist }) {
    return (
        <div>
            <h1 className="title">Your Watchlist</h1>
            <div className="watchlist">
                {
                    watchlist.map(id => {
                        const movie = movies.find(movie => movie.id === id);
                        return <MoiveCard
                            key={id}
                            movie={movie}
                            toggleWatchlist={toggleWatchlist}
                            isWatchlisted={true}
                        ></MoiveCard>
                    })
                }
            </div>
        </div>
    )
}