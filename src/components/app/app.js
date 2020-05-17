import React from "react";

import Header from "../header";
import RandomPlanet from "../random-planet";
import ItemList from "../item-list";
import PersonDetails from "../person-details";
import ErrorButton from "../error button";
import ErrorComponent from "../error-component";
import "./app.css";

class App extends React.Component {
	state = {
		showRandomPlanet: true,
	};

	toggleRandomPlanet = () => {
		this.setState((state) => {
			return {
				showRandomPlanet: !state.showRandomPlanet,
			};
		});
	};

	render() {
		if (this.state.error) {
			return <ErrorComponent />;
		}
		const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null;

		return (
			<div>
				<Header />
				{planet}

				<button
					className="toggle-planet btn btn-warning btn-lg mb-4"
					onClick={this.toggleRandomPlanet}
				>
					Toggle Random Planet
				</button>
				<ErrorButton />
				<div className="row mb2">
					<div className="col-md-6">
						<ItemList />
					</div>
					<div className="col-md-6">
						<PersonDetails />
					</div>
				</div>
			</div>
		);
	}
}

export default App;
