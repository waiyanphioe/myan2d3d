import React from "react";
import { Helmet } from "react-helmet-async";

const TwoDresult = (props) => {
	return (
		<>
			<Helmet>
				<title>{props.title} | Myan2D3D</title>
			</Helmet>
		</>
	);
};

export default TwoDresult;
