import React from "react";

import Header from "../Header";
import InputsFields from "../InputsFields";
import ErrorComponent from "../ErrorComponent";
import Service from "../../service";
import "./app.css";

class App extends React.Component {
  state = { errosArr: [] };
  service = new Service();

  postAnswer = (error) => {
    if (error === undefined) {
      this.setState({
        errosArr: [],
      });
      alert("Вы успешно вошли!!!");
    } else {
      console.log(error);
      this.setState({
        errosArr: [
          {
            email: this.email,
            username: this.username,
          },
        ],
      });
    }
  };

  onSubmit = (obj) => {
    return this.service.requestData(obj).then((res) => this.postAnswer(res));
  };
  render() {
    return (
      <div className="app">
        <Header />
        <ErrorComponent errosArr={errosArr} />
        <InputsFields onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default App;
