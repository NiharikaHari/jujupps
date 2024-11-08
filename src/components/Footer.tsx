import './styles/Footer.css';

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="waves">
          <div className="wave" id="wave1"></div>
          <div className="wave" id="wave2"></div>
          <div className="wave" id="wave3"></div>
          <div className="wave" id="wave4"></div>
        </div>
        <ul className="social-icon">
          <li className="social-icon__item">
            <a className="social-icon__link" href="#">
              <img
                className="icon"
                src="./assets/behance.svg"
                alt="behance icon"
              ></img>
            </a>
          </li>
          <li className="social-icon__item">
            <a className="social-icon__link" href="#">
              <img
                className="icon"
                src="./assets/insta.svg"
                alt="instagram icon"
              ></img>
            </a>
          </li>
          <li className="social-icon__item">
            <a className="social-icon__link" href="#">
              <img
                className="icon"
                src="./assets/email-icon.svg"
                alt="email icon"
              ></img>
            </a>
          </li>
        </ul>
        <ul className="menu">
          <li className="menu__item">
            <a className="menu__link" href="#">
              Home
            </a>
          </li>
          <li className="menu__item">
            <a className="menu__link" href="#">
              About
            </a>
          </li>
          <li className="menu__item">
            <a className="menu__link" href="#">
              Work
            </a>
          </li>
          <li className="menu__item">
            <a className="menu__link" href="#">
              Contact
            </a>
          </li>
          <li className="menu__item">
            <a className="menu__link" href="#">
              Shop
            </a>
          </li>
        </ul>
        <p>&copy;2024 Jujupps Juicebox & Nicodedit | All Rights Reserved</p>
      </footer>
    </>
  );
};

export default Footer;
