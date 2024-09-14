import React, { useState, useEffect } from 'react';
import Cards from './Cards';

const NewsCards = () => {
  const [articles, setArticles] = useState([]);

  const fetchArticle = async () => {
    const data = await fetch(`https://gnews.io/api/v4/search?q=example&lang=en&country=us&max=10&apikey=3d3e7289fd2d6b982914c28421ee201c`)
    const response = await data.json()
    // console.log(response.articles)

    setArticles(response.articles)
  }

  useEffect(() => {

    fetchArticle();

  }, []);

  return (
    <>

      <div className=''>
        <img src="https://startups.startupmission.in/storage/uploads/DIPP117624/logo-6519d463b0e8f-acowale-alone-dpjpg.jpg"
         className='rounded-circle mx-auto my-2 d-block ' alt="Acowale News"  width={'20%'}/>
      </div>
      <div className="">
        <div>
          {articles.map((article, index) => (
            <div className="container" key={index}>
              <Cards article={article} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default NewsCards;
