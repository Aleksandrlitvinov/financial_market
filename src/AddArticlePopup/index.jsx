import React from 'react';
import styles from './addArticlePopup.module.scss'
import {collection, addDoc} from "firebase/firestore";
import {db} from "../firebase/firebaseConfig";

const AddArticlePopup = ({visibleAddPopup, hideAddArticlePopup, addNewArticle}) => {
  const hidePopup = () => {
    hideAddArticlePopup()
  }

  const [inputTitleValue, setInputTitleValue] = React.useState('')
  const [inputDescriptionValue, setInputDescriptionValue] = React.useState('')
  const [inputImgUrlValue, setInputImgUrlValue] = React.useState('')
  const [inputChapterValue, setInputChapterValue] = React.useState('')

  const inputTitleRef = React.useRef(null)
  const inputDescriptionRef = React.useRef(null)
  const inputImgUrRef = React.useRef(null)
  const inputChapterRef = React.useRef(null)


  const createArticle = () => {
    const newArticle = {
      title: inputTitleValue,
      imgUrl: inputImgUrlValue,
      description: inputDescriptionValue,
      chapter: inputChapterValue
    }

    const {title, description, imgUrl} = newArticle

    if (title === '' || description === '' || imgUrl === '') {
      alert('Please fill empty fields')
      return
    }

    const articlesCollectionRef = collection(db, 'articles')

    addDoc(articlesCollectionRef, {
      title: inputTitleValue,
      imgUrl: inputImgUrlValue,
      description: inputDescriptionValue,
      chapter: inputChapterValue
    } | null)
      .then(response => console.log(response))
      .catch(error => console.log(error.message))
    addNewArticle(newArticle)

    hidePopup()

  }

  return (
    <div className={visibleAddPopup ? styles.layout : styles.layoutHide}>
      <div className={styles.popup}>
        <div>
          <input
            className={styles.input}
            type="text"
            placeholder='Enter title'
            ref={inputTitleRef}
            value={inputTitleValue}
            onChange={event => setInputTitleValue(event.target.value)}
          />
        </div>
        <div>
          <input
            className={styles.input}
            type="text"
            placeholder='Enter image url'
            ref={inputImgUrRef}
            value={inputImgUrlValue}
            onChange={event => setInputImgUrlValue(event.target.value)}
          />
        </div>
        <div>
          <input
            className={styles.input}
            type="text"
            placeholder='Enter chapter name'
            ref={inputChapterRef}
            value={inputChapterValue}
            onChange={event => setInputChapterValue(event.target.value)}
          />
        </div>
        <div>
          <textarea
            className={styles.description}
            placeholder='Enter description'
            rows="5"
            cols="32"
            ref={inputDescriptionRef}
            value={inputDescriptionValue}
            onChange={event => setInputDescriptionValue(event.target.value)}
          ></textarea>
        </div>
        <div className={styles.buttons}>
          <button
            className={styles.button}
            onClick={() => createArticle()}
          >
            Add Article
          </button>
          <button
            className={styles.button}
            onClick={hidePopup}>Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddArticlePopup;
