import { useState } from "react";

const Pagination = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const prev = () => {
    setPageNumber(pageNumber - 1);
  };
  const next = () => {
    setPageNumber(pageNumber + 1);
  };
  return (
    <div>
      <button onClick={prev}>Prev</button>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((el, idx) => (
        <span
          className={`border-2 border-slate-400 p-2 ${
            idx + 1 === pageNumber ? "bg-blue-400" : ""
          }`}
          key={idx}
        >
          {el}
        </span>
      ))}
      <button onClick={next}>Next</button>
    </div>
  );
};

export default Pagination;
