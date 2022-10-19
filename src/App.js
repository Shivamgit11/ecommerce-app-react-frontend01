import { useState } from "react";
import "./App.css";
import Header from "./components/Layout/Header";
import CartProvider from "./store/CartProvider";
import Home from "./components/Pages/Home/Home";
import { Route, Switch } from "react-router-dom";
import Store from "./components/Pages/Store/Store";
import Auth from "./components/Pages/Auth/AuthForm";
import Cart from "./components/Cart/Cart";
import ProductDetails from "./components/Pages/ProductDetails/ProductDetails";
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
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/store">
            {cartState && <Cart onClick={onClickCartHandler} />}
            <Store />
          </Route>
          <Route path="/auth">
            <Auth />
          </Route>
          <Route path="/store/:productId">
            {cartState && <Cart onClick={onClickCartHandler} />}
            <ProductDetails />
          </Route>
        </Switch>
      </main>
    </CartProvider>
  );
}

export default App;
