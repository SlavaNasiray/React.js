import React from "react";
import "./TodoTitle.css";

const TodoTitle = (props) => {
	const { counterTodo } = props;
	return (
		<div className="app-header d-flex">
			<h1>Имя</h1>
			<h2> {counterTodo}записей, из них понравилось 0</h2>
		</div>
	);
};

export default TodoTitle;
