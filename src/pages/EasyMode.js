import { useState } from "react";
import Modal from "../molecules/Modal";
import ModeChange from "../molecules/ModeChange";
import EasyModeButtons from "../organisms/EasyModeButtons";
import Scoreboard from "../organisms/Scoreboard";

const EasyMode = ({ hardMode, setHardMode }) => {
	const [showEasyRules, setShowEasyRules] = useState(false);
	return (
		<div className="relative flex flex-col justify-center items-center pt-5 px-5 m-auto w-full h-full">
			{showEasyRules ? <Modal modalHandler={setShowEasyRules} hardMode={hardMode} /> : null}
			<Scoreboard />
			<ModeChange setHardMode={setHardMode} />
			<EasyModeButtons />
			<button
				className="text-gray-100 text-sm border-2 border-header-outline rounded-xl py-2 px-10 tracking-widest"
				onClick={() => setShowEasyRules(true)}
			>
				RULES
			</button>
		</div>
	);
};

export default EasyMode;
