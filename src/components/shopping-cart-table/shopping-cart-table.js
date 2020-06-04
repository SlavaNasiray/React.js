import React from "react";
import { connect } from "react-redux";
import { booksAddToCart, booksRemoveToCart } from "../../actions";
import "./shopping-cart-table.css";

const CartItem = props => {
	const { item, onInc, onDec, onDelete } = props;
	const { title, price, count, id } = item;
	return (
		<tr>
			<td>1</td>
			<td>{title}</td>
			<td>{count}</td>
			<td>${price}</td>
			<td>
				<button
					className="btn btn-outline-danger btn-sm float-right"
					onClick={() => onDelete(id)}
				>
					<i className="fa fa-trash-o" />
				</button>
				<button
					className="btn btn-outline-success btn-sm float-right"
					onClick={() => onInc(id)}
				>
					<i className="fa fa-plus-circle" />
				</button>
				<button
					className="btn btn-outline-warning btn-sm float-right"
					onClick={() => onDec(id)}
				>
					<i className="fa fa-minus-circle" />
				</button>
			</td>
		</tr>
	);
};
const ShoppingCartTable = props => {
	const { total, cartItems, onInc, onDec, onDelete } = props;
	return (
		<div className="shopping-cart-table">
			<h2>Your Order</h2>
			<table className="table">
				<thead>
					<tr>
						<th>#</th>
						<th>Item</th>
						<th>Count</th>
						<th>Price</th>
						<th>Action</th>
					</tr>
				</thead>

				<tbody>
					{cartItems.map(item => {
						return (
							<CartItem
								key={item.id}
								item={item}
								onInc={onInc}
								onDec={onDec}
								onDelete={onDelete}
							/>
						);
					})}
				</tbody>
			</table>

			<div className="total">Total: ${total}</div>
		</div>
	);
};

const mapStateToProps = state => {
	return { total: state.books.totalOrder, cartItems: state.books.cartItems };
};

const mapDispatchToProps = dispatch => {
	return {
		onInc: id => dispatch(booksAddToCart(id)),
		onDec: id => dispatch(booksRemoveToCart(id)),
		onDelete: id => console.log(id),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);
