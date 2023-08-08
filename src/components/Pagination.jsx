import { useState } from "react";

const Pagination = (repos) => {
  const [currentPage, setCurrentPage] = useState(1);

  const perPage = 10;
  const total = repos?.length;
  const pages = Math.ceil(total / perPage);
  console.log(repos)


  // Math.ceil is used to round up the numbers incase the division gives a decimal number while Math.floor runs down the number.

  const skip = currentPage * perPage - perPage;
  // for the first page, nothing is skipped. the second page, 5 is skipped which means the whole of first page. the third page, ten is skipped which means the whole of first and second page. and so on.

  return <div>Pagination</div>;
};

export default Pagination;
