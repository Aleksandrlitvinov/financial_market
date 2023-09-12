import React from 'react';
import Article from "../components/Article";

const Sport = ({listOfTotalArticles}) => {

  const articleChapter = 'sport'
  const marketArticles = listOfTotalArticles.filter(article => article.chapter === articleChapter)

  return (
    <div className="wrapper">
      {
        listOfTotalArticles.length
          ?
          marketArticles.map(article => <Article
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

export default Sport;
