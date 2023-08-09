import { useState, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import EachRepo from "../components/EachRepo";
import ErrorPage from "../components/ErrorPage";

const Home = () => {
  const [repos, setRepos] = useState([]);
  const [errors, setErrors] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchRepos = async () =>
      await fetch("https://api.github.com/users/bebek-hub/repos")
        .then((response) => response.json())
        .then((data) => {
          setRepos(data);
        })
        .catch((err) => {
          setErrors(err.message);
          console.log(`the error is: ${err.message}`);
        });
    fetchRepos();
  }, []);

  if (errors) return <ErrorPage error={errors} />;

  const perPage = 5;
  const total = repos?.length;
  const pages = Math.ceil(total / perPage);

  // Math.ceil is used to round up the numbers incase the division gives a decimal number while Math.floor runs down the number.

  const skip = currentPage * perPage - perPage;
  // for the first page, nothing is skipped. the second page, 5 is skipped which means the whole of first page. the third page, ten is skipped which means the whole of first and second page. and so on.

  return (
    <section>
      <header className="repo_header">
        <h1 className="logo">Favvy</h1>
        <input type="text" autoFocus placeholder="search..." />
        <button className="btn">
          <CiSearch />
        </button>
      </header>

      <div className="repo_container">
        {/* {repos.map((repo) => (
          <EachRepo key={repo.id} repo={repo} />
        ))} */}

        {repos?.slice(skip, skip + perPage).map((repo) => (
          <EachRepo key={repo.id} repo={repo} />
        ))}

        <button
          disabled={currentPage <= 1}
          onClick={() => setCurrentPage((prev) => prev - 1)}
        >
          Prev
        </button>
        <p className="pagination">
          Pages: {currentPage} of {pages}
        </p>
        {
          <button
            disabled={currentPage >= pages}
            aria-disabled={currentPage >= pages}
            onClick={() => setCurrentPage((prev) => prev + 1)}
          >
            next
          </button>
        }
        {/* another magic here */}
        {/* {Array.from({ length: pages }, (value, index) => index + 1).map(
          (each) => (
            // eslint-disable-next-line react/jsx-key
            <button onClick={() => setCurrentPage(each)}>{each}</button>
          )
        )} */}

        {Array.from({ length: pages }, (value, index) => index + 1).map(
          (each) => (
            <button key={each} onClick={() => setCurrentPage(each)}>{each}</button>
          )
        )}
      </div>
    </section>
  );
};

export default Home;
