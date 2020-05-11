import React from "react";
import "./TodoSearchPanel.css";

const TodoSearchPanel = (props) => {
	const { searchItems, searchValues } = props;

	const searchInputValue = (event) => {
		let term = event.target.value;
		searchValues(term);
	};

	return (
		<div className="search-panel d-flex">
			<input
				className="form-control search-input"
				type="text"
				placeholder="Поиск"
				onInput={searchInputValue}
			/>

			<div className="btn-group">
				<button
					type="button"
					className="btn btn-info"
					onClick={() => searchItems("All")}
				>
					Все
				</button>
				<button
					type="button"
					className="btn btn-outline-secondary"
					onClick={() => {
						searchItems("liked");
					}}
				>
					Понравилось
				</button>
				<button
					type="button"
					className="btn btn-danger"
					onClick={() => {
						searchItems("important");
					}}
				>
					Выполнено
				</button>
			</div>
		</div>
	);
};

export default TodoSearchPanel;
