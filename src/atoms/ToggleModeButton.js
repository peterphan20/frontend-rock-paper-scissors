import React from "react";

const ToggleModeButton = ({ hardMode, toggleHandler, text }) => {
	return (
		<>
			<div
				onClick={toggleHandler}
				className={`flex justify-center items-center gap-2 text-gray-200 text-base rounded-full py-1 px-4 lg:py-3 lg:px-6 ${
					!hardMode ? "bg-green-500" : "bg-red-600"
				}`}
			>
				<h1 className="text-base lg:text-xl">{text}</h1>
				{!hardMode ? <i className="fas fa-check"></i> : <i className="fas fa-times"></i>}
			</div>
		</>
	);
};

export default ToggleModeButton;
