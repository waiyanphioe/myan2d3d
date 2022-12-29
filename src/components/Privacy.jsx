import React from "react";
import { Helmet } from "react-helmet-async";

const Privacy = (props) => {
	return (
		<>
			<Helmet>
				<title> {props.title} | Myan2D3D</title>
			</Helmet>
			<div>
				<h3>Privacy</h3>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
					Saepe neque, eligendi accusantium doloribus placeat ducimus
					eum esse repudiandae aspernatur libero temporibus
					dignissimos iure amet dicta blanditiis cumque consectetur
					error omnis.
				</p>
			</div>
		</>
	);
};

export default Privacy;
