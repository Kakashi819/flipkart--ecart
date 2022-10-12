import React from "react";

export default function product(props) {
  return (
    <div className="row mt-3">
      <div className="col-5">
        <h2>
          <span className="px-2">{props.product.name}</span>
          <span className="badge bg-secondary pl-5 ml-5">
            ₹{props.product.price}
          </span>
        </h2>
      </div>

      <div className="col-3">
        <div
          className="btn-group"
          role="group"
          aria-label="Basic mixed styles example"
        >
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => {
              props.decrementQuality(props.index);
            }}
          >
            -
          </button>
          <button type="button" className="btn btn-warning">
            {props.product.quantity}
          </button>
          <button
            type="button"
            className="btn btn-success"
            onClick={() => {
              props.incrementQuantity(props.index);
            }}
          >
            +
          </button>
        </div>
      </div>

      <div className="col-2">
        {props.product.quantity * props.product.price}
      </div>
      <button
        className="col-2 btn btn-danger"
        onClick={() => {
          props.remove(props.index);
        }}
      >
        Remove
      </button>
    </div>
  );
}
