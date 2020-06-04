const booksLoaded = newBooks => {
	if (newBooks === undefined) {
		throw new Error("Request failed: for books");
	} else {
		return {
			type: "BOOKS_LOADED",
			payload: newBooks,
		};
	}
};

const booksAddToCart = id => {
	return {
		type: "BOOKS_ADD_TO_CART",
		payload: id,
	};
};

const booksRemoveToCart = id => {
	return {
		type: "BOOKS_REMOVE_TO_CART",
		payload: id,
	};
};

export { booksLoaded, booksAddToCart, booksRemoveToCart };
