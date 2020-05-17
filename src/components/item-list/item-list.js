import React, { Component } from "react";

/* import PeoplesPage from "../../pages/PeoplePage";
import ShipsPage from "../../pages/ShipPage";
import PlanetsPage from "../../pages/PlanetPage"; */
import "./item-list.css";

class ItemList extends Component {
	state = {
		items: [],
	};

	render() {
		const { items } = this.props.state;
		const { onSelectedItem } = this.props;
		return (
			<ul className="item-list list-group">
				{items.map((item) => {
					return (
						<li
							className="list-group-item"
							key={item.id}
							onClick={() => {
								onSelectedItem(item.id);
							}}
						>
							{item.name}
						</li>
					);
				})}
			</ul>
		);
	}
}

export default ItemList;
