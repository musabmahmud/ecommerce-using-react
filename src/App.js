import './App.css';
import Products from './Components/Products/Products.jsx';
import Navbar from './Components/Navbar/Navbar';
import { set } from 'react-hook-form';

import Commerce from '@chec/commerce.js';
import { useEffect, useState } from 'react';
function App() {
  const commerce = new Commerce('pk_test_366567aeef8c1286f40965ea8e5f6f2a60fe7e977fbac',true);

    // commerce.products.list().then((product) => console.log(product.data));
    //Product List
    const [products, setProducts] = useState([]);
    const fetchProducts = async () => {
        const { data } = await commerce.products.list();
        setProducts(data);
    };

    //Cart List
    const [cart, setCart] = useState({});
    const fetchCart = async ()=> {
      setCart(await commerce.cart.retrieve());
    }

    //added to cart

    const handleAddToCart = async (productId, quantity) => {
      const items = await commerce.cart.add(productId, quantity);
      setCart(items);
    }

    useEffect(() => {
      fetchProducts();
      fetchCart();
    }, []);

    console.log(cart,'cart');
  return (
    <div className="bodyBg">
      <Navbar totalItems={cart.total_unique_items}/>
      <Products products={products} addedToCart={handleAddToCart}/>
    </div>
  );
}

export default App;
