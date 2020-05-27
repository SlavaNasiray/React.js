import React from "react";
import { withData, wihtChildFunction, withConnect } from "../hoc";
import ItemList from "../components/item-list";
import SwapiService from "../services/swapi-service";
import ItemDetailRoute from "../components/ItemDetailRoute";
import Record from "../components/Record";

const { getAllPeople, getAllStarships, getAllPlanets } = new SwapiService();

const renderedItem = (item) => `${item.name}`;

const RenderPersonaList = withData(
	wihtChildFunction(ItemList, renderedItem),
	getAllPeople
);

const RenderShipList = withData(
	wihtChildFunction(ItemList, renderedItem),
	getAllStarships
);

const RenderPlanetList = withData(
	wihtChildFunction(ItemList, renderedItem),
	getAllPlanets
);

const renderPersonaDetail = ({ itemId, swapiService }) => {
	const { getPerson, getPersonImage } = swapiService;
	return (
		<ItemDetailRoute
			selectedItem={itemId}
			getPerson={getPerson}
			getImage={getPersonImage}
			getMessage={"Нужно выбрать персонажа"}
		>
			<Record label={`Gender`} field={`gender`} />
			<Record label={`Birth Year`} field={`birthYear`} />
			<Record label={`Eye Color`} field={`eyeColor`} />
		</ItemDetailRoute>
	);
};

const RenderPersonaDetail = withConnect(renderPersonaDetail);

const renderShipDetail = ({ itemId, swapiService }) => {
	const { getStarship, getStarshipImage } = swapiService;
	return (
		<ItemDetailRoute
			selectedItem={itemId}
			getPerson={getStarship}
			getImage={getStarshipImage}
			getMessage={"Нужно выбрать корабль и расфигачить всё нафиг!!!"}
		>
			<Record label={`Model`} field={`model`} />
			<Record label={`Manufacturer`} field={`manufacturer`} />
			<Record label={`Cost`} field={`costInCredits`} />
			<Record label={`Length`} field={`length`} />
			<Record label={`Crew`} field={`crew`} />
			<Record label={`Passengers`} field={`passengers`} />
			<Record label={`CargoCapacity`} field={`cargoCapacity`} />
		</ItemDetailRoute>
	);
};

const RenderShipDetail = withConnect(renderShipDetail);

const renderPlanetDetail = ({ itemId, swapiService }) => {
	const { getPlanet, getPlanetImage } = swapiService;
	return (
		<ItemDetailRoute
			selectedItem={itemId}
			getPerson={getPlanet}
			getImage={getPlanetImage}
			getMessage={"Нужно выбрать планету"}
		>
			<Record label={`Population`} field={`population`} />
			<Record label={`Rotation period`} field={`rotationPeriod`} />
			<Record label={`Diametr`} field={`diameter`} />
		</ItemDetailRoute>
	);
};

const RenderPlanetDetail = withConnect(renderPlanetDetail);

export {
	RenderPersonaList,
	RenderPersonaDetail,
	RenderShipDetail,
	RenderShipList,
	RenderPlanetDetail,
	RenderPlanetList,
};
