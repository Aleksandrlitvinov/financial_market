import React from 'react';
import styles from './header.module.scss'
import Menu from "../Menu";
import {Link} from "react-router-dom";


const Header = () => {
  return (
    <div className={styles.main}>
      <Link to="/">
        <h1 className={styles.title}>Financial articles</h1>
      </Link>
      <Menu/>
    </div>
  );
};

export default Header;
