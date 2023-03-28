import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import "../../styles/layouts/Header.scss";

const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <img className="header__img" src={logo} alt="logo" />
      </Link>
    </header>
  );
};

export default Header;
