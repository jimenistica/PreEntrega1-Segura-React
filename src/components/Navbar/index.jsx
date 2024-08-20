import logo1 from '../../assets/logo01.png'
import CartWidget from '../cartWidget'


const Navbar=()=>{
    return(
        <header className="header">
            <nav className="navbar container">
                <figure className="navbar__logo">
                    <img src={logo1} alt="" />
                </figure>
                <menu className="navbar__menu">
                    <li className="navbar__item">
                        <a href="" className="navbar__link">Inicio</a>
                    </li>
                    <li className="navbar__item">
                        <a href="" className="navbar__link">Productos</a>
                    </li>
                    <li className="navbar__item">
                        <a href="" className="navbar__link">Contacto</a>
                    </li>
                    <li className="">
                        <a href="" className="navbar__link">
                            <CartWidget/>
                        </a>
                    </li>
                </menu>
            </nav>
        </header>
    )
}

export default Navbar