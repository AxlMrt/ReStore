import React, { useState } from "react";
import Category from "./Category";

interface Props {
  name: string;
  items: string[];
  checked?: string[];
  onChange: (items: string[]) => void;
}

export default function Categories({
  name,
  items,
  checked,
  onChange,
}: Props) {
  const [checkedItems, setCheckedItems] = useState(checked || []);

  const handleCheck = (value: string) => {
    const currentIndex = checkedItems.findIndex((item) => item === value);
    let newChecked: string[] = [];

    if (currentIndex === -1) newChecked = [...checkedItems, value];
    else newChecked = checkedItems.filter((item) => item !== value);

    setCheckedItems(newChecked);
    onChange(newChecked);
  };

  return (
    <div>
      <h4>{name}</h4>
      <ul>
        {items.map((item) => {
          return (
            <Category
              category={item}
              key={item}
              checked={checkedItems.indexOf(item) !== -1}
              handleCheck={handleCheck}
            />
          );
        })}
      </ul>
    </div>
  );
}
