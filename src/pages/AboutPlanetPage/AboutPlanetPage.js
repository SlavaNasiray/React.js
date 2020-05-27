import React from "react";
import { withRouter } from "react-router-dom";
import { RenderPlanetDetail } from "../../SwService";
import "./AboutPlanetPage.css";

const AboutPlanetPage = (props) => {
	const { match } = props;
	const { id } = match.params;
	console.log(id)
	return <RenderPlanetDetail itemId={id} />;
};

export default withRouter(AboutPlanetPage);
