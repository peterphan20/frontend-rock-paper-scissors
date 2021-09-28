import React from "react";
import triangle from "../assets/bg-triangle.svg";

const Triangle = () => {
	return (
		<div className="mx-auto w-60 lg:w-full">
			<div>
				<img src={triangle} aria-label="triangle in the center" />
			</div>
		</div>
	);
};

export default Triangle;
