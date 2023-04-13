import React from 'react'

export default function SortBy() {
  const sortOptions = [
    { value: "default", name: "Alphabetical" },
    { value: "price", name: "Price - Low to High" },
    { value: "priceDesc", name: "Price - High to Low" },
  ];

  return (
    <select>
      {
        sortOptions.map((option) => {
          return <option value={option.value}>{option.name}</option>
        })
      }
    </select>
  )
}
