import React, { useState, useEffect } from "react";

//import { Grilla } from "./grilla.js";

//let ganador = "";

export function Home() {
	const [turnoActual, setTurnoActual] = useState("X");

	const [grilla, setGrilla] = useState(["", "", "", "", "", "", "", "", ""]);

	//este estado muestra si hay ganador ("X" o "O", o si la grilla esta completa con "C")
	//const [ganador, setGanador] = useState("");
	const [ganador, setGanador] = useState("");

	//verificamos si el cuadrado esta vacio, marcamos con el simbolo correspondiente y verificamos si se terminó el juego
	//si el juego no se terminó, cambiamos el turno
	function marcar(i) {
		if (grilla[i] == "") {
			let grillaAux = grilla;
			grillaAux[i] = turnoActual;
			setGrilla(grillaAux);
			console.log(grilla);
			verificarGrilla();
			switch (ganador) {
				case "X":
				case "O":
				case "C":
				default: {
					if (turnoActual == "X") {
						setTurnoActual("O");
					} else {
						setTurnoActual("X");
					}
				}
			}
		}
	}

	// useEffect(() => {
	//     verificarGrilla();
	// }, [ganador]);

	//verificamos si hay ganador o si se completo la grilla
	function verificarGrilla() {
		//verificamos filas
		for (let i = 0; i <= 6; i = i + 3) {
			if (
				grilla[i] != "" &&
				grilla[i] == grilla[i + 1] &&
				grilla[i] == grilla[i + 2]
			) {
				setGanador(turnoActual);
				//ganador = turnoActual;
			}
		}
		//verificamos columnas
		for (let i = 0; i <= 2; i++) {
			if (
				grilla[i] != "" &&
				grilla[i] == grilla[i + 3] &&
				grilla[i] == grilla[i + 6]
			) {
				setGanador(turnoActual);
				//ganador = turnoActual;
			}
		}
		//verificamos diagonales
		if (
			(grilla[0] != "" &&
				grilla[0] == grilla[4] &&
				grilla[0] == grilla[8]) ||
			(grilla[2] != "" &&
				grilla[2] == grilla[4] &&
				grilla[2] == grilla[6])
		) {
			setGanador(turnoActual);
			//ganador = turnoActual;
		}
		//verificamos si se completo la grilla
		if (ganador == "") {
			let aux = true;
			for (let i = 0; i <= 8; i++) {
				if (grilla[i] == "") {
					aux = false;
				}
			}
			if (aux) {
				setGanador("C");
				//ganador = "C";
			}
		}
		//console.log("El ganador es: " + ganador);
	}

	const desplegarMensaje = () => {
		switch (ganador) {
			case "X":
			case "O":
			case "C":
			default: {
				if (turnoActual == "X") {
					setTurnoActual("O");
				} else {
					setTurnoActual("X");
				}
				return <h4 className="texto"> It is {turnoActual} Turn! </h4>;
			}
		}
	};

	return (
		<div className="container contenedor">
			<div className="container">
				<h2 className="texto p-3">Tic Tac Toe in React.js</h2>
				{/* <h4 className="texto">It is {turnoActual} Turn!</h4> */}
				{desplegarMensaje}
			</div>
			<div className="container d-flex justify-content-center mt-4">
				<button
					type="button"
					className="btn btn-light btnStartOver p-0"
					onClick={() =>
						setGrilla(["", "", "", "", "", "", "", "", ""])
					}>
					Start Over
				</button>
			</div>
			<div className="container grilla">
				<div className="row">
					<div className="col-4 cuadrado" onClick={() => marcar(0)}>
						{grilla[0]}
					</div>
					<div
						className="col-4 cuadrado border-left border-right border-secundary"
						onClick={() => marcar(1)}>
						{grilla[1]}
					</div>
					<div className="col-4 cuadrado" onClick={() => marcar(2)}>
						{grilla[2]}
					</div>
				</div>
				<div className="row">
					<div
						className="col-4 cuadrado border-top border-bottom border-secundary"
						onClick={() => marcar(3)}>
						{grilla[3]}
					</div>
					<div
						className="col-4 cuadrado border border-secundary"
						onClick={() => marcar(4)}>
						{grilla[4]}
					</div>
					<div
						className="col-4 cuadrado border-top border-bottom border-secundary"
						onClick={() => marcar(5)}>
						{grilla[5]}
					</div>
				</div>
				<div className="row">
					<div className="col-4 cuadrado" onClick={() => marcar(6)}>
						{grilla[6]}
					</div>
					<div
						className="col-4 cuadrado border-left border-right border-secundary"
						onClick={() => marcar(7)}>
						{grilla[7]}
					</div>
					<div className="col-4 cuadrado" onClick={() => marcar(8)}>
						{grilla[8]}
					</div>
				</div>
			</div>
		</div>
	);
}

// PANTALLA INICIAL
// <div className="container contenedor">
// 	<div className="container">
// 		<h2 className="texto p-3">Tic Tac Toe in React.js</h2>
// 		<h4 className="texto">Pick A Weapon</h4>
// 	</div>
// 	<div className="container centro col-10 bg-dark">
// 		<h5 className="texto pt-3">CHOOSE YOUR WEAPON</h5>
// 		<div className="d-flex justify-content-center">
// 			<div>
// 				<input
// 					type="text"
// 					placeholder="Player 1 username"></input>
// 			</div>
// 			<div>
// 				<input
// 					type="text"
// 					placeholder="Player 2 username"></input>
// 			</div>
// 		</div>
// 		<div className="d-flex justify-content-center mt-1 mb-4">
// 			<button className="btnX d-flex justify-content-center align-items-center m-2">
// 				X
// 			</button>
// 			<button className="btnO d-flex justify-content-center align-items-center m-2">
// 				O
// 			</button>
// 		</div>
// 	</div>
// </div>
