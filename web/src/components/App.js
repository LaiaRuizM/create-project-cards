import '../styles/App.scss';
import objectToExport from '../services/LocalStorage';
import { useEffect, useState } from 'react';
import Header from '../components/Header/Header';
import CreateProject from './CreateProject';
import LandingPage from './LandingPage';
import { Route, Routes } from 'react-router-dom';
import CardDetail from './card_detail/CardDetail';
import user from '../images/user.png';
import cover from '../images/proyecto.jpg';
import api from '../services/api';

function App() {
  const dataDetail = {
    name: '',
    slogan: '',
    repo: '',
    demo: '',
    technologies: '',
    desc: '',
    autor: '',
    job: '',
    image: user,
    photo: cover,
  };

  const [cards, setCards] = useState(objectToExport.get('cardList', []));
  useEffect(() => {
    objectToExport.set('cardList', cards);
  }, [cards]);

  useEffect(() => {
    api.listProjectsApi().then((cleanData) => {
      setCards(cleanData);
    });
  }, []);

  return (
    <div className="container">
      <Header></Header>
      <Routes>
        <Route
          path="/"
          element={<LandingPage cards={cards} setCards={setCards} />}
        />
        <Route
          path="/CreateProject"
          element={<CreateProject cards={cards} setCards={setCards} />}
        />
        <Route
          path="/CardDetail"
          element={<CardDetail dataDetail={dataDetail} />}
        />
      </Routes>
    </div>
  );
}

export default App;
