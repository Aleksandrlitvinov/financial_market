import React from 'react';
import styles from './article.module.scss'
import InfoPopup from "../InfoPopup";

const Article = ({title, chapter, imgUrl, description}) => {

  const [visibleDescription, setVisibleDescription] = React.useState(false)
  const onClickShowInfo = () => {
    setVisibleDescription(!visibleDescription)
    console.log(visibleDescription)
  }

  return (
    <article>
      <div className={styles.articleWrapper}>
        <img
          className={styles.image}
          src={imgUrl}
          alt="photo"
        />
        <p className={styles.chapter}> {chapter}</p>
        <h3
          className={styles.title}
          onClick={() => onClickShowInfo()}
        >
          {title}
        </h3>
        <InfoPopup
          showDescription={visibleDescription}
          setShowDescription={setVisibleDescription}
          articleTitle={title}
          articleDescription={description}
        />
      </div>
    </article>
  );
};

export default Article;
