import Nav from "../components/Nav";
import { useState } from "react";
import AuthModal from "../components/AuthModal";

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [isSignedUp, setIsSignedUp] = useState(true);
  const authToken = false;
  const handleClick = () => {
    console.log("clicked!");
    setShowModal(true);
    setIsSignedUp(true);
  };

  return (
    <div className="overlay">
      <Nav
        minimal={false}
        authToken={authToken}
        setShowModal={setShowModal}
        showModal={showModal}
        setIsSignedUp={setIsSignedUp}
      />
      <div className="home">
        <h1>Swipe right!</h1>
        <button className="primary-button" onClick={handleClick}>
          {authToken ? "Sign out" : "Create Account"}
        </button>

        {showModal && (
          <AuthModal
            setShowModal={setShowModal}
            setIsSignedUp={setIsSignedUp}
            isSignedUp={isSignedUp}
          />
        )}
      </div>
    </div>
  );
};

export default Home;
