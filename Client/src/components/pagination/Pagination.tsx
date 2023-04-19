import React, { useState } from "react";
import "./pagination.css";

export default function Pagination({ metaData, onPageChange }) {
  const [number, setNumber] = useState<number>(1);
  const pageNumbers = [];

  for (let i = 1; i <= metaData.totalPages; i++) {
    pageNumbers.push(i);
  }

  function handleClick(page: number) {
    setNumber(page);
    onPageChange(page);
  }

  return (
    <div className="pagination-container">
      <ul className="pagination">
        <li
          className="page-number"
          onClick={() => onPageChange(number === 1 ? number : number - 1)}
        >
          {"<"}
        </li>
        {pageNumbers.map((number) => (
          <li
            key={number}
            onClick={() => handleClick(number)}
            className="page-number"
          >
            {number}
          </li>
        ))}
        <li className="page-number" onClick={() => onPageChange(number === metaData.totalPages ? number : number + 1)}>
          {">"}
        </li>
      </ul>
    </div>
  );
}
