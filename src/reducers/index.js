const initialState = {
	count: 0,
};

function reducer(state = initialState, action) {
	switch (action.type) {
		case "INC":
			return {
				...state,
				count: state.count + action.payload,
			};
		case "DEC":
			return {
                ...state,
				count: state.count - action.payload,
			};
		case "RES":
			return {
				count: 0,
			};

		default:
			return state;
	}
}

export default reducer;
