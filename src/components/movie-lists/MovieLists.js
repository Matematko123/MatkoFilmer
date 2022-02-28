import React, { useState, useEffect } from 'react';

import styles from './MovieLists.module.css';
import Slider from 'react-slick';
import Container from '../reusable/Container';

import MovieItem from '../movie-item/MovieItem';
import MovieImg from '../../assets/img/movieImg.jpg';
import axios from 'axios';

import { SamplePrevArrow, SampleNextArrow } from '../main/Main';

const alphabet = 'abcdefghijklmnopqrstuvwxyz';

const sliderSettings = {
  dots: false,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 5,
  adaptiveHeight: false,
  variableWidth: true,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

function MovieLists({ name }) {
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    const randomCharacter =
      alphabet[Math.floor(Math.random() * alphabet.length)];

    axios
      .get(`https://api.tvmaze.com/search/shows?q=${randomCharacter}`)
      .then((response) => {
        setMovieData(response.data);
      });
  }, []);

  return (
    <div className={styles.container}>
      <Container>
        {movieData && (
          <div className={styles.movieList}>
            <span>{name}</span>
            <Slider {...sliderSettings}>
              {movieData.map((movie) => {
                return (
                  <MovieItem
                    className={styles.movieItem}
                    key={movie.score ? movie.score : ''}
                    image={
                      movie.show.image ? movie.show.image.medium : MovieImg
                    }
                    title={movie.show.name ? movie.show.name : ''}
                    date={movie.show.premiered ? movie.show.premiered : ''}
                    desc={
                      movie.show.summary
                        ? movie.show.summary.replace(/(<([^>]+)>)/gi, '')
                        : ''
                    }
                  ></MovieItem>
                );
              })}
            </Slider>
          </div>
        )}
      </Container>
    </div>
  );
}

export default MovieLists;
