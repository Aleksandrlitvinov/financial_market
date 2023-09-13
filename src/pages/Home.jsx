import React from 'react';
import Article from "../components/Article";
import AddArticlePopup from "../AddArticlePopup";

const Home = ({listOfTotalArticles, addNewArticle}) => {

  const [visibleAddPopup, setVisibleAddPopup] = React.useState(false)

  const showAddArticlePopup = () => setVisibleAddPopup(true)
  const hideAddArticlePopup = () => setVisibleAddPopup(false)

  return (
    <div>
      <div className="wrapper">
        <button
          className='btn-add'
          onClick={() => showAddArticlePopup()}
        >
          Add Article
        </button>
        {
          listOfTotalArticles.length
            ?
            listOfTotalArticles.map(article => (<Article
                articles={listOfTotalArticles}
                key={article.id}
                id={article.id}
                title={article.title}
                chapter={article.chapter}
                imgUrl={article.imgUrl}
                description={article.description}
              />)
            )
            :
            <p>Please wait ...</p>
        }
      </div>
      <AddArticlePopup visibleAddPopup={visibleAddPopup} hideAddArticlePopup={hideAddArticlePopup}
                       addNewArticle={(obj) => addNewArticle(obj)}/>
    </div>
  );
};

export default Home;
