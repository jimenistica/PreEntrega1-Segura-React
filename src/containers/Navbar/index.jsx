import logo1 from "../../assets/logo01.png";
import CartWidget from "../../components/cartWidget";
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
        <a className="nabvar__logo" href="/">
        <figure >
          <img className="navbar__img" src={logo1} alt="" />
        </figure>
        </a>
        <Menu className='navbar' links={links}>
          <li>
            <a href="" className="navbar__link-button">
              <CartWidget quantity={0}/>
            </a>
          </li>
        </Menu> 

      </nav>
    </header>
  );
};

export default Navbar;
