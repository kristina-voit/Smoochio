import logo from "../images/Logo.png";
import logoslogan from "../images/LogoSlogan.png";

const Nav = ({ minimal, authToken }) => {
  return (
    <nav>
      <div className="logo-container">
        <img className="logo" src={minimal ? logoslogan : logo} />
      </div>
      {!authToken && <button className="nav-button">Log in</button>}
    </nav>
  );
};

export default Nav;
