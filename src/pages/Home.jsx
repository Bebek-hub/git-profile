import Header from "./Header";
import Footer from "./Footer";


const Home = () => {
  
  return (
    <section>
      <Header />
      
      <div className="home_container">
        <img src="" />
        <h1>about myself</h1>
      </div>

      <div className="home_container-content">
        <h1>A display of my Github repository</h1>

        <button className="home_container_content-link1">Display Repo</button>

        <button className="home_container_content-link2">How it is built</button>
      </div>

      <Footer />
    </section>
  );
};

export default Home;
