import React from "react";
import "./App.css";
import { inc, dec, res } from "../actions";
import { connect } from "react-redux";
import s from "./App.module.css";

const App = (props) => {
	return (
		<div className={s.box}>
			<div className="block">
				<span id="counter" className={s.block_text}>
					{props.count}
				</span>
			</div>
			<div className="buttons">
				<button
					id="plus"
					className="btn btn-plus"
					onClick={() => props.onInc(1)}
				>
					<img className="img-fluid" src="./plus.svg" alt="plus" />
				</button>
				<button
					id="minus"
					className="btn btn-minus"
					onClick={() => props.onDec(1)}
				>
					<img className="img-fluid" src="./minus.svg" alt="minus" />
				</button>
				<button
					id="reset"
					className="btn btn-reset"
					onClick={() => props.onRes(0)}
				>
					<img
						className="img-fluid"
						src="./Vector.svg"
						alt="Vector"
					/>
					<img
						className="img-fluid"
						src="./Vector-1.svg"
						alt="Vector-1"
					/>
				</button>
			</div>
		</div>
	);
};

const mapStateToProps = (store) => {
	return {
		count: store.count,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onInc: (num) => dispatch(inc(num)),
		onDec: (num) => dispatch(dec(num)),
		onRes: (num) => dispatch(res(num)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
