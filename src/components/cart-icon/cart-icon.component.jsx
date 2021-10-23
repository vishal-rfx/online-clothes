import React from "react";
import "./cart-icon.styles.scss";
import { toggleCartHidden } from "../../redux/cart/cart.action";
import { connect } from "react-redux";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

function CartIcon({ toggleCartHidden, itemCount }) {
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

const mapStateToProps = (state) => ({
  itemCount: selectCartItemsCount(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
