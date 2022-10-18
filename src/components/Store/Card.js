import React from "react";

const Card = (props) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <h3 class="text-center">{props.title}</h3>
      <img src={`${props.imageUrl}`} className="card-img-top" alt="..." />
      <div className="card-body">
        <div className="d-flex justify-content-around">
          <p>
            <span className="fs-4">
              ₹
              <span id="item-price" className="fs-4">
                ${props.price}
              </span>
            </span>
          </p>
          <button className="btn btn-primary p-3" type="button" onclick="addItem(this)">
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
