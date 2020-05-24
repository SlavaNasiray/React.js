import React, { Component } from "react";
import Spinner from "../components/spinner";
import ErrorComponent from "../components/error-component";
import { SwapiConsumer } from "../context";
const withData = (View, propsFunc) => {
	return class extends Component {
		state = {
			data: [],
			loading: true,
			error: false,
		};

		componentDidMount() {
			propsFunc().then(this.onDataLoaded).catch(this.onError);
		}

		onDataLoaded = (data) => {
			this.setState({ data, loading: false });
		};

		onError = () => {
			this.setState({
				error: true,
				loading: false,
			});
		};

		render() {
			const { data, loading, error } = this.state;

			if (loading) {
				return <Spinner />;
			}

			if (error) {
				return <ErrorComponent />;
			}

			return <View {...this.props} data={data} />;
		}
	};
};

const wihtChildFunction = (Wrapped, wrapFunc) => {
	return (props) => <Wrapped {...props}>{wrapFunc}</Wrapped>;
};

const withConnect = (Wrapped) => {
	return (props) => {
		return (
			<SwapiConsumer>
				{( value ) => {
					console.log(value);
					return <Wrapped {...props} swapiService={value} />;
				}}
			</SwapiConsumer>
		);
	};
};

export { withData, wihtChildFunction, withConnect };
