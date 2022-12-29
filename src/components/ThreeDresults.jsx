import React from "react";
import { Helmet } from "react-helmet-async";

const ThreeDresults = (props) => {
	return (
		<>
			<Helmet>
				<title> {props.title} | Myan2D3D</title>
			</Helmet>
			<div className="">3d</div>
		</>
	);
};

export default ThreeDresults;
