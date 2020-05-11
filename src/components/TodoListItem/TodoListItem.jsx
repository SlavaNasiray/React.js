import React from "react";
import "./TodoListItem.css";

const TodoListItem = (props) => {
  const {
    onToggleLike,
    onToggleImp,
    onDeleteItem,
    title,
    important,
    like,
  } = props;

  const importantClass = important ? "important" : "";
  const likeClass = like ? "like" : "";

  return (
    <li className="list-group-item">
      <div
        className={`app-list-item d-flex justify-content-between ${importantClass} ${likeClass}`}
      >
        <span className="app-list-item-label" onClick={onToggleLike}>
          {title}
        </span>
        <div className="d-flex flex-column">
          <div className="d-flex justify-content-center align-items-center">
            <button
              type="button"
              className="btn-check btn-sm"
              onClick={onToggleImp}
            >
              <i className="fa fa-check"></i>
            </button>
            <button
              type="button"
              className="btn-trash btn-sm"
              onClick={onDeleteItem}
            >
              <i className="fa fa-trash-o"></i>
            </button>
            <i className="fa fa-heart"></i>
          </div>
        </div>
      </div>
    </li>
  );
};

export default TodoListItem;
