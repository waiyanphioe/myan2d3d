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
				<h1 className="font-semibold text-9xl p-2">25</h1>
				<Link to={"/live-results"}>Updated : 2022/12/7 12:01:28</Link>
			</div>
			<div className="record-div">
				<Link to={"/2d-results"} className="text-center">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className=" w-9 h-9 p-1 rounded-full bg-white"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
						/>
					</svg>

					<span className="text-xs">2D Results</span>
				</Link>
				<Link to={"/3d-results"} className="text-center">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className=" w-9 h-9 p-1 rounded-full bg-white"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
						/>
					</svg>

					<span className="text-xs">3D Results</span>
				</Link>
				<Link to={"/closed-days"} className="text-center">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className=" w-9 h-9 p-1 rounded-full bg-white"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
						/>
					</svg>

					<span className="text-xs">Closed Days</span>
				</Link>
				<Link to={"/super-gift"} className="text-center">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className=" w-9 h-9 p-1 rounded-full bg-white"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
						/>
					</svg>
					<span className="text-xs">Super Gift</span>
				</Link>
			</div>
			<div className="result-div">
				<div className="">11:00 AM</div>
				<div className=" h-[1px] bg-gray-200"></div>
				<div className=" flex">
					<div className="">
						<span className=" text-xs">Set</span>
						<h4 className=" text-base">47762.45</h4>
					</div>
					<div className="">
						<span className=" text-xs">Value</span>
						<h4 className=" text-base">7256.34</h4>
					</div>
					<div className="">
						<h2
							className=" text-2xl font-semibold text-[#433b24]"
							title="2D"
						>
							24
						</h2>
					</div>
				</div>
			</div>
			<div className="m-[10px]">
				<img src="./adsj.gif" alt="" className=" w-full" />
			</div>
			<div className="md-div">
				<div className="flex tes">
					<div className="">9:30 AM</div>
					<div className="">
						<span className="text-xs">Modern</span>
						<h4 className="text-base">36783.44</h4>
					</div>
					<div className="">
						<span className="text-xs">Internet</span>
						<h4 className="text-base">36783.44</h4>
					</div>
				</div>
				<div className="h-[1px] bg-gray-200"></div>
				<div className="flex tes">
					<div className="">2:00 PM</div>
					<div className="">
						<span className="text-xs">Modern</span>
						<h4 className="text-base">36783.44</h4>
					</div>
					<div className="">
						<span className="text-xs">Internet</span>
						<h4 className="text-base">36783.44</h4>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Hello;
