import React from "react";
import { Outlet } from "react-router-dom";

const Layout = (props) => {
	return (
		<div className="">
			<header className="">
				<nav className="">
					<button
						onClick={() => {
							history.back();
						}}
					>
						Back
					</button>
				</nav>
			</header>
			<Outlet />
		</div>
	);
};

export default Layout;
