import React from 'react';
import { Link } from 'react-router-dom';

const Cards = ({ article }) => {
    return (
        <Link to={`/NewsContent/${article.id}`} style={{ textDecoration: 'none' }}>
            <div className="card mt-3 d-flex flex-row border-0 border-bottom p-2 custom-card" style={{ maxWidth: '100%' }}>
                <div style={{ width: '18rem' }}>
                    <img className="card-img rounded-md-2" src={article.image} alt="Card-cap" />
                </div>
                <div className="card-body">
                    <h5 className="card-title">{article.title}</h5>
                    <p className="card-text">{article.description + ' ...'}</p>
                </div>
            </div>
        </Link>
    );
}

export default Cards;
