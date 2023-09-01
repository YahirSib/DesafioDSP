import logo from './logo.svg';
import './App.css';
import { Headers } from './components/Headers';
import { ProductoList } from './components/ProductList';
import { useState } from 'react';

function App() {
  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);
  return (
    <>
      <Headers
      allProducts = {allProducts}
      setAllProducts = {setAllProducts}
      total = {total}
      setTotal = {setTotal}
      countProducts = {countProducts}
      setCountProducts = {setCountProducts}/>
        
      <ProductoList
      allProducts = {allProducts}
      setAllProducts = {setAllProducts}
      total = {total}
      setTotal = {setTotal}
      countProducts = {countProducts}
      setCountProducts = {setCountProducts}/>
        
    </>
  );
}

export default App;
