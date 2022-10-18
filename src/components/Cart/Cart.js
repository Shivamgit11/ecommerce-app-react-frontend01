import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import Modal from "../UI/Modal";
import Button from "../UI/button";

const Cart = (props) => {
  return (
    <Modal onClick={props.onClick}>
      <div className={`/*d-none*/ ${classes["cart-position"]}`} id="cart">
        <div className="card" style={{ width: "35rem", height: "auto" }}>
          <div className="fs-1 d-flex justify-content-center">
            Cart
            <div>
              <button className="fs-5 position-absolute end-0 btn btn-primary" onClick="closeCart(this)">
                x
              </button>
            </div>
          </div>
          <div className="card-body" id="cart-body">
            <div className={`${classes["cart-header"]} d-flex justify-content-center`}>
              <div className="card-title">ITEM</div>
              <div className="card-title">PRICE</div>
              <div className="card-title">QUANTITY</div>
            </div>
            {/* Adding Product Here */}
            <CartItem />
            <div className={`${classes["cart-details"]}  d-flex justify-content-end`} id="cart-add">
              <div>Total :</div>
              <div>
                <span>
                  ₹<span id="cart-sub-total">00.00</span>
                </span>
              </div>
            </div>
            <div className={`${classes["cart-purchase"]}`}>
              <Button className="btn btn-primary" name="Purchase" />
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default Cart;
