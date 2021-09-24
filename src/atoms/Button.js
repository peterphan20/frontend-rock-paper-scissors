import { useContext } from "react";
import { toggleHardModeContext } from "../context/GameModeProvider";

const Button = ({ src, className = " ", clickHandler, label, dataValue }) => {
	const [hardMode] = useContext(toggleHardModeContext);

	return (
		<div
			className={`${className} flex justify-center items-center bg-gradient-to-b from-primary-${dataValue} to-secondary-${dataValue} shadow-outter-${dataValue} rounded-full ${
				!hardMode ? "w-28 h-28 " : "w-24 h-24"
			} z-10`}
			onClick={clickHandler}
			data-value={dataValue}
		>
			<div
				className={`flex justify-center items-center bg-gray-200 rounded-full shadow-inner-button p-6 w-20 h-20 z-20`}
				data-value={dataValue}
			>
				<img src={src} aria-label={`${label} icon`} data-value={dataValue} />
			</div>
		</div>
	);
};

export default Button;
