import { useState } from "react";
import AdvanceMode from "./pages/AdvanceMode";
import EasyMode from "./pages/EasyMode";

const App = () => {
	const [hardMode, setHardMode] = useState(false);
	return (
		<div className="font-body font-semibold bg-gradient-to-b from-primary-radial-gradient to-secondary-radial-gradient w-full h-full min-h-screen">
			{!hardMode ? (
				<EasyMode hardMode={hardMode} setHardMode={setHardMode} />
			) : (
				<AdvanceMode hardMode={hardMode} setHardMode={setHardMode} />
			)}
		</div>
	);
};

export default App;
