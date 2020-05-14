import React from "react";

const ErrorComponent = (props) => {
  const { errorsArr } = props;
  return (
    <ul className="list-error">
      {errorsArr.map((error) => {
        return (
          <li>
            email:{error.email}
            username:{error.username}
          </li>
        );
      })}
    </ul>
  );
};

export default ErrorComponent;
