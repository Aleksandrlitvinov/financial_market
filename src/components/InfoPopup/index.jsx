import React from 'react';
import styles from './infoPopup.module.scss'

const InfoPopup = ({articleTitle, articleDescription, showDescription, setShowDescription}) => {

  const hidePopup = () => {
    setShowDescription(false)
  }
  return (
    <div className={showDescription ? styles.layout : styles.layoutHide}>
      <div className={styles.popup}>
        <p className={styles.title}>{articleTitle}</p>
        <p className={styles.description}>{articleDescription}</p>
        <div>
          <button
            className={styles.button}
            onClick={hidePopup}>Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default InfoPopup;
