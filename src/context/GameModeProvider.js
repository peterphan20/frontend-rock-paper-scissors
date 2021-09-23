import { useState, createContext } from "react";

export const toggleHardModeContext = createContext();

const GameModeProvider = ({ children }) => {
	const [hardMode, setHardMode] = useState(false);

	return (
		<toggleHardModeContext.Provider value={[hardMode, setHardMode]}>
			{children}
		</toggleHardModeContext.Provider>
	);
};

export default GameModeProvider;
