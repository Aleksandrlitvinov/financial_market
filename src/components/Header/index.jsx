import React from 'react';
import styles from './header.module.scss'


const Header = () => {
  return (
    <div className={styles.main}>
      <h1 className={styles.title}>Financial articles</h1>
    </div>
  );
};

export default Header;
