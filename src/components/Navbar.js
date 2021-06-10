import React from 'react';
import { Link } from 'react-router-dom';

export default function connect() {
    return (
        <div className="navbar">
            <ul>
                <Link className="link" to="/">Return to Home Page</Link>
            </ul>
        </div>
    )
}