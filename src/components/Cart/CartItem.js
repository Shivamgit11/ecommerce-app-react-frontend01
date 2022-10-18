import React from "react";
import classes from "./CartItem.module.css";

const productsArr = [
  {
    id: "1",
    title: "Colors",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },

  {
    id: "2",
    title: "Black and white Colors",

    price: 50,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },

  {
    id: "3",
    title: "Yellow and Black Colors",

    price: 70,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },

  {
    id: "4",
    title: "Blue Color",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const CartItem = (props) => {
  const cartProduct = productsArr.map((product) => {
    return (
      <div className="col col=12">
        <div className="card-title">
          {product.title}

          <img src={product.imageUrl} alt="..." width={100} height={100} className="card-img-top" />
        </div>

        <div className="card-title">
          <p>
            <span>
              ₹<span id="item-price">{product.price}</span>
            </span>
          </p>
        </div>
        <div className="card-title" id="cart-quantity">
          {0}
        </div>
        <div className="card-title">
          <button onclick="removeItem(this)" className="btn btn-primary" style={{ padding: "4px" }}>
            Remove
          </button>
        </div>
      </div>
    );
  });

  return (
    <div className={`container  ${classes["cart-items"]} d-flex justify-content-space`}>
      <div className="row">{cartProduct}</div>
    </div>
  );
};

export default CartItem;
