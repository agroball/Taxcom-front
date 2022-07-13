import './Header.css';
import logo from "../../images/logo_new_ru.png";
import {NavLink} from "react-router-dom";

function Header() {
    return (
        <header className="header">
          <img className="header__logo" src={logo} alt="ОССП ЛОГОТИП"/>
          <NavLink to='/' className="header__back">Главная</NavLink>
        </header>
    );
}
export default Header;
