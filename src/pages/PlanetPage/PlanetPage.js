import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { RenderPlanetList } from "../../SwService";

import "./PlanetPage.css";

class PlanetPage extends Component {
	state = { selectedItem: null };

	onSelectedItem = (id) => {
		this.setState({ selectedItem: id });
	};
	render() {
		const { history } = this.props;
		return (
			<div className="row mb2">
				<div className="col-md-6">
					<RenderPlanetList
						onSelectedItem={(id) => history.push(`/planet/${id}`)}
					/>
				</div>
			</div>
		);
	}
}

export default withRouter(PlanetPage);
