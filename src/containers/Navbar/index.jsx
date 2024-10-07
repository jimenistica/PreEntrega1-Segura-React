import { Link } from "react-router-dom";
import logo1 from "../../assets/logo01.png";
import CartWidget from "../../components/CartWidget";
import Menu from "../../components/Menu";
import { Navbar as BootstrapNavbar, Nav, Container } from "react-bootstrap";


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
      <BootstrapNavbar expand="lg" className="navbar" bg="dark" variant="dark">
        <Container>
          {/* Toggler para colapsar el menú en pantallas pequeñas */}
          <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
          
          <Link to="/" className="navbar-brand">
            <img className="navbar__img" src={logo1} alt="Logo" />
          </Link>


          {/* menú colapsable */}
          <BootstrapNavbar.Collapse id="basic-navbar-nav" >
            <Nav className="ms-auto">
              <Menu links={links} className="navbar" />
            </Nav>
          </BootstrapNavbar.Collapse>
              <div>
                <Link to="/Carrito" className="navbar__link-button">
                  <CartWidget quantity={0} />
                </Link>
              </div>
        </Container>
      </BootstrapNavbar>
      {/* <nav className="navbar container">
        <Link to="/">
        <figure className="nabvar__logo" >
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

      </nav> */}
    </header>
  );
};

export default Navbar;
