import React, { Component } from "react";
import ItemList from "../../components/item-list";
import ItemsDetail from "../../components/ItemsDetail";
import SwapiService from "../../services/swapi-service";
import Record from "../../components/Record";
import "./PlanetPage.css";

class PlanetPage extends Component {
	swapiService = new SwapiService();
	state = {
		selectedItem: null,
	};

	onSelectedItem = (id) => {
		this.setState({ selectedItem: id });
	};
	render() {
		const { getAllPlanets, getPlanet, getPlanetImage } = this.swapiService;
		return (
			<div className="row mb2">
				<div className="col-md-6">
					<ItemList
						onSelectedItem={this.onSelectedItem}
						getData={getAllPlanets}
						renderItem={(item) => `${item.name}`}
					/>
				</div>
				<div className="col-md-6">
					<ItemsDetail
						selectedItem={this.state.selectedItem}
						getMessage={"Нужно выбрать персонажа"}
						getPerson={getPlanet}
						getImage={getPlanetImage}
					>
						<Record label={`Population`} field={`population`} />
						<Record
							label={`RotationPeriod`}
							field={`rotationPeriod`}
						/>
						<Record label={`Diameter`} field={`diameter`} />
					</ItemsDetail>
				</div>
			</div>
		);
	}
}

export default PlanetPage;
