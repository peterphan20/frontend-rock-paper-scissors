import React from "react";
import pentagon from "../assets/bg-pentagon.svg";

const Triangle = () => {
	return (
		<div className="mx-auto w-60 lg:w-full">
			<div>
				<img src={pentagon} aria-label="triangle in the center" />
			</div>
		</div>
	);
};

export default Triangle;
