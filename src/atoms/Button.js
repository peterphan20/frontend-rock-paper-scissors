import React from "react";

const Button = ({ src, className = " ", clickHandler, label, dataValue }) => {
	const renderGameClasses = (shape) => {
		switch (shape) {
			case "scissors":
				return "from-primary-scissors to-secondary-scissors shadow-outer-scissors";
			case "paper":
				return "from-primary-paper to-secondary-paper shadow-outer-paper";
			case "rock":
				return "from-primary-rock to-secondary-rock shadow-outer-rock";
			case "lizard":
				return "from-primary-lizard to-secondary-lizard shadow-outer-lizard";
			case "spock":
				return "from-primary-spock to-secondary-spock shadow-outer-spock";
			default:
				return "";
		}
	};

	return (
		<div
			className={`${className} absolute flex justify-center items-center bg-gradient-to-b ${renderGameClasses(
				dataValue
			)} rounded-full mx-auto w-28 h-28 lg:w-32 lg:h-32 z-10`}
			onClick={clickHandler}
			data-value={dataValue}
		>
			<div
				className={`flex justify-center items-center bg-gray-200 rounded-full shadow-inner-button p-6 w-20 h-20 z-20 lg:w-24 lg:h-24`}
				data-value={dataValue}
			>
				<img src={src} aria-label={`${label} icon`} data-value={dataValue} />
			</div>
		</div>
	);
};

export default Button;
