import React from "react";
import pentagon from "../assets/bg-pentagon.svg";

const Triangle = () => {
	return (
		<div className="m-auto w-64 h-full">
			<div className="flex justify-center items-center">
				<img src={pentagon} aria-label="triangle in the center" />
			</div>
		</div>
	);
};

export default Triangle;
