import React from "react";
import '../styles.css'

export default function Footer() {
    const currntYear = new Date().getFullYear();
    return(
        <footer className="footer">
            <p className="footer-text">©️ {currntYear} Moviedux, All rights reserved.</p>
        </footer>
    )
}