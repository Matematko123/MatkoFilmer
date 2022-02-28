import './App.css';

import Header from './components/header/Header';
import Main from './components/main/Main';
import MovieLists from './components/movie-lists/MovieLists';
import Footer from './components/footer/Footer';

import ReactPlayer from 'react-player';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Main></Main>
      <ul className="movieList">
        <li>
          <MovieLists name="Exclusive"></MovieLists>
        </li>
        <li>
          <MovieLists name="Newest addition"></MovieLists>
        </li>
      </ul>
      <Footer></Footer>
    </div>
  );
}

export default App;
