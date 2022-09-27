import React from "react";

export default function product(props) {
  return (
    <div className="row">
      <div className="col-5">
        <h2>
          <span className="px-2">{props.product.name}</span>
          <span className="badge bg-secondary pl-5 ml-5">
            ₹{props.product.price}
          </span>
        </h2>
      </div>

      <div className="col-4">
        <div
          class="btn-group"
          role="group"
          aria-label="Basic mixed styles example"
        >
          <button type="button" class="btn btn-danger">
            -
          </button>
          <button type="button" class="btn btn-warning">
            {props.product.quantity}
          </button>
          <button
            type="button"
            class="btn btn-success"
            onClick={() => {
              this.incrementQuantity(props.index);
            }}
          >
            +
          </button>
        </div>
      </div>

      <div className="col-3">
        {props.product.quantity * props.product.price}
      </div>
    </div>
  );
}
