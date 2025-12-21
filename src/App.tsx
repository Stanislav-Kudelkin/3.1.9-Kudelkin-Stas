import { useState, ChangeEvent, memo, useMemo } from 'react';
import { generateProducts, filterProducts } from './utils.ts';
import { ProductList } from './ProductList';
import './App.css';

export const App = memo(() => {
  const [filterTerm, setFilterTerm] = useState('');

  const dummyProducts = useMemo(() => generateProducts(), []);
  const filteredProducts = filterProducts(filterTerm, dummyProducts);

  const updateFilterHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setFilterTerm(event.target.value);
  };

  return (
    <>
      <input className="input" type="text" onChange={updateFilterHandler} />
      <ProductList products={filteredProducts} />
    </>
  );
});
