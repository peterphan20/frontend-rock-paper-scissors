import React from "react";
import Button from "../atoms/Button";
import Triangle from "../atoms/Triangle";

import paper from "../assets/icon-paper.svg";
import scissor from "../assets/icon-scissors.svg";
import rock from "../assets/icon-rock.svg";

const EasyModeButtons = () => {
	return (
		<div className="mb-24">
			<Triangle />
			<Button
				src={paper}
				className="bg-gradient-to-b from-primary-paper to-secondary-paper shadow-outter-paper top-48 left-8"
				label="easy mode paper icon"
			/>
			<Button
				src={scissor}
				className="bg-gradient-to-b from-primary-scissor to-secondary-scissor shadow-outter-scissor top-48 left-56"
				label="easy mode scissor icon"
			/>
			<Button
				src={rock}
				className="bg-gradient-to-b from-primary-rock to-secondary-rock shadow-outter-rock top-96 left-32"
				label="easy mode rock icon"
			/>
		</div>
	);
};

export default EasyModeButtons;
