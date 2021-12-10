import './App.css';
import Products from './Components/Products/Products.jsx';
import Navbar from './Components/Navbar/Navbar';
import { set } from 'react-hook-form';
import Commerce from '@chec/commerce.js';
import { useEffect, useState } from 'react';
import Cart from './Components/Cart/Cart';
import {
  BrowserRouter as Router,
  Routes ,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Checkout from './Components/CheckoutForm/Checkout/Checkout';
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
    const fetchCart = async () => {
      setCart(await commerce.cart.retrieve());
    }

    //added to cart

    const handleAddToCart = async (productId, quantity) => {
      const items = await commerce.cart.add(productId, quantity);
      setCart(items);
    }
    const handleUpdateToCart = async (productId, quantity) => {
      const items = await commerce.cart.update(productId, {quantity});
      setCart(items);
    }

    
    const handleRemoveFromCart = async (productId, quantity) => {
      const items = await commerce.cart.remove(productId, quantity);
      setCart(items);
    }
    
    const handleEmptyCart = async () => {
      const items = await commerce.cart.empty();
      setCart(items);
    }

    useEffect(() => {
      fetchProducts();
      fetchCart();
    }, []);

  return (
    <Router>
      <Navbar totalItems={cart.total_unique_items}/>
      <div style={{marginTop:'80px'}} />
      <Routes>
          <Route exact path="/" element={<Products products={products} addedToCart={handleAddToCart}/>} />
          <Route exact path="/cart" element={<Cart cart={cart} handleUpdateToCart={handleUpdateToCart}handleRemoveFromCart={handleRemoveFromCart} handleEmptyCart={handleEmptyCart}/>}/>
          <Route exact path="/checkout" element={<Checkout />} />
      </Routes>
    </Router>
  );
}

export default App;
