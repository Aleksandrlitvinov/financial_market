import React from 'react';
import styles from './main.module.scss'
import {collection, getDocs} from "firebase/firestore";
import {db} from "../../firebase/firebaseConfig";
import Article from "../Article";

const Main = () => {

  const [listOfArticles, setListOfArticles] = React.useState([])

  const fetchArticles = async () => {

    await getDocs(collection(db, "articles"))
      .then((querySnapshot) => {
        const newData = querySnapshot.docs
          .map((doc) => ({...doc.data(), id: doc.id}));
        setListOfArticles(newData);
        console.log(newData);
      })

  }

  React.useEffect(() => {
    fetchArticles()
  }, [])

  return (

    <main className={styles.main}>
      <div className={styles.wrapper}>
        {
          listOfArticles.length
            ?
            listOfArticles.map(article => <Article
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
    </main>
  );
};

export default Main;
