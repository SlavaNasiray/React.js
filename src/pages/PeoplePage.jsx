import React from "react";
import ItemList from "../components/item-list";
import PersonDetails from "../components/person-details";
import SwapiService from "../services/swapi-service";
import Spinner from "../spinner";
import ErrorComponent from "../error-component";

class PeoplesPage extends React.Component {
	swapiService = new SwapiService();

	state = {
		selectedItem: null,
		error: false,
		itemsPeoples: [],
		loading: true,
	};

	componentDidCatch(error) {
		console.log(error);
		this.setState({ error: true });
	}

	onSelectedItem = (id) => {
		this.setState({ selectedItem: id });
	};

	componentDidMount() {
		this.swapiService.getAllPeople().then((data) => {
			this.setState({ itemsPeoples: data });
		});
	}

	componentWillUpdate(prevProps) {
		if (prevProps.selectedItem ? this.props.selectedItem : null) {
			this.swapiService
				.getPerson(this.props.selectedItem)
				.then((item) => {
					this.setState({ item: item, loading: false });
				});
		}
	}

	render() {
		const { itemsPeoples, error, loading } = this.state;

		const errorMes = error ? <ErrorComponent /> : null;
		const loadingMes = loading ? <Spinner /> : null;
		return (
			<>
				{loadingMes}
				<div className="row mb2">
					<div className="col-md-6">
						<ItemList
							onSelectedItem={this.onSelectedItem}
							itemsPeoples={itemsPeoples}
						/>
					</div>
					<div className="col-md-6">
						<PersonDetails selectedItem={this.state.selectedItem} />
					</div>
				</div>
				{errorMes}
			</>
		);
	}
}

export default PeoplesPage;
