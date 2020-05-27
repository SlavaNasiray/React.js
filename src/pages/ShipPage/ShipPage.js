import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { RenderShipList } from "../../SwService";

import "./ShipPage.css";

class ShipPage extends Component {
	state = { selectedItem: null };

	onSelectedItem = (id) => {
		this.setState({ selectedItem: id });
	};
	render() {
		const { history } = this.props;
		return (
			<div className="row mb2">
				<div className="col-md-6">
					<RenderShipList
						onSelectedItem={(id) => history.push(`/ship/${id}`)}
					/>
				</div>
			</div>
		);
	}
}

export default withRouter(ShipPage);
