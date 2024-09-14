import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';

const NewsContent = () => {
    const { id } = useParams(); 
    const [article, setArticle] = useState(null);

    const fetchArticle = useCallback(async () => {
        try {
            const response = await fetch(`https://gnews.io/api/v4/search?q=example&lang=en&country=us&max=10&apikey=3d3e7289fd2d6b982914c28421ee201c`);
            const data = await response.json();
            console.log('API Response:', data); // Check the entire response
            const articles = data.articles;
            console.log('Articles:', articles); // Check the articles array
            console.log('ID:', id); // Check the id value
    
            const foundArticle = articles ? articles[parseInt(id, 10)] : null;
            console.log('Found Article:', foundArticle); // Check the found article
            setArticle(foundArticle || {});
        } catch (error) {
            console.error("Error fetching article:", error);
        }
    }, [id]);

    useEffect(() => {
        fetchArticle();
    }, [fetchArticle]); 

    return (
        <>
            {article ? (
                <div className="card mt-3 d-flex flex-row border-0 border-bottom p-2" style={{ maxWidth: '100%' }}>
                    <div style={{ width: '18rem' }}>
                        <img className="card-img rounded-md-2" src={article.image} alt="Card-cap" />
                        
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{article.title}</h5>
                        <p className="card-text">{article.description}</p>
                        
                    </div>
                </div>
            ) : (<p>Loading...</p>)}
        </>
    );
}

export default NewsContent;
