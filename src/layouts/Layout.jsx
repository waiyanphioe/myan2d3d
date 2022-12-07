import React from "react";
import { Helmet } from "react-helmet-async";
import { Navigate, Outlet, useNavigate } from "react-router-dom";

const Layout = () => {
	return (
		<div className="">
			<Helmet>
				<title>Live Results | Myan2D3D</title>
			</Helmet>
			<header className="">
				<nav className="">Back</nav>
			</header>
			<Outlet />
		</div>
	);
};

export default Layout;
