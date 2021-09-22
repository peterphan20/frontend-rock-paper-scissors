import React from "react";
import EasyModeButtons from "../organisms/EasyModeButtons";
import Scoreboard from "../organisms/Scoreboard";

const EasyMode = () => {
	return (
		<div className="flex flex-col justify-center items-center">
			<Scoreboard />
			<EasyModeButtons />
		</div>
	);
};

export default EasyMode;
