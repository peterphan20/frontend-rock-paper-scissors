import React from "react";
import GameModeProvider from "./context/GameModeProvider";
import HomePage from "./pages/HomePage";

const App = () => {
	return (
		<GameModeProvider>
			<HomePage />
		</GameModeProvider>
	);
};

export default App;
