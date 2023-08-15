import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { IoIosArrowBack } from "react-icons/io";
import { MdClose } from "react-icons/md";
import { useState } from "react";

const EachRepo = (repos) => {
  const [text, setText] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [filteredRepo, setFilteredRepo] = useState("");

  const handleSearch = () => {
    
    setFilteredRepo(
      repos.filter((repo) => {
        console.log(repo)
        if (repo.title.toLowerCase().match(text.toLocaleLowerCase())) {
          return repo;
        }
      })
    );
  };

  return (
    <>
      <div className="each_repo_head">
        <Link to={"/"} className="icon">
          <IoIosArrowBack />
        </Link>
        <div className="each_repo_search">
          <input
            type="text"
            autoFocus
            placeholder="search..."
            value={text}
            onChange={(e) => {
              setText(e.target.value);
              handleSearch();
            }}
          />

          <button
            className="icon"
            onClick={() => {
              setShowSearch((prevState) => !prevState);
            }}
          >
            {showSearch ? <MdClose /> : <CiSearch />}
          </button>
        </div>
      </div>

      {!showSearch && <h2 className="each_repo_header">My Repositories</h2>}
      <Link to={`${repos.repo.html_url}`} target="_blank" className="each_repo">
        <h2 className="each_repo-title">{repos.repo.name}</h2>
        <p className="each_repo-description">
          {repos.repo.description?.length > 35
            ? repos.repo.description.substr(0, 35) + "..."
            : repos.repo.description}
        </p>
      </Link>

      <div className="error_container">
        {(filteredRepo.length === 0) && (
          <p>No Repository found</p>
        )}
      </div>
    </>
  );
};

export default EachRepo;
