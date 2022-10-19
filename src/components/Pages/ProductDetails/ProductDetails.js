import Button from "../../UI/button";
import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { productsArr } from "../Store/Store";
import CartContext from "../../../store/cart-context";

const ProductDetails = () => {
  const paramId = useParams();

  const product = productsArr.filter((dt) => dt.id === paramId.productId)[0];
  // Adding Product to cart
  const crtStore = useContext(CartContext);

  const addItemToCart = () => {
    const item = {
      title: product.title,
      imageUrl: product.imageUrl,
      id: product.id,
      price: product.price,
      quantity: 1,
    };

    crtStore.addItem(item);
  };

  return (
    <React.Fragment>
      <div className="container justify-content-center d-flex mt-5">
        <div className="card" style={{ width: "18rem" }}>
          <img src={product.imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text">{product.description}</p>
            <div>
              <p className="d-inline me-5">{product.price}</p>
              <Button className="btn btn-dark ms-5" onClick={addItemToCart}>
                Add To Cart
              </Button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProductDetails;
