import logo1 from '../../assets/logo01.png'
import CartWidget from '../cartWidget'
import ItemListCointeiner from '../ItemListContainer'


const Navbar=()=>{
    return(
        <header className="header">
            <nav className="navbar container">
                <figure className="navbar__logo">
                    <img src={logo1} alt="" />
                </figure>
                <menu className="navbar__menu">
                    <ItemListCointeiner label='Inicio'/>
                    <ItemListCointeiner label='Tienda'/>
                    <ItemListCointeiner label='Contacto'/>

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