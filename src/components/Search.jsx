import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { IoIosArrowBack } from "react-icons/io";
import { MdClose } from "react-icons/md";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
function Search({ repos }) {
  const [text, setText] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [filteredRepo, setFilteredRepo] = useState(repos);

  const handleSearch = () => {
    setFilteredRepo(
      // eslint-disable-next-line react/prop-types
      repos.filter((repo) => {
        
        if (repo.title.toLowerCase().match(text.toLocaleLowerCase())) {
          console.log(filteredRepo);
          return repo;
          
        } else {
          return <p>No Repository found</p>;
        }
      })
    );
  };
  return (
    <>
      <div className="search_container">
        <div>
          <Link to={"/"} className="page_btn">
            <IoIosArrowBack />
          </Link>
        </div>
        <div className="search">
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
            className="page_btn"
            onClick={() => {
              setShowSearch((prevState) => !prevState);
            }}
          >
            {showSearch ? <MdClose /> : <CiSearch />}
          </button>
        </div>
      </div>

      {!showSearch && <h2 className="repo_header">My Repositories</h2>}

      {/* <div className="error_container">
        {filteredRepo.length === 0 && <p>No Repository found</p>}
      </div> */}
    </>
  );
}

export default Search;
