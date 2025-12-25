import { useState, ChangeEvent, memo, useMemo, useTransition } from 'react'
import { generateProducts, filterProducts } from './utils.ts'
import { ProductList } from './ProductList'
import './App.css'

export const App = memo(() => {
  const [isPending, startTransition] = useTransition()
  const [filterTerm, setFilterTerm] = useState('')

  const dummyProducts = useMemo(() => generateProducts(), [])
  const filteredProducts = filterProducts(filterTerm, dummyProducts)

  const updateFilterHandler = (event: ChangeEvent<HTMLInputElement>) => {
    startTransition(() => {
      setFilterTerm(event.target.value)
    })
  }

  return (
    <>
      <input className="input" type="text" onChange={updateFilterHandler} />
      {isPending ? (
        <div className="loader"></div>
      ) : (
        <ProductList products={filteredProducts} />
      )}
    </>
  )
})
