import styles from './Main.module.css';
import Container from './reusable/Container';

import topImg from '../assets/img/Top10Badge.png';

import { GoTriangleRight, GoInfo } from 'react-icons/go';

import img from '../assets/img/MoviePoster.png';

function Main() {
  return (
    <div className={styles.container}>
      <Container>
        <div className={styles.text}>
          <div className={styles.title}>
            <span className={styles.topText}>YANIMDA</span>
            <span className={styles.bottomText}>KAL</span>
          </div>
          <div className={styles.top10}>
            <img src={topImg} alt="" srcset="" />
            <span>Best drama in Turkey</span>
          </div>
          <p>
            Learning to take care of himself at a young age and working hard
            Emir, who has an important position in the world, one day becomes a
            street singer. He meets the girl and his life changes.
          </p>
          <div className={styles.buttons}>
            <button className={styles.playBtn}>
              <GoTriangleRight></GoTriangleRight> Play
            </button>
            <button className={styles.infoBtn}>
              <GoInfo></GoInfo> More Info
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Main;
