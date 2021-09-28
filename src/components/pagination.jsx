import React, { Component } from "react";

const Pagination = (props) => {
  const { itemsCount, pageSize, currentPage } = props;
  const pagesCount = itemsCount / pageSize;
  console.log(pagesCount);
  
  function getArray(last) {
    var arr = [];
    for (let i = 1; i < last + 1; i++) {
      arr.push(i);
    }
    return arr;
  }

  const pages = getArray(pagesCount);

  return (
    <nav>
      <ul className="pagination">
        {pages.map((page) => (
          <li
            className={page === currentPage ? "page-item active" : "page-item"}
          >
            <a className="page-link" onClick={() => props.onPageChange(page)}>
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
