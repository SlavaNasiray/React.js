import React from "react";
class InputsFields extends React.Component {
  state = {
    user: {
      username: "",
      email: "",
      password: "",
    },
  };
  changeName = ({ target: { value } }) => {
    this.setState((user) => {
      return {
        user: { ...user, username: value },
      };
    });
  };
  changeEmail = ({ target: { value } }) => {
    this.setState((user) => {
      return {
        user: { ...user, email: value },
      };
    });
  };
  changePassword = ({ target: { value } }) => {
    this.setState((user) => {
      return {
        user: { ...user, password: value },
      };
    });
  };
  onSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state);
  };
  render() {
    console.log(this.state.user)
    return (
      <form className="app_inputsFields" onSubmit={this.onSubmitForm}>
        <input
          type="text"
          name="user"
          placeholder="Username"
          required
          onChange={this.changeName}
          value={this.state.user.username}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          onChange={this.changeEmail}
          value={this.state.user.email}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          onChange={this.changePassword}
          value={this.state.user.password}
        />
        <button type="submit">Sign up</button>
      </form>
    );
  }
}

export default InputsFields;
