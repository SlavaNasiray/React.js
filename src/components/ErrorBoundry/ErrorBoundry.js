import React, { Component } from "react";
import ErrorComponent from "../error-component";
import "./ErrorBoundry.css";

class ErrorBoundry extends Component {
	state = { error: false };
	componentDidCatch() {
		this.setState({ error: true });
	}
	render() {
		if (this.state.error) {
			return <ErrorComponent />;
		}
		return this.props.children;
	}
}

export default ErrorBoundry;
