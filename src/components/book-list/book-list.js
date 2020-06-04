import React, { Component } from "react";
import BookListItem from "../book-list-item";
import { connect } from "react-redux";
import { compose } from "redux";
import Spinner from "../spinner";
import ErrorNetwork from "../error-network";
import { withBookstoreService } from "../hoc";
import { booksLoaded, booksAddToCart } from "../../actions";
// import { compose } from "../../utils";
import "./book-list.css";

class BookList extends Component {
	componentDidMount() {
		const { bookstoreService, booksLoaded, booksError } = this.props;
		bookstoreService
			.getBooks()
			.then(data => booksLoaded(data))
			.catch(error => booksError(error));
	}

	render() {
		const {
			books,
			loading,
			error,
			bookAddedToCart,
			booksAddToCart,
		} = this.props;

		if (loading) {
			return <Spinner />;
		}

		if (error) {
			return <ErrorNetwork />;
		}

		return (
			<ul className="book-list">
				{books.map(book => {
					return (
						<li key={book.id}>
							<BookListItem
								book={book}
								bookAddedToCart={bookAddedToCart}
								booksAddToCart={booksAddToCart}
							/>
						</li>
					);
				})}
			</ul>
		);
	}
}

const mapStateToProps = ({ books:{books, loading, error} }) => {
	return { books, loading, error };
};

const mapDispatchToProps = {
	booksLoaded,
	booksAddToCart,
};

export default compose(
	withBookstoreService(),
	connect(mapStateToProps, mapDispatchToProps)
)(BookList);
