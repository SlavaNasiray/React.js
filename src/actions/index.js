const inc = (num) => {
	return {
		type: "INC",
		payload: num,
	};
};

const dec = (num) => {
	return {
		type: "DEC",
		payload: num,
	};
};

const res = (num) => {
	return {
		type: "RES",
		payload: 0,
	};
};

export { inc, dec, res };
