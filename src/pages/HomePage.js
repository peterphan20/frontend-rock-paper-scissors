import { useContext } from "react";
import AdvanceMode from "../pages/AdvanceMode";
import EasyMode from "../pages/EasyMode";
import { toggleHardModeContext } from "../context/GameModeProvider";

const HomePage = () => {
	const [hardMode] = useContext(toggleHardModeContext);

	return (
		<div className="font-body font-semibold bg-gradient-to-b from-primary-radial-gradient to-secondary-radial-gradient w-full h-full min-h-screen lg:px-72">
			{!hardMode ? <EasyMode /> : <AdvanceMode />}
		</div>
	);
};

export default HomePage;
