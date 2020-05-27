import React from "react";
import { withRouter } from "react-router-dom";
import { RenderShipDetail } from "../../SwService";
import "./StarShipPage.css";

const StarShipPage = (props) => {
	const { match } = props;
	const { id } = match.params;
	console.log(id)
	return <RenderShipDetail itemId={id} />;
};

export default withRouter(StarShipPage);
