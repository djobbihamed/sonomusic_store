import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CartList = (props) => {
  const [data, setData] = useState([]);
  const [trigger, setTrigger] = useState(false);
  console.log(data, "data");

  useEffect(() => {
    setData(props.cartData);
  }, [trigger]);

  var sum = data.reduce((acc, e) => acc + e.price, 0);

  return (
    <div className="cart-list">
      <h1>My cart</h1>
      {data.map((e, i) => {
        return (
          <div className="cart-item" key={i}>
            <span>Product Name: {e.name} </span>
            <span>Price: {e.price} </span>
            <button
              className="cart-list-button"
              onClick={() => {
                props.remove(i);
                setTrigger(!trigger);
              }}
            >
              Remove
            </button>
          </div>
        );
      })}

      <h3>Total: {sum}$</h3>
      <button
        onClick={() => {
          alert(`you paid ${sum} successfully`);
          props.empty();
          setTrigger(!trigger);
        }}
      >
        Checkout
      </button>

      <Link to="/">Back to Products List</Link>
    </div>
  );
};

export default CartList;
