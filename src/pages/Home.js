import Nav from "../components/Nav";

const Home = () => {
  const authToken = false;
  const handleClick = () => {
    console.log("clicked!");
  };

  return (
    <>
      <Nav />
      <div className="home">
        <h1>Swipe right (r)</h1>
        <button className="primary-button" onClick={handleClick}>
          {authToken ? "Sign out" : "Create Account"}
        </button>
      </div>
    </>
  );
};

export default Home;
