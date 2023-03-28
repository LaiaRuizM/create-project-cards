import '../styles/App.scss';
import objectToExport from '../services/LocalStorage';
import { useEffect, useState } from 'react';
import Header from '../components/Header/Header';
import CreateProject from './CreateProject';
import LandingPage from './LandingPage';
import { Route, Routes } from 'react-router-dom';
import CardDetail from './card_detail/CardDetail';

function App() {
  const [cards, setCards] = useState(objectToExport.get('cardList', [])); 
  useEffect(() => {
    objectToExport.set('cardList', cards);
  }, [cards])

  return (
    <div className="container">
      <Header></Header>
      <Routes>
        <Route 
          path="/" 
          element={<LandingPage cards={cards} setCards={setCards}/>}/>
        <Route 
          path="/CreateProject" 
          element={<CreateProject cards={cards} setCards={setCards} />}/>
          <Route 
          path="/CardDetail" 
          element={<CardDetail cards={cards}/>}/>
      </Routes>
    </div>
  );
}

export default App;
