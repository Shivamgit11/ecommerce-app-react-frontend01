import { useState } from "react";
import "./App.css";
import Header from "./components/Layout/Header";
import Store from "./components/Store/Store";
import Cart from "./components/Cart/Cart";
function App() {
  const [cartState, setCartState] = useState(false);

  const onClickCartHandler = () => {
    setCartState((prevState) => {
      return !prevState;
    });
  };

  return (
    <div className="App">
      <Header onClick={onClickCartHandler} />
      <main>
        {cartState && <Cart onClick={onClickCartHandler} />}
        <Store />
      </main>
    </div>
  );
}

export default App;
