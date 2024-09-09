import { NavLink } from "react-router-dom";
import LinkButton from "../LinkButton";

const Menu = ({links, className, children}) => {

  return (
    <menu className={`${className}__menu`}>
      { links.map((link, i) => {

        return(
          <li key={`navlink-${i}`} className={` ${className}__item`}> 
          <NavLink to={link.href}>{link.label}</NavLink>
          </li>) }
        )
      }
      
      { children }

    </menu>
  );
};

export default Menu;
