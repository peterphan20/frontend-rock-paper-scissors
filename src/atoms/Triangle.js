import React from "react";
import triangle from "../assets/bg-triangle.svg";

const Triangle = () => {
	return (
		<div className="m-auto w-60">
			<div className="flex justify-center items-center scale-75">
				<img src={triangle} aria-label="triangle in the center" />
			</div>
		</div>
	);
};

export default Triangle;
