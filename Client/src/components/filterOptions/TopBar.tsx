import React from "react";
import SortBy from "./sortBy/SortBy";
import "./topBar.css";
import { useAppDispatch, useAppSelector } from "../../app/store/configureStore";
import { setProductParams } from "../../app/store/slice/catalogSlice";

export default function TopBar() {
  const dispatch = useAppDispatch();
  const { productParams, metaData } = useAppSelector((state) => state.catalog);
  const { currentPage, pageSize, totalCount, totalPages } = metaData;

  const sortOptions = [
    { value: "default", name: "Alphabetical" },
    { value: "price", name: "Price - Low to High" },
    { value: "priceDesc", name: "Price - High to Low" },
  ];

  return (
    <div className="top_bar">
      <SortBy
        selected={productParams.orderBy}
        options={sortOptions}
        onChange={(e) =>
          dispatch(setProductParams({ orderBy: e.target.value }))
        }
      />
      <div>
        <span>
          Displaying {(currentPage - 1) * pageSize + 1} - 
          {currentPage * pageSize > totalCount ? totalCount : currentPage * pageSize} of {totalCount} products
        </span>
      </div>
    </div>
  );
}
