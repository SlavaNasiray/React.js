import React from "react";
import "./book-list-item.css";
import { checkPropTypes } from "prop-types";

const BookListItem = props => {
	const { book, booksAddToCart } = props;
	const { title, author, price, coverImage, id } = props.book;
	return (
		<div className="book-list-item">
			<div className="book-cover">
				<img src={coverImage} alt="cover" />
			</div>
			<div className="book-details">
				<a href="#1" className="book-title">
					{title}
				</a>
				<div className="book-author">{author}</div>
				<div className="book-price">${price}</div>
				<button
					className="btn btn-info add-to-cart"
					onClick={() => {
						booksAddToCart(id);
					}}
				>
					Add to cart
				</button>
			</div>
		</div>
	);
};

export default BookListItem;
