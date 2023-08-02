import { useState, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import EachRepo from "../components/EachRepo";

const Home = () => {
  const [repos, setRepos] = useState([]);
  useEffect(() => {
    const fetchRepos = async () =>
      await fetch("https://api.github.com/users/bebek-hub/repos")
        .then((response) => response.json())
        .then((data) => {
          setRepos(data);
        })
        // .catch((err) => {
        //   console.log(err.message);
        // });
        fetchRepos()
  }, []);

  return (
    <section>
      <header>
        <h1 className="logo">Favvy</h1>
        <input type="text" autoFocus placeholder="search..." />
        <button className="btn">
          <CiSearch />
        </button>
      </header>

      <div className="repo_container">
        {repos.map((repo) => (
          <EachRepo key={repo.id} repo={repo} />
        ))}
      </div>
    </section>
  );
};

export default Home;
