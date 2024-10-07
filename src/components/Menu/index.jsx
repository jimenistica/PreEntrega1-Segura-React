import { NavLink } from "react-router-dom";

const Menu = ({links, className, children, isFooter}) => {

  return (
    <menu className={`${className}__menu ${isFooter ? "footer-style" : "navbar-style"}`}>
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
