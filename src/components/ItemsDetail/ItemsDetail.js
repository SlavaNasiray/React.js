import React, { Component } from "react";
import ErrorButton from "../error button";
import ErrorComponent from "../error-component";
import Spinner from "../spinner";
import ErrorBoundry from "../ErrorBoundry";

import "./ItemsDetail.css";

class ItemsDetail extends Component {
	state = {
		item: null,
		error: false,
		loading: false,
	};
	componentDidUpdate(prevProps) {
		if (prevProps.selectedItem ? this.props.selectedItem : null) {
			this.setState({ loading: true });
			this.props.getResource(this.props.selectedItem).then((item) => {
				this.setState({ item: item, loading: false });
			});
		}
	}

	render() {
		const { error, item, loading } = this.state;
		const { getMessage, getImage, children } = this.props;

		const ViewItemSec = (
			<ErrorBoundry>
				<ViewItem item={item} getImage={getImage} children={children} />
			</ErrorBoundry>
		);

		if (!item && !loading) return getMessage;

		const loadingMes = loading ? <Spinner /> : null;
		const errorMes = error ? <ErrorComponent /> : null;

		const content = !(loading || error) && item ? ViewItemSec : null;

		return (
			<div className="person-details card">
				{loadingMes}
				{content}
				{errorMes}
			</div>
		);
	}
}

const ViewItem = (props) => {
	const { getImage, item, children } = props;
	return (
		<>
			<img
				className="person-image"
				src={getImage(props.item)}
				alt={item.name}
			/>

			<div className="card-body">
				<h4>{item.name}</h4>
				<ul className="list-group list-group-flush">
					{React.Children.map(children, (child) => {
						return React.cloneElement(child, { item });
					})}
				</ul>
			</div>
			<ErrorButton />
		</>
	);
};

const f = (Comp) => {
	return class extends Component {
		componentDidMount() {
			console.log(this.props);
		}
		render() {
			return <Comp {...this.props} />;
		}
	};
};

export default f(ItemsDetail);
