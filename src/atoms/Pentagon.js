import React from "react";
import pentagon from "../assets/bg-pentagon.svg";

const Triangle = () => {
	return (
		<div className="mx-auto mt-28 w-60 lg:w-full lg:mt-36">
			<div>
				<img src={pentagon} aria-label="triangle in the center" />
			</div>
		</div>
	);
};

export default Triangle;
