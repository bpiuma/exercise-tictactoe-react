import React from "react";

import PropTypes from "prop-types";

export function DesplegarMensaje(props) {
	console.log("entra a desplegar mensaje");
	switch (props.gan) {
		case "X":
			return <h4 className="texto text-success"> X Wins! </h4>;
		case "O":
			return <h4 className="texto text-success"> O Wins! </h4>;
		case "C":
			return <h4 className="texto text-danger"> Game Over! </h4>;
		default:
			return <h4 className="texto"> It is {props.turno} Turn! </h4>;
	}
}

DesplegarMensaje.propTypes = {
	turno: PropTypes.string,
	gan: PropTypes.string
};
