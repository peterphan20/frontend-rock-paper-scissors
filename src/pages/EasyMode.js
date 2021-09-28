import { useState } from "react";
import ToggleMode from "../molecules/ToggleMode";
import EasyModeButtons from "../organisms/EasyModeButtons";
import Scoreboard from "../organisms/Scoreboard";

const EasyMode = () => {
	const [score, setScore] = useState(0);

	return (
		<div className="flex flex-col justify-center items-center pt-5 px-5 mb-10 m-auto w-full h-full lg:mb-36">
			<Scoreboard score={score} />
			<ToggleMode />
			<EasyModeButtons score={score} setScore={setScore} />
		</div>
	);
};

export default EasyMode;
