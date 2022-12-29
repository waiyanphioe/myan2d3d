import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

const TwoDresults = (props) => {
	const [data, setData] = useState([]);
	const [loaded, setLoaded] = useState(false);
	useEffect(() => {
		fetch("https://backend.shwemyanmar2d.com/api/lv/twod-result")
			.then((res) => res.json())
			.then(
				(results) => {
					setData(results.data);
					setLoaded(true);
					console.log(data);
				},
				(error) => {
					setLoaded(false);
				}
			);
	}, []);
	return (
		<>
			<Helmet>
				<title>{props.title} | Myan2D3D</title>
			</Helmet>
			<div className="">
				{data.map((item) => {
					return (
						<div
							key={item.id}
							className="filter-div m-[10px] pt-1 pb-1 pl-2 pr-2  bg-white rounded-xl text-center"
						>
							<div className="">11:00 AM</div>
							<div className=" flex items-center justify-around">
								<div className="">
									<span className=" text-xs">Set</span>
									<h4 className=" text-base font-semibold">
										{item.set_1100}
									</h4>
								</div>
								<div className="">
									<span className=" text-xs">Value</span>
									<h4 className=" text-base font-semibold">
										{item.val_1100}
									</h4>
								</div>
								<div className="">
									<h2 className=" text-2xl font-bold text-[#433b24]">
										{item.result_1100}
									</h2>
								</div>
							</div>
							<div className="h-[1px] bg-gray-200"></div>
							<div className="">12:00 PM</div>
							<div className=" flex items-center justify-around">
								<div className="">
									<span className=" text-xs">Set</span>
									<h4 className=" text-base font-semibold">
										{item.set_1200}
									</h4>
								</div>
								<div className="">
									<span className=" text-xs">Value</span>
									<h4 className=" text-base font-semibold">
										{item.val_1200}
									</h4>
								</div>
								<div className="">
									<h2 className=" text-2xl font-bold text-[#433b24]">
										{item.result_1200}
									</h2>
								</div>
							</div>
							<div className="h-[1px] bg-gray-200"></div>
							<div className="">3:00 PM</div>
							<div className=" flex items-center justify-around">
								<div className="">
									<span className=" text-xs">Set</span>
									<h4 className=" text-base font-semibold">
										{item.set_300}
									</h4>
								</div>
								<div className="">
									<span className=" text-xs">Value</span>
									<h4 className=" text-base font-semibold">
										{item.val_300}
									</h4>
								</div>
								<div className="">
									<h2 className=" text-2xl font-bold text-[#433b24]">
										{item.result_300}
									</h2>
								</div>
							</div>
							<div className="h-[1px] bg-gray-200"></div>
							<div className="">4:30 PM</div>
							<div className=" flex items-center justify-around">
								<div className="">
									<span className=" text-xs">Set</span>
									<h4 className=" text-base font-semibold">
										{item.set_430}
									</h4>
								</div>
								<div className="">
									<span className=" text-xs">Value</span>
									<h4 className=" text-base font-semibold">
										{item.val_430}
									</h4>
								</div>
								<div className="">
									<h2 className=" text-2xl font-bold text-[#433b24]">
										{item.result_430}
									</h2>
								</div>
							</div>
							<div className="h-[1px] bg-gray-200"></div>
							<div className="flex items-center justify-around">
								<div className="">9:30 AM</div>
								<div className="">
									<span className="text-xs">Modern</span>
									<h4 className="text-base font-semibold">
										{item?.modern_930}
									</h4>
								</div>
								<div className="">
									<span className="text-xs">Internet</span>
									<h4 className="text-base font-semibold">
										{item?.internet_200}
									</h4>
								</div>
							</div>
							<div className="h-[1px] bg-gray-200"></div>
							<div className="flex items-center justify-around">
								<div className="">2:00 PM</div>
								<div className="">
									<span className="text-xs">Modern</span>
									<h4 className="text-base font-semibold">
										{item?.modern_200}
									</h4>
								</div>
								<div className="">
									<span className="text-xs">Internet</span>
									<h4 className="text-base font-semibold">
										{item?.internet_200}
									</h4>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</>
	);
};

export default TwoDresults;
