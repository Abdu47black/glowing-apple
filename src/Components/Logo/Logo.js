import { Tilt } from "react-tilt";
import React from "react";
import brain from "./brain.png";
import "./Logo.css";

const Logo = () => {
	return (
		<div className="ma4 mt0">
			<Tilt
				ClassName="Tilt br2 Shadow-2"
				option={{ max: 55 }}
				style={{ height: 150, width: 150 }}
			>
				<div className="Tilt">
					<img style={{ paddingTop: "6px" }} alt="logo" src={brain} />
				</div>
			</Tilt>
		</div>
	);
};
export default Logo;
