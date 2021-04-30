import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	return (
		<div className="container contenedor">
			<div className="container">
				<h2 className="texto p-3">Tic Tac Toe in React.js</h2>
				<h4 className="texto">It is X Turn!</h4>
			</div>
			<div className="container grilla">
				<div className="row">
					<div className="col-4 cuadrado">X</div>
					<div className="col-4 cuadrado border-left border-right border-secundary">
						X
					</div>
					<div className="col-4 cuadrado">X</div>
				</div>
				<div className="row">
					<div className="col-4 cuadrado border-top border-bottom border-secundary">
						O
					</div>
					<div className="col-4 cuadrado border border-secundary">
						O
					</div>
					<div className="col-4 cuadrado border-top border-bottom border-secundary">
						O
					</div>
				</div>
				<div className="row">
					<div className="col-4 cuadrado">X</div>
					<div className="col-4 cuadrado border-left border-right border-secundary">
						X
					</div>
					<div className="col-4 cuadrado">X</div>
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
