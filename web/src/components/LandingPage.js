import { Link } from 'react-router-dom';
import '../styles/layouts/LandingPage.scss';
import Card from './Preview/Card';
import landingImg from '../images/landingImg.png';
import objectToExport from '../services/LocalStorage';

const LandingPage = ({ cards, setCards }) => {
  const handleResetProjects = () => {
    objectToExport.remove('cardList');
    setCards([]);
  };

  return (
    <main className="landingPage">
      <h1 className="landingPage__title">Proyectos y... ¡ya estaría! </h1>
      <h2 className="landingPage__subtitle">
        Escaparate en línea para recoger ideas a través de la tecnología.
      </h2>
      <Link to="/CreateProject" className="link">
        <button className="link__btn" title="Haz click para crear tu tarjeta">
          NUEVO PROYECTO
        </button>{' '}
      </Link>
      <button
        className="link__btn"
        title="Haz click para eliminar los proyectos almacenados"
        onClick={handleResetProjects}
      >
        ELIMINA LOS PROYECTOS
      </button>
      <div className="landingDiv">
        {cards.map((card, index) => (
          <Card data={card} key={index} />
        ))}
      </div>
      {cards.length === 0 && (
        <p className="msg">
          No hay tarjetas que mostrar
          <Link to="/CreateProject" className="link">
            <img
              className="msg__img"
              src={landingImg}
              alt="Pero puedes crear la tuya"
              title="Pero puedes crear la tuya"
            ></img>
          </Link>
        </p>
      )}
    </main>
  );
};

export default LandingPage;
