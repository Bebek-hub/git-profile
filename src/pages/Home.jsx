import { useState, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import EachRepo from "../components/EachRepo";

const Home = () => {
  const [repos, setRepos] = useState([]);
  useEffect(() =>
        {fetch("https://api.github.com/users/bebek-hub/repos")
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            setRepos(data);
          })
          .catch((err) => {
            console.log(err.message);
          })}
        , []);

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
        {repos.map((repo) => (<EachRepo key={repo.id}/>))}
      </div>
    </section>
  );
};

export default Home;
