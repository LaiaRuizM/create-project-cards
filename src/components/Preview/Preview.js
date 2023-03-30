import Profile from "../getAvatar/Profile";
import Card from "./Card";
import "../../styles/layouts/Preview.scss";
import { Link } from "react-router-dom";

const Preview = ({ data }) => {
  return (
    <section className="preview">
      <Link to="/" className="preview__link">
        <button className="preview__btn">VER PROYECTOS</button>
      </Link>
      <Link to="/CardDetail" className="preview__link">
        <button className="preview__btn">VER DETALLE</button>
      </Link>
      <Profile avatar={data.photo} className="image"></Profile>
      <Card data={data}></Card>
    </section>
  );
};

export default Preview;
