import React, { useEffect, useState } from 'react';

const Pagination = ({ currentPage, totalPage, handleClick }) => {
  const [buttons, setButtons] = useState([]);

  const createButtons = (totalPage) => {
    let _arr = [];
    const buttonArr = Array.from(Array(totalPage).keys())
      .map((num) => {
        _arr.push(num);
        if (num % 4 == 0) {
          _arr = [];
          return _arr;
        }
        return;
      })
      .filter((arr) => arr)
      .find((i) => i.includes(currentPage + 1));
    if (!buttonArr) return [];
    currentPage < totalPage && buttonArr.push(buttonArr[buttonArr.length - 1] + 1);
    buttonArr[0] > 1 && buttonArr.push(buttonArr[0] - 1);
    buttonArr.sort((a, b) => a - b);
    return buttonArr;
  };

  useEffect(() => {
    setButtons(createButtons(totalPage));
  }, [currentPage, totalPage]);

  return (
    <nav className="space-x-px my-5">
      {buttons.map((button) => (
        <button
          key={button}
          onClick={() => handleClick(button - 1)}
          className={`${currentPage === button - 1 && 'text-primary bg-green-50'} border px-3 py-1`}
        >
          {button}
        </button>
      ))}
    </nav>
  );
};

export default Pagination;
