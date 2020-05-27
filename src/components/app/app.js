import React from "react";

import Header from "../header";
import RandomPlanet from "../random-planet";
import ErrorButton from "../error-button";
import ErrorComponent from "../error-component";
import { SwapiProvider } from "../../context";
import PeoplePage from "../../pages/PeoplePage";
import PersonPage from "../../pages/PersonPage";
import SwapiService from "../../services/swapi-service";
import PlanetPage from "../../pages/PlanetPage";
import AboutPlanetPage from "../../pages/AboutPlanetPage";
import ShipPage from "../../pages/ShipPage";
import StarShipPage from "../../pages/StarShipPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./app.css";

const swapiService = new SwapiService();

class App extends React.Component {
	state = {
		showRandomPlanet: true,
		error: false,
	};

	toggleRandomPlanet = () => {
		this.setState((state) => {
			return {
				showRandomPlanet: !state.showRandomPlanet,
			};
		});
	};

	componentDidCatch(error) {
		console.error(error);
		this.setState({ error: true });
	}
	render() {
		const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null;
		if (this.state.error) {
			return <ErrorComponent />;
		}
		const RandomBlock = () => {
			return (
				<>
					{planet}
					<button
						className="toggle-planet btn btn-warning btn-lg mb-4"
						onClick={this.toggleRandomPlanet}
					>
						Toggle Random Planet
					</button>
					<ErrorButton />
				</>
			);
		};
		return (
			<SwapiProvider value={swapiService}>
				<Router>
					<Header />
					<Switch>
						<Route path="/" component={RandomBlock} exact />
						<Route
							path="/welcome"
							render={() => <h1>Welcome</h1>}
						/>
						<Route path="/people" component={PeoplePage} exact />
						<Route path="/people/:id" component={PersonPage} />
						<Route path="/planet" component={PlanetPage} exact />
						<Route path="/planet/:id" component={AboutPlanetPage} />
						<Route path="/ship" component={ShipPage} exact />
						<Route path="/ship/:id" component={StarShipPage} />
						<Route render={() => <h1>Page not found</h1>} />
					</Switch>
				</Router>
			</SwapiProvider>
		);
	}
}

export default App;
