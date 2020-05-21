import React, { Component } from "react";
import ItemList from "../../components/item-list";
import ItemsDetail from "../../components/ItemsDetail";
import SwapiService from "../../services/swapi-service";
import Record from "../../components/Record";
import "./PeoplePage.css";

class PeoplePage extends Component {
	swapiService = new SwapiService();
	state = {
		selectedItem: null,
	};

	onSelectedItem = (id) => {
		this.setState({ selectedItem: id });
	};
	render() {
		const { getAllPeople, getPerson, getPersonImage } = this.swapiService;
		return (
			<div className="row mb2">
				<div className="col-md-6">
					<ItemList
						onSelectedItem={this.onSelectedItem}
						getData={getAllPeople}
						renderItem={(item) => `${item.name}`}
					/>
				</div>
				<div className="col-md-6">
					<ItemsDetail
						selectedItem={this.state.selectedItem}
						getMessage={"Нужно выбрать персонажа"}
						getPerson={getPerson}
						getImage={getPersonImage}
					>
						<Record label={`Gender`} field={`gender`} />
						<Record label={`Birth Year`} field={`birthYear`} />
						<Record label={`Eye Color`} field={`eyeColor`} />
					</ItemsDetail>
				</div>
			</div>
		);
	}
}

export default PeoplePage;
