import React from 'react';
import styles from './infoPopup.module.scss'
import {db} from '../../firebase/firebaseConfig'
import {doc, setDoc} from "firebase/firestore";

const InfoPopup = ({currentArticle, showDescription, setShowDescription}) => {

  const inputTitleRef = React.useRef(null)
  const inputDescriptionRef = React.useRef(null)


  const updateArticle = async () => {
    if (inputTitleRef.current.value === '' || inputDescriptionRef.current.value === '') {
      alert('Fill title or description')
    } else {
      await setDoc(doc(db, "articles", currentArticle.id), {
        title: inputTitleRef.current.value,
        imgUrl: currentArticle.imgUrl,
        chapter: currentArticle.chapter,
        description: inputDescriptionRef.current.value
      })
        .then(response => console.log(response))
        .catch(error => console.log(error.message))
    }
    setShowDescription(false)
  }


  const hidePopup = () => {
    setShowDescription(false)
  }

  return (
    <div className={showDescription ? styles.layout : styles.layoutHide}>
      <div className={styles.popup}>
        <div>
          <input
            className={styles.title}
            type="text"
            defaultValue={currentArticle.title}
            ref={inputTitleRef}
            onChange={e => e.target.value}
          />
        </div>
        <div>
          <textarea
            ref={inputDescriptionRef}
            defaultValue={currentArticle.description}
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <div className={styles.buttons}>
          <button
            className={styles.button}
            onClick={() => hidePopup()}>Close
          </button>
          <button
            className={styles.button}
            onClick={() => updateArticle()}
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default InfoPopup;
