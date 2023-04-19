import React, { useState } from 'react'
import './categories.css';

interface Props {
  category: string;
  checked?: boolean;
  handleCheck: (value: string) => void;
}

export default function Category({ category, handleCheck } : Props) {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
    handleCheck(category);
  };

  return (
    <li>
      <button
        className={isActive ? "active" : undefined}
        onClick={handleClick}
      >
        <span></span>
        {category}
      </button>
    </li>
  );
}
