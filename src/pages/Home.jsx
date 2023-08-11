import Header from "./Header";
import Footer from "./Footer";

const Home = () => {
  return (
    <section>
      <Header />

      <div className="home_container">
        <div className="home_image_container">
        <img
          src="https://avatars.githubusercontent.com/u/71845179?s=400&u=78451e6d07d0cb1c5d455fd95f94da2c45f4c9ec&v=4"
          alt="my_picture" className="home_image"
        />
        <p>about myself</p>
        </div>
       

        <div className="home_container-content">
          <h1>A display of my Github repository</h1>

          <a href="/display-repos">
            <button className="home_container_content-link1">
              Display Repo
            </button>
          </a>

          <button className="home_container_content-link2">
            How it is built
          </button>
        </div>

        <div className="home_git_stat">
          <p>My Github stats </p>
          <a
            href="https://github.com/Bebek-hub"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://github-readme-stats.vercel.app/api?username=bebek-hub&show_icons=true&include_all_commits=true&hide_border=true"
              alt="github_stat"
            />
          </a>

          <a
            href="https://github.com/Bebek-hub"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=bebek-hub&langs_count=8&layout=compact&hide_border=true"
              alt="github_languages"
            />
          </a>

          {/* <a href="https://github-readme-stats.vercel.app/api?username=bebek-hub&show_icons=true&include_all_commits=true&hide_border=true">Click me</a> */}
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default Home;
