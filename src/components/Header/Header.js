import './Header.css';
import logo from "../../images/logo_new_ru.png";

function Header() {
    return (
        <header className="header">
          <img className="header__logo" src={logo} alt="ОССП ЛОГОТИП"/>
          <h1 className="header__text">Form for tracking fiscal memory </h1>
        </header>
    );
}
export default Header;
