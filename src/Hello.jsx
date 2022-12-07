import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import TwoDitem from "./components/TwoDitem";

function Hello() {
	const [data, setData] = useState({});
	const [loaded, setLoaded] = useState(false);
	useEffect(() => {
		fetch("https://luke.2dboss.com/api/luke/twod-result-live")
			.then((res) => res.json())
			.then(
				(result) => {
					setData(result.data);
					setLoaded(true);
				},
				(error) => {}
			);
	}, []);
	return (
		<div className="HelloL">
			<Helmet>
				<title>Live | Myan2D3D</title>
				<link rel="notImportant" href="https://www.chipotle.com" />
				<meta name="whatever" value="notImportant" />
				<link rel="canonical" href="https://www.tacobell.com" />
				<meta property="og:title" content="A very important title" />
			</Helmet>
			<div className=" text-center">
				<h1 className="txet-sh font-semibold text-9xl p-2">
					{loaded ? data.live : "--"}
				</h1>
				<Link to={"/live-results"} className=" text-sm text-green-700">
					Updated : 2022/12/7 12:01:28
				</Link>
			</div>
			<div className="flex m-[10px] justify-around">
				<Link to={"/2d-results"} className="flex items-center flex-col">
					<svg
						stroke="currentColor"
						fill="currentColor"
						strokeWidth="0"
						viewBox="0 0 16 16"
						height="20px"
						width="20px"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M13 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h10zM3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3z"></path>
						<path d="M5.5 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm8 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"></path>
					</svg>

					<span className="text-xs">2D Results</span>
				</Link>
				<Link to={"/3d-results"} className="flex items-center flex-col">
					<svg
						stroke="currentColor"
						fill="currentColor"
						strokeWidth="0"
						viewBox="0 0 16 16"
						height="20px"
						width="20px"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M13 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h10zM3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3z"></path>
						<path d="M5.5 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm8 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-4-4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"></path>
					</svg>

					<span className="text-xs">3D Results</span>
				</Link>
				<Link
					to={"/closed-days"}
					className="flex items-center flex-col"
				>
					<svg
						stroke="currentColor"
						fill="currentColor"
						strokeWidth="0"
						viewBox="0 0 16 16"
						height="20px"
						width="20px"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M6.445 11.688V6.354h-.633A12.6 12.6 0 0 0 4.5 7.16v.695c.375-.257.969-.62 1.258-.777h.012v4.61h.675zm1.188-1.305c.047.64.594 1.406 1.703 1.406 1.258 0 2-1.066 2-2.871 0-1.934-.781-2.668-1.953-2.668-.926 0-1.797.672-1.797 1.809 0 1.16.824 1.77 1.676 1.77.746 0 1.23-.376 1.383-.79h.027c-.004 1.316-.461 2.164-1.305 2.164-.664 0-1.008-.45-1.05-.82h-.684zm2.953-2.317c0 .696-.559 1.18-1.184 1.18-.601 0-1.144-.383-1.144-1.2 0-.823.582-1.21 1.168-1.21.633 0 1.16.398 1.16 1.23z"></path>
						<path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"></path>
					</svg>

					<span className="text-xs">Closed Days</span>
				</Link>
				<Link to={"/super-gift"} className="flex items-center flex-col">
					<svg
						stroke="currentColor"
						fill="currentColor"
						strokeWidth="0"
						viewBox="0 0 16 16"
						height="20px"
						width="20px"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M3 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0v.006c0 .07 0 .27-.038.494H15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 14.5V7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2.038A2.968 2.968 0 0 1 3 2.506V2.5zm1.068.5H7v-.5a1.5 1.5 0 1 0-3 0c0 .085.002.274.045.43a.522.522 0 0 0 .023.07zM9 3h2.932a.56.56 0 0 0 .023-.07c.043-.156.045-.345.045-.43a1.5 1.5 0 0 0-3 0V3zM1 4v2h6V4H1zm8 0v2h6V4H9zm5 3H9v8h4.5a.5.5 0 0 0 .5-.5V7zm-7 8V7H2v7.5a.5.5 0 0 0 .5.5H7z"></path>
					</svg>
					<span className="text-xs">Super Gift</span>
				</Link>
			</div>
			<TwoDitem
				time="11:00 PM"
				set={loaded ? data.set_1100 : "-,---.--"}
				val={loaded ? data.val_1100 : "--,---.--"}
				result={loaded ? data.result_1100 : "--"}
			/>
			<TwoDitem
				time="12:01 PM"
				set={loaded ? data.set_1200 : "-,---.--"}
				val={loaded ? data.val_1200 : "--,---.--"}
				result={loaded ? data.result_1200 : "--"}
			/>
			<TwoDitem
				time="3:00 PM"
				set={loaded ? data.set_300 : "-,---.--"}
				val={loaded ? data.val_300 : "--,---.--"}
				result={loaded ? data.result_300 : "--"}
			/>
			<TwoDitem
				time="4:30 PM"
				set={loaded ? data.set_430 : "-,---.--"}
				val={loaded ? data.val_430 : "--,---.--"}
				result={loaded ? data.result_430 : "--"}
			/>
			{/* <div className="m-[10px]">
				<img src="./adsj.gif" alt="" className=" w-full" />
			</div> */}
			<div className="filter-div text-center m-[10px] pt-1 pb-1 pl-2 pr-2 rounded-xl bg-white">
				<div className="flex items-center justify-around">
					<div className="">9:30 AM</div>
					<div className="">
						<span className="text-xs">Modern</span>
						<h4 className="text-base font-semibold">
							{data.modern_930}
						</h4>
					</div>
					<div className="">
						<span className="text-xs">Internet</span>
						<h4 className="text-base font-semibold">
							{data.internet_930}
						</h4>
					</div>
				</div>
				<div className="h-[1px] bg-gray-200"></div>
				<div className="flex items-center justify-around">
					<div className="">2:00 PM</div>
					<div className="">
						<span className="text-xs">Modern</span>
						<h4 className="text-base font-semibold">
							{data.modern_200}
						</h4>
					</div>
					<div className="">
						<span className="text-xs">Internet</span>
						<h4 className="text-base font-semibold">
							{data.internet_200}
						</h4>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Hello;
