import React from "react";

const TwoDitem = (props) => {
	return (
		<div className="filter-div text-center m-[10px] pt-1 pb-1 pl-2 pr-2 rounded-xl bg-white">
			<div className="">{props.time}</div>
			<div className=" h-[1px] bg-gray-200"></div>
			<div className=" flex items-center justify-around">
				<div className="">
					<span className=" text-xs">Set</span>
					<h4 className=" text-base font-semibold">{props.set}</h4>
				</div>
				<div className="">
					<span className=" text-xs">Value</span>
					<h4 className=" text-base font-semibold">{props.val}</h4>
				</div>
				<div className="">
					<h2
						className=" text-2xl font-bold text-[#433b24]"
						title="2D"
					>
						{props.result}
					</h2>
				</div>
			</div>
		</div>
	);
};

export default TwoDitem;
