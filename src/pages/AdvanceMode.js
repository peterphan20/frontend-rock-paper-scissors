import { useState } from "react";
import ToggleMode from "../molecules/ToggleMode";
import AdvanceModeButtons from "../organisms/AdvanceModeButtons";
import Scoreboard from "../organisms/Scoreboard";

const AdvanceMode = () => {
	const [score, setScore] = useState(0);

	return (
		<div className="flex flex-col justify-center items-center pt-5 px-5 mb-32 m-auto w-full h-full lg:mb-36">
			<Scoreboard score={score} />
			<ToggleMode />
			<AdvanceModeButtons score={score} setScore={setScore} />
		</div>
	);
};

export default AdvanceMode;
