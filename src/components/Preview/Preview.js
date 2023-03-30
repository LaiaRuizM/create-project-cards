import Profile from '../getAvatar/Profile';
import Card from './Card';
import '../../styles/layouts/Preview.scss';
import { Link } from 'react-router-dom';
import CardDetail from '../card_detail/CardDetail';

const Preview = ({ data }) => {
  return (
    <section className="preview">
      <Link to="/" className="preview__link">
        <button className="preview__btn">VER PROYECTOS</button>
      </Link>
      <Link to="/CardDetail" className="preview__link">
        <button className="preview__btn">VER DETALLE</button>
        <CardDetail data={data}></CardDetail>
      </Link>
      <Profile avatar={data.photo} className="image"></Profile>
      <Card data={data}></Card>
    </section>
  );
};

export default Preview;
