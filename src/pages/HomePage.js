import { useState, useContext } from "react";
import AdvanceMode from "../pages/AdvanceMode";
import EasyMode from "../pages/EasyMode";
import { toggleHardModeContext } from "../context/GameModeProvider";
import Modal from "../molecules/Modal";

const HomePage = () => {
	const [showRule, setShowRule] = useState(false);
	const [hardMode] = useContext(toggleHardModeContext);

	return (
		<div className="font-body font-semibold bg-gradient-to-b from-primary-radial-gradient to-secondary-radial-gradient w-full h-full min-h-screen lg:px-24">
			{!hardMode ? <EasyMode /> : <AdvanceMode />}
			<div className="flex justify-center items-center w-full h-full lg:justify-end">
				<button
					className="text-gray-200 text-sm border-2 border-header-outline rounded-xl py-2 px-10 mt-28 tracking-widest lg:text-lg lg:px-12 lg:mt-40"
					onClick={() => setShowRule(true)}
				>
					RULES
				</button>
			</div>
			{showRule ? <Modal modalHandler={setShowRule} /> : null}
		</div>
	);
};

export default HomePage;
