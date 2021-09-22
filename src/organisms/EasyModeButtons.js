import React from "react";
import Button from "../atoms/Button";
import Triangle from "../atoms/Triangle";

import paper from "../assets/icon-paper.svg";
import scissor from "../assets/icon-scissors.svg";
import rock from "../assets/icon-rock.svg";

const EasyModeButtons = () => {
	return (
		<div className="mt-52">
			<div className="relative">
				<Triangle />
				<Button
					src={paper}
					className="-translate-y-20"
					primaryColor="paper1"
					secondaryColor="paper2"
				/>
				<Button src={scissor} />
				<Button src={rock} />
			</div>
		</div>
	);
};

export default EasyModeButtons;
