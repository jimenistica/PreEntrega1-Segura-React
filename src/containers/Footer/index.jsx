import { Icon } from "@iconify/react/dist/iconify.js";
import logo1 from "../../assets/logo01.png";
import Menu from "../../components/Menu";

const Footer = () => {
  const links = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Tienda",
      href: "/tienda",
    },
    {
      label: "Contacto",
      href: "/contacto",
    },
  ];
  return (
    <footer className="footer">

      <Menu className="footer" links={links} isFooter={true}>
        <br />
   
        <li>
          <a href="https://www.instagram.com/melodiasimplestore/" target="blank">
            <Icon className="footer__icon" icon="f7:logo-instagram"/>
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/MelodiaSimpleStore" target="blank">
            <Icon className="footer__icon" icon="mage:facebook-square"/>
          </a>
        </li>

  
      </Menu>
    </footer>
  );
};

export default Footer;
