import { Link } from "react-router-dom";
import logo1 from "../../assets/logo01.png";
import CartWidget from "../../components/CartWidget";
import Menu from "../../components/Menu";

const Navbar = () => {
  const links=[
    {
      label: 'Home',
      href: '/'
    },
    {
      label: 'Tienda',
      href: '/tienda'
    },
    {
      label: 'Contacto',
      href: '/contacto'
    }
    
  ]
  return (
    <header className="header">
      <nav className="navbar container">
        <Link className="nabvar__logo" to="/">
        <figure >
          <img className="navbar__img" src={logo1} alt="" />
        </figure>
        </Link>
        <Menu className='navbar' links={links}>
          <li>
            <Link to="/Carrito" className="navbar__link-button">
              <CartWidget quantity={0}/>
            </Link>
          </li>
        </Menu> 

      </nav>
    </header>
  );
};

export default Navbar;
