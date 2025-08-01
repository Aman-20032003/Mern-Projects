import{React,useContext} from "react";
import { CartContext } from "./Cart";

const Item = (props) => {
  const cart = useContext(CartContext);
  console.log(cart);
  

  return (
    <div className="item-cart">
      <h4>{props.name}</h4>
      <p>Price: {props.price}</p>
      <button onClick={() => cart.setItems([...cart.items, { name: props.name, price: props.price }])}>
        Add TO Cart
      </button>
    </div>
  );
};

export default Item;

