import React from 'react';
import styles from './footer.module.scss'
import {Link} from "react-router-dom";

const MyComponent = () => {
  return (
    <footer className={styles.footer}>
      <Link to="/">
        <p className={styles.footerTitle}>FINANCIAL ARTICLES</p>
      </Link>
    </footer>
  );
};

export default MyComponent;
