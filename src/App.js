import { useState } from "react";
import "./App.css";
import Header from "./components/Layout/Header";
import Store from "./components/Store/Store";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
import Home from "./components/Home/Home";
function App() {
  const [cartState, setCartState] = useState(false);

  const onClickCartHandler = () => {
    setCartState((prevState) => {
      return !prevState;
    });
  };

  return (
    <CartProvider className="App">
      <Header onClick={onClickCartHandler} />
      <main>
        {/* {cartState && <Cart onClick={onClickCartHandler} />}
        <Store /> */}
        <Home />
      </main>
    </CartProvider>
  );
}

export default App;
