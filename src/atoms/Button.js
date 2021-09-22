import React from "react";

const Button = ({ src, className = " ", primaryColor = " ", secondaryColor = " ", alt }) => {
	return (
		<div className={`${className} absolute w-24 h-24`}>
			<div
				className={`flex justify-center items-center text-dark-text bg-gradient-to-b from-radial-${primaryColor} to-radial-${secondaryColor} rounded-full p-6 w-full h-full`}
			>
				<img src={src} alt={alt} />
			</div>
		</div>
	);
};

export default Button;
