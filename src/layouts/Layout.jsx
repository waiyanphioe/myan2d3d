import React from "react";
import { Outlet } from "react-router-dom";

const Layout = (props) => {
	return (
		<div className="">
			<header className=" sticky top-0 z-50 backdrop-blur-sm">
				<nav className="">
					<button
						onClick={() => {
							history.back();
						}}
						className=" p-2"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-6 h-6"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
							/>
						</svg>
					</button>
				</nav>
			</header>
			<Outlet />
		</div>
	);
};

export default Layout;
