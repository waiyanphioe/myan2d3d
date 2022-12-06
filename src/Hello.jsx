import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

function Hello() {
	return (
		<div className="HelloL">
			<Helmet prioritizeSeoTags>
				<title>Live | Myan2D3D</title>
				<link rel="notImportant" href="https://www.chipotle.com" />
				<meta name="whatever" value="notImportant" />
				<link rel="canonical" href="https://www.tacobell.com" />
				<meta property="og:title" content="A very important title" />
			</Helmet>
			<div className=" text-center">
				<h1 className="font-semibold text-9xl m-2">25</h1>
				<span>Updated : 2022/12/7 12:98</span>
			</div>
			<div className="record-div">
				<Link to={"/2d-results"} className="hiu">
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
							d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
						/>
					</svg>
					<span className=" w-28 text-xs">2D Results</span>
				</Link>
			</div>
			<div className="result-div">
				<div className="">11:00 AM</div>
				<div className="hr"></div>
				<div className="">
					<div className="">26768.34</div>
					<div className="">73672.56</div>
					<div className="">42</div>
				</div>
			</div>
		</div>
	);
}

export default Hello;
