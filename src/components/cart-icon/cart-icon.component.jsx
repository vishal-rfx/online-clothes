import React from "react";
import "./cart-icon.styles.scss";
import { toggleCartHidden } from "../../redux/cart/cart.action";
import { connect } from "react-redux";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

function CartIcon({ toggleCartHidden,itemCount}) {
    console.log("Im rerendering");
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = ({ cart: { cartItems } }) => {
    console.log("Im mapState");
  return ({itemCount: cartItems.reduce(
    (totalQuantity, cartItem) => totalQuantity + cartItem.quantity,
    0)
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
