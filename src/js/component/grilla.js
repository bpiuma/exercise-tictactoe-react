import React, { useState } from "react";

import PropTypes from "prop-types";

export function Grilla(props) {
	// const [turno, setTurno] = useState("X");

	// const [grilla, setGrilla] = useState(["", "", "", "", "", "", "", "", ""]);

	// function marcar(turno, pos) {
	// 	if (grilla[pos] == "") {
	// 		let grillaAux = grilla;
	// 		grillaAux[pos] = turno;
	// 		setGrilla(grillaAux);
	// 		if (turno == "X") {
	// 			setTurno("O");
	// 		} else {
	// 			setTurno("X");
	// 		}
	// 	}
	// }

	return (
			<div className="container grilla">
				<div className="row">
					<div
						className="col-4 cuadrado border boder-secundary"
						onClick={() => marcar(turnoActual, 0)}>
						{grilla[0]}
					</div>
					<div
						className="col-4 cuadrado border-left border-right border-secundary"
						onClick={() => marcar(turnoActual, 1)}>
						{grilla[1]}
					</div>
					<div
						className="col-4 cuadrado"
						onClick={() => marcar(turnoActual, 2)}>
						{grilla[2]}
					</div>
				</div>
				<div className="row">
					<div
						className="col-4 cuadrado border-top border-bottom border-secundary"
						onClick={() => marcar(turnoActual, 3)}>
						{grilla[3]}
					</div>
					<div
						className="col-4 cuadrado border border-secundary"
						onClick={() => marcar(turnoActual, 4)}>
						{grilla[4]}
					</div>
					<div
						className="col-4 cuadrado border-top border-bottom border-secundary"
						onClick={() => marcar(turnoActual, 5)}>
						{grilla[5]}
					</div>
				</div>
				<div className="row">
					<div
						className="col-4 cuadrado"
						onClick={() => marcar(turnoActual, 6)}>
						{grilla[6]}
					</div>
					<div
						className="col-4 cuadrado border-left border-right border-secundary"
						onClick={() => marcar(turnoActual, 7)}>
						{grilla[7]}
					</div>
					<div
						className="col-4 cuadrado"
						onClick={() => marcar(turnoActual, 8)}>
						{grilla[8]}
					</div>
				</div>
			</div>
	);
}

// Cuadrado.propTypes = {
// 	turno: PropTypes.string,
// 	posicion: PropTypes.number
// };
