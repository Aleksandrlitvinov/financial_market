import React from 'react';
import Article from "../components/Article";

const Home = ({listOfTotalArticles}) => {

  return (
    <div className="wrapper">
      {
        listOfTotalArticles.length
          ?
          listOfTotalArticles.map(article => <Article
            key={article.id}
            title={article.title}
            chapter={article.chapter}
            imgUrl={article.imgUrl}
            description={article.description}
          />)
          :
          <p>Please wait ...</p>
      }
    </div>
  );
};

export default Home;
