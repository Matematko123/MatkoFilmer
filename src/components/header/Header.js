import React, { useState } from 'react';

import styles from './Header.module.css';

import Container from '../reusable/Container';
import logo from '../../assets/img/logo.png';
import profileImg from '../../assets/img/ProfileIMG.png';

import { GoSearch, GoTriangleDown } from 'react-icons/go';

function Header() {
  const [searchState, setSearchState] = useState(false);

  function toggleSearchState(e) {
    e.preventDefault();
    setSearchState(!searchState);
  }

  function onFormSubmitHandler(e) {
    e.preventDefault();
    setSearchState(!searchState);
  }

  return (
    <header className={styles.headerContainer}>
      <Container className={styles.header}>
        <div className={styles.logo}>
          <img src={logo} alt="" srcset="" />
        </div>
        <nav className={styles.nav}>
          <ul className={styles.ul}>
            <li>
              <a href=""> Home</a>
            </li>
            <li>
              <a href=""> TV Show</a>
            </li>
            <li>
              <a href=""> Movies</a>
            </li>
          </ul>

          <ul className={styles.ul}>
            {searchState && (
              <li>
                <form
                  action=""
                  onSubmit={onFormSubmitHandler}
                  className={styles.form}
                >
                  <input type="text" />
                  <button type="submit">
                    <GoSearch className={styles.searchIconForm}></GoSearch>
                  </button>
                </form>
              </li>
            )}

            {!searchState && (
              <li>
                <a href="">
                  <GoSearch
                    onClick={toggleSearchState}
                    className={styles.searchIcon}
                  ></GoSearch>
                </a>
              </li>
            )}

            <li>
              <a href="">
                <img src={profileImg} alt="" srcset="" />
                <GoTriangleDown></GoTriangleDown>
              </a>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
