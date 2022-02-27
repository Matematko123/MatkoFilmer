import React, { useState } from 'react';

import styles from './MovieItem.module.css';

import background from '../../assets/img/MovieItem.png';

function MovieItem({ image, title, date, desc }) {
  const [movieDesc, setMovieDesc] = useState(false);

  return (
    <div
      className={styles.movieItem}
      style={{
        backgroundImage: `url(${image})`,
      }}
      onMouseOver={() => setMovieDesc(true)}
      onMouseLeave={() => setMovieDesc(false)}
    >
      {movieDesc && (
        <>
          <span className={styles.title}>{title}</span>
          <span className={styles.date}>{date}</span>
          <span className={styles.desc}>{desc}</span>
        </>
      )}
    </div>
  );
}

export default MovieItem;
