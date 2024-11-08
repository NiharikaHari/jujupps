import './styles/Navbar.css';

const NavBar = () => {
  return (
    <nav>
      <ul className="navbar-nav">
        <li className="navbar-item">
          <a className="nav-link active" href="#">
            Home
          </a>
        </li>
        <li className="navbar-item">
          <a className="nav-link" href="#">
            About
          </a>
        </li>
        <li className="navbar-item">
          <a className="nav-link" href="#">
            Work
          </a>
        </li>
        <li className="navbar-item">
          <a className="nav-link" href="#">
            Contact
          </a>
        </li>
        <li className="navbar-item">
          <a className="nav-link" href="#">
            Shop
          </a>
        </li>
      </ul>
      {/* <hr className="navbar-hr"></hr> */}
    </nav>
  );
};

export default NavBar;
