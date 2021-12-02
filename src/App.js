import logo from './logo.svg';
import './App.css';
import Products from './Components/Products/Products.jsx';
import Navbar from './Components/Navbar/Navbar';
import { set } from 'react-hook-form';

import Commerce from '@chec/commerce.js';
import { useEffect, useState } from 'react';
function App() {
  const commerce = new Commerce('pk_test_366567aeef8c1286f40965ea8e5f6f2a60fe7e977fbac',true);

    // commerce.products.list().then((product) => console.log(product.data));
    
    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        const { data } = await commerce.products.list();
    
        setProducts(data);
      };
      useEffect(() => {
        fetchProducts();
      }, []);
  return (
    <div className="bodyBg">
      <Navbar/>
      <Products products={products}/>
    </div>
  );
}

export default App;
