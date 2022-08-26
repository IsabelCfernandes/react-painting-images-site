//import LINK é responsavel por trazer links das rotas no meu de navegação
import { Link } from "react-router-dom";
//O nome classes é opcional para nomear o css
import classes from "./MainNavigation.module.css";

//inicio do componente
export default function MainNavigation() {
  return (
    //aqui o header aplica o css classes.header
    <header className={classes.header}>
      <div className={classes.logo}>Art & Creativity</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Paintings</Link>
          </li>
          <li>
            <Link to="/new-meetup">Add New Painting</Link>
          </li>
          <li>
            <Link to="/favorites">My Favorites</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
