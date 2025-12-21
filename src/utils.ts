import { Product } from './types';

export function generateProducts(): Product[] {
  const products = [];
  for (let i = 0; i < 10000; i++) {
    products.push({ name: `Product ${i + 1}`, id: i + 1 });
  }
  return products;
}

export function filterProducts(filterTerm: string, dummyProducts: Product[]) {
  if (!filterTerm) {
    return dummyProducts;
  }
  return dummyProducts.filter(({ name }) => name.includes(filterTerm));
}
