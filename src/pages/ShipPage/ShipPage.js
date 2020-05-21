import React, { Component } from "react";
import ItemList from "../../components/item-list";
import ItemsDetail from "../../components/ItemsDetail";
import SwapiService from "../../services/swapi-service";
import Record from "../../components/Record";
import "./ShipPage.css";

class ShipPage extends Component {
	swapiService = new SwapiService();
	state = {
		selectedItem: null,
	};

	onSelectedItem = (id) => {
		this.setState({ selectedItem: id });
	};
	render() {
		const {
			getAllStarships,
			getStarship,
			getStarshipImage,
		} = this.swapiService;
		console.log(getStarship);
		return (
			<div className="row mb2">
				<div className="col-md-6">
					<ItemList
						onSelectedItem={this.onSelectedItem}
						getData={getAllStarships}
						renderItem={(item) => `${item.name}`}
					/>
				</div>
				<div className="col-md-6">
					<ItemsDetail
						selectedItem={this.state.selectedItem}
						getMessage={
							"Нужно выбрать Звезду смерти и разрушить все нафиг!!!"
						}
						getPerson={getStarship}
						getImage={getStarshipImage}
					>
						<Record label={`Model`} field={`model`} />
						<Record label={`Manufacturer`} field={`manufacturer`} />
						<Record label={`CostInCredits`} field={`costInCredits`} />
						<Record label={`Length`} field={`length`} />
						<Record label={`Crew`} field={`crew`} />
						<Record label={`Passengers`} field={`passengers`} />
						<Record label={`CargoCapacity`} field={`cargoCapacity`} />
					</ItemsDetail>
				</div>
			</div>
		);
	}
}

export default ShipPage;
