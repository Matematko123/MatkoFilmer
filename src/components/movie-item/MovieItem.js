import React, { useState, useEffect } from 'react';

import styles from './MovieItem.module.css';

import background from '../../assets/img/MovieItem.png';
import ReactPlayer from 'react-player';

import MovieTrailer from 'movie-trailer';

function MovieItem({ className, image, title, date, desc }) {
  const [movieDesc, setMovieDesc] = useState(false);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [trailer, setTrailer] = useState(
    'https://www.youtube.com/watch?v=6cV1ei-U3sI&list=RD6cV1ei-U3sI&start_radio=1'
  );

  async function getTrailer() {
    try {
      const newTrailer = await MovieTrailer(title);
      newTrailer && setTrailer(newTrailer);
      console.log(trailer);
    } catch (error) {}
  }
  useEffect(() => {
    getTrailer();
  }, [getTrailer]);

  return (
    <div
      className={`${styles.movieItem} ${className}`}
      style={{
        backgroundImage: `url(${image})`,
      }}
      title="Click to play trailer!"
      onMouseOver={() => setMovieDesc(true)}
      onMouseLeave={() => setMovieDesc(false)}
    >
      {movieDesc && (
        <div
          onClick={() => setVideoPlaying(true)}
          onMouseLeave={() => setVideoPlaying(false)}
        >
          {videoPlaying ? (
            <ReactPlayer
              className="react-player"
              url={trailer}
              width="100%"
              height="20rem"
              volume="0.2"
            />
          ) : (
            <>
              <span className={styles.title}>{title}</span>
              <span className={styles.date}>{date}</span>
              <span className={styles.desc}>{desc}</span>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default MovieItem;
