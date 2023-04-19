import React from 'react'
import SearchBar from './search/SearchBar'
import Categories from './categories/Categories';
import './sideBar.css'
import { setProductParams } from '../../app/store/slice/catalogSlice';
import { useAppDispatch, useAppSelector } from '../../app/store/configureStore';

interface Props {
  brands: string[];
  types: string[];
}

export default function SideBar() {
  const dispatch = useAppDispatch();
  const { brands, types, productParams } = useAppSelector((state) => state.catalog);

  return (
    <section className="sideBar">
      <SearchBar />
      <div>
        <h4>Categories</h4>
        <Categories
          name="Brands"
          items={brands}
          checked={productParams.brands}
          onChange={(items: string[]) =>
            dispatch(setProductParams({ brands: items }))
          }
        />
        <Categories
          name="Types"
          items={types}
          checked={productParams.types}
          onChange={(items: string[]) =>
            dispatch(setProductParams({ types: items }))
          }
        />
      </div>
    </section>
  );
}
