import React, { Component } from "react";

import { RenderPersonaList, RenderPersonaDetail } from "../../SwService";
import "./peoplePage.css";

class PeoplePage extends Component {
  state = { selectedItem: null };
  
	onSelectedItem = (id) => {
		this.setState({ selectedItem: id });
	};
	render() {
		const { selectedItem } = this.state;
		return (
			<div className="row mb2">
				<div className="col-md-6">
					<RenderPersonaList onSelectedItem={this.onSelectedItem} />
				</div>
				<div className="col-md-6">
					<RenderPersonaDetail itemId={selectedItem} />
				</div>
			</div>
		);
	}
}

export default PeoplePage;
