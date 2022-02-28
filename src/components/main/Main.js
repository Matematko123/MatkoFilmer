import React, { useEffect, useState } from 'react';

import axios from 'axios';

import styles from './Main.module.css';
import Container from '../reusable/Container';
import MovieItem from '../movie-item/MovieItem';
import MovieImg from '../../assets/img/movieImg.jpg';
import MoviePoster from '../../assets/img/netflix-gradient.png';

import topImg from '../../assets/img/Top10Badge.png';
import Slider from 'react-slick';

import { GoTriangleRight, GoTriangleLeft, GoInfo } from 'react-icons/go';

export function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <GoTriangleLeft
      className={className}
      style={{
        ...style,
        display: 'block',
        color: 'white',
        fontSize: '2rem',
        height: '3rem',
      }}
      onClick={onClick}
    />
  );
}

export function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <GoTriangleRight
      className={className}
      style={{
        ...style,
        display: 'block',
        color: 'white',
        fontSize: '2rem',
        height: '3rem',
      }}
      onClick={onClick}
    />
  );
}

const alphabet = 'abcdefghijklmnopqrstuvwxyz';

function Main() {
  const [movieData, setMovieData] = useState([]);

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
    afterChange: function (index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    },
  };

  function getMovieData() {
    const randomCharacter =
      alphabet[Math.floor(Math.random() * alphabet.length)];

    axios
      .get(`https://api.tvmaze.com/search/shows?q=${randomCharacter}`)
      .then((response) => {
        setMovieData(response.data);
      });
  }

  useEffect(() => {
    getMovieData();
  }, []);

  return (
    <div className={styles.container}>
      <Container>
        <div className={styles.text}>
          <div className={styles.title}>
            <span className={styles.topText}>MATKO</span>
            <span className={styles.bottomText}>FILMER</span>
          </div>
          <div className={styles.top10}>
            <img src={topImg} alt="" srcset="" />
            <span>Top streaming service of 2020</span>
          </div>
          <p>
            Enjoy free streams, tv shows and movies for free!
            <br />
            Hover over movies to see more info!
          </p>
          <div className={styles.buttons}>
            <button className={styles.playBtn}>
              <GoTriangleRight></GoTriangleRight> Play
            </button>
            <button className={styles.infoBtn}>
              <GoInfo></GoInfo> Contact us
            </button>
          </div>
        </div>
        {movieData && (
          <div className={styles.movieList}>
            <span>MatkoFilmer Popular</span>
            <Slider {...sliderSettings}>
              {movieData.map((movie) => {
                return (
                  <MovieItem
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

export default Main;
