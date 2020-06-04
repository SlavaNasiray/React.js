import React from "react";
import { Link } from "react-router-dom";
import "./shop-header.css";

const ShopHeader = () => {
	return (
		<header className="shop-header row">
			<Link className="logo text-dark" to="/">
				ReStore
			</Link>
			<Link className="shopping-cart" to="/cart">
				<i className="cart-icon fa fa-shopping-cart" />
				<span>5 items ($210)</span>
			</Link>
		</header>
	);
};
export default ShopHeader;
