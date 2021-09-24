import { useContext } from "react";
import easyModeRules from "../assets/image-rules.svg";
import advanceModeRules from "../assets/image-rules-bonus.svg";
import { toggleHardModeContext } from "../context/GameModeProvider";

const Modal = ({ modalHandler }) => {
	const [hardMode] = useContext(toggleHardModeContext);
	return (
		<div
			className="grid place-items-center fixed top-0 left-0 w-full h-full z-20"
			onClick={() => modalHandler(false)}
		>
			<div
				onClick={(e) => e.stopPropagation()}
				className="relative flex flex-col justify-center items-center bg-gray-200 text-gray-900 w-full h-full z-20"
			>
				<h1 className="text-3xl font-bold text-dark-text mb-8">RULES</h1>
				<img
					src={!hardMode ? easyModeRules : advanceModeRules}
					aria-label={!hardMode ? "rules for easy mode" : "rules for hard mode"}
				/>
				<button className="text-gray-400 text-2xl pt-24" onClick={() => modalHandler(false)}>
					<i className="fas fa-times"></i>
				</button>
			</div>
		</div>
	);
};

export default Modal;
