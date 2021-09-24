import { useState } from "react";
import Modal from "../molecules/Modal";
import ToggleMode from "../molecules/ToggleMode";
import AdvanceModeButtons from "../organisms/AdvanceModeButtons";
import Scoreboard from "../organisms/Scoreboard";

const AdvanceMode = () => {
	const [showAdvanceRules, setShowAdvanceRules] = useState(false);
	const [score, setScore] = useState(0);

	return (
		<div className="relative flex flex-col justify-center items-center pt-5 px-5 m-auto w-full h-full">
			{showAdvanceRules ? <Modal modalHandler={setShowAdvanceRules} /> : null}
			<Scoreboard score={score} />
			<ToggleMode />
			<AdvanceModeButtons score={score} setScore={setScore} />
			<button
				className="text-gray-200 text-sm border-2 border-header-outline rounded-xl py-2 px-10 tracking-widest"
				onClick={() => setShowAdvanceRules(true)}
			>
				RULES
			</button>
		</div>
	);
};

export default AdvanceMode;
