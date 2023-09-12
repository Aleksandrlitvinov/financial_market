import React from 'react';
import styles from './menu.module.scss'
import {Link} from "react-router-dom";

const chapterList = ['markets', 'government', 'sport', 'company', 'insurance', 'personal', 'etf']
const Menu = () => {

  return (
    <ul className={styles.menu__list}>
      {
        chapterList.map(chapter => (
          <Link to={chapter}>
            <li className={styles.menu__listItem}>
              <a className={styles.menu__listLink}>{chapter}</a>
            </li>
          </Link>
        ))
      }
    </ul>
  );
};
export default Menu;
