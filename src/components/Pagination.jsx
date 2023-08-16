import { useState } from "react";
import EachRepo from "./EachRepo";

const Pagination = (repos) => {
  console.log(repos)
  const [currentPage, setCurrentPage] = useState(1);

  const perPage = 10;
  const total = repos?.length;
  const pages = Math.ceil(total / perPage);
  // console.log(repos);

  // Math.ceil is used to round up the numbers incase the division gives a decimal number while Math.floor runs down the number.

  const skip = currentPage * perPage - perPage;
  // for the first page, nothing is skipped. the second page, 5 is skipped which means the whole of first page. the third page, ten is skipped which means the whole of first and second page. and so on.

  return (
    <>
    <div className="display_repo_container">
          {repos?.slice(skip, skip + perPage).map((repo) => (
            <EachRepo key={repo.id} repo={repo} />
          ))}
        </div>

      <div className="display_repo-pagination">
        <button
          disabled={currentPage <= 1}
          aria-disabled={currentPage >= pages}
          onClick={() => setCurrentPage((prev) => prev - 1)}
          className="page_btn"
        >
          Prev
        </button>

        {Array.from({ length: pages }, (value, index) => index + 1).map(
          (each) => (
            <button
              key={each}
              onClick={() => setCurrentPage(each)}
              className="page_btn"
            >
              {each}
            </button>
          )
        )}

        <button
          disabled={currentPage >= pages}
          aria-disabled={currentPage >= pages}
          onClick={() => setCurrentPage((prev) => prev + 1)}
          className="page_btn"
        >
          next
        </button>
      </div>
      <p className="page_of_pages">
        Pages: {currentPage} of {pages}
      </p>
    </>
  );
};

export default Pagination;
