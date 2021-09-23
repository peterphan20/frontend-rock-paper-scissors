import { useContext } from "react";
import ToggleModeButton from "../atoms/ToggleModeButton";
import { toggleHardModeContext } from "../context/GameModeProvider";

const ToggleMode = () => {
	const [hardMode, setHardMode] = useContext(toggleHardModeContext);

	return (
		<div className="flex items-center justify-center w-full h-full">
			{!hardMode ? (
				<ToggleModeButton
					toggleHandler={() => setHardMode(true)}
					text="Easy Mode"
					hardMode={hardMode}
				/>
			) : (
				<ToggleModeButton
					toggleHandler={() => setHardMode(false)}
					text="Hard Mode"
					hardMode={hardMode}
				/>
			)}
		</div>
	);
};

export default ToggleMode;
