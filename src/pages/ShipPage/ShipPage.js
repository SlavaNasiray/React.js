import React, { Component } from "react";
import { RenderShipList, RenderShipDetail } from "../../SwService";


import "./ShipPage.css";

class ShipPage extends Component {


  state = { selectedItem: null };

  onSelectedItem = (id) => {
    this.setState({ selectedItem: id });
  };
  render() {
    const {selectedItem} = this.state
    return (
      <div className="row mb2">
        <div className="col-md-6">
          <RenderShipList onSelectedItem={this.onSelectedItem} />
        </div>
        <div className="col-md-6">
          <RenderShipDetail itemId={selectedItem} />
        </div>
      </div>
    );
  }
}

export default ShipPage;
