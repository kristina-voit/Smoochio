import logo from "../images/logo.svg";
import logoslogan from "../images/LogoSlogan.png";

const Nav = ({
  minimal,
  authToken,
  setShowModal,
  showModal,
  setisSignedUp,
}) => {
  const handleClick = () => {
    setShowModal(true);
    setisSignedUp(false);
  };
  return (
    <nav>
      <div className="logo-container">
        <img className="logo" src={minimal ? logoslogan : logo} />
      </div>
      {!authToken && !minimal && (
        <button
          className="nav-button"
          onClick={handleClick}
          disabled={showModal}
        >
          Log in
        </button>
      )}
    </nav>
  );
};

export default Nav;
