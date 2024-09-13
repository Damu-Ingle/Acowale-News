import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const NewsContent = () => {
    const { id } = useParams(); 
    const [article, setArticle] = useState(null);

    const fetchArticle = async () => {
        try {
            const response = await fetch(`https://gnews.io/api/v4/search?q=example&lang=en&country=us&max=10&apikey=3d3e7289fd2d6b982914c28421ee201c`);
            const data = await response.json();
            const foundArticle = data.articles.find(a => a.id === id); // Find the article by ID
            setArticle(foundArticle);
        } catch (error) {
            console.error("Error fetching article:", error);
        }
    };


    useEffect(() => {

        fetchArticle();

    }, [id]);

    if (!article) return <p>Loading...</p>;

    return (
        <>

            <div className="card mt-3 d-flex flex-row border-0 border-bottom p-2" style={{ maxWidth: '100%' }}>
                <div style={{ width: '18rem' }}>
                    <img className="card-img rounded-md-2" src={article.image} alt="Card-cap" />
                </div>
                <div className="card-body">
                    <h5 className="card-title">{article.title}</h5>
                    <p className="card-text">{article.description}</p>
                    <p>{article.content}</p>
                    <p>{article.publishedAt}</p>
                    <h3>Author:-</h3>
                    <p>{article.source.name}</p>
                </div>
            </div>

        </>
    );
}

export default NewsContent;
