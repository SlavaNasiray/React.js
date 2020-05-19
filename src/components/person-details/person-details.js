import React, { Component } from "react";
import ErrorButton from "../error button";
import ErrorComponent from "../error-component";
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner";

import "./person-details.css";

export default class PersonDetails extends Component {
  state = {
    item: [],
    error: false,
    loading: true,
  };

  swapiService = new SwapiService();
  componentWillUpdate(prevProps) {
    if (prevProps.selectedItem ? this.props.selectedItem : null) {
      this.swapiService.getPerson(this.props.selectedItem).then((item) => {
        this.setState({ item: item, loading: false });
      });
    }
  }

  componentDidCatch() {
    this.setState({ error: true });
  }
  render() {
    const { error, item, loading } = this.state;

    const loadingMes = loading ? <Spinner /> : null;
    const errorMes = error ? <ErrorComponent /> : null;

    const content = !(loading || error) ? <ViewItem item={item} /> : null;

    return (
      <>
        {loadingMes}
        {content}
        {errorMes}
      </>
    );
  }
}

const ViewItem = ({ item }) => {
  const { id, name, gender, birthYear, eyeColor } = item;
  return (
    <div className="person-details card">
      <img
        className="person-image"
        src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
        alt={name}
      />

      <div className="card-body">
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Gender</span>
            <span>{gender}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Birth Year</span>
            <span>{birthYear}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Eye Color</span>
            <span>{eyeColor}</span>
          </li>
        </ul>
      </div>
      <ErrorButton />
    </div>
  );
};
