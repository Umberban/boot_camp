import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.center}>
        <ul className={styles.menu}>
          <li className={styles.list}>
            <NavLink
              exact
              activeClassName={styles.activeLink}
              className={styles.hello}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li className={styles.list}>
            <NavLink
              activeClassName={styles.activeLink}
              className={styles.hello}
              to="/about"
            >
              About
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
