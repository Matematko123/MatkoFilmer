import styles from './Footer.module.css';

import Container from '../reusable/Container';
import SearchBox from '../reusable/SearchBox';

import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

function Footer() {
  return (
    <Container className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.icons}>
          <FaFacebook className={styles.icon}></FaFacebook>
          <FaInstagram className={styles.icon}></FaInstagram>
          <FaTwitter className={styles.icon}></FaTwitter>
        </div>
        <div className={styles.links}>
          <a href="">Home</a>
          <a href="">Stay</a>
          <a href="">Flex</a>
          <a href="">Now</a>
          <a href="">Start</a>
        </div>
        <div className={styles.links}>
          <a href="">Search</a>
          <a href="">Genre</a>
          <a href="">Movie</a>
          <a href="">Find</a>
          <a href="">Start</a>
        </div>
        <div className={styles.links}>
          <a href="">Filter</a>
          <a href="">Delete</a>
          <a href="">Flex</a>
          <a href="">Heading</a>
          <a href="">Stay</a>
        </div>
        <span>©2021 MatkoFilmer</span>
      </div>
    </Container>
  );
}

export default Footer;
