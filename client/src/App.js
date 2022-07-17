import ErrorBoundary from "./components/ErrorBoundary";
import User from "./components/User";
import Items from "./components/Items";
import ItemDetail from "./components/ItemDetail";
import Cart from "./components/Cart";

import { useState } from "react";

import "./App.css";
import axios from "axios";

function App() {
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);
  const [selectedItemIndex, setSelectedItemIndex] = useState();

  const addToCart = (item, quantity) => {
    const cartItem = { quantity, ...item };
    setCart([cartItem, ...cart]);
    console.log(cart);
  };

  const emptyCart = () => {
    setCart([]);
  };

  const setItemDetail = (itemIndex) => {
    setSelectedItemIndex(itemIndex);
  };

  const getItems = () => {
    axios.get("/getitems").then((result) => {
      //console.log(result);
      setItems(result.data.items);
    });
  };

  const selectedItem = items[selectedItemIndex];

  return (
    <ErrorBoundary>
      <Items items={items} setItemDetail={setItemDetail} />
      {items.length === 0 && (
        <button type="button" onClick={getItems}>
          Get Items
        </button>
      )}
      <ItemDetail item={selectedItem} addToCart={addToCart} />
      <Cart items={cart} emptyCart={emptyCart} />
      <User />
    </ErrorBoundary>
  );
}

export default App;
