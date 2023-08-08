import { useState, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import EachRepo from "../components/EachRepo";
import ErrorPage from "../components/ErrorPage";

const Home = () => {
  const [repos, setRepos] = useState([]);
  const [errors, setErrors] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(5);

  useEffect(() => {
    const fetchRepos = async () =>
      await fetch("https://api.github.com/users/bebek-hub/repos")
        .then((response) => response.json())
        .then((data) => {
          setRepos(data);
        })
    .catch((err) => {
      setErrors(err.message)
      console.log(`the error is: ${err.message}`)
    });
    fetchRepos();
  }, []);

  if (errors) return <ErrorPage error={errors} />

  const total = repos?.length;
  console.log(total)
  const indexOfLastRepo = currentPage * postsPerPage;  
  const indexOfFirstRepo = indexOfLastRepo - postsPerPage;
  const currentRepos = repos.slice(indexOfFirstRepo, indexOfLastRepo);
  console.log(currentRepos)

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
