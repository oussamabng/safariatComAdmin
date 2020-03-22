import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import "./GraphGen.css";
import { ReactComponent as Info } from "../GeneralAnalyDashbord/images/information.svg";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

const GraphGen = props => {
	const [series, setSeries] = useState([]);
	const [activeLink, setActiveLink] = useState("Month");
	const [isLoading, setIsLoading] = useState(false);
	useEffect(() => {
		axios
			.get("http://localhost:3000/booking")
			.then(res => {
				let data = res.data.filter(e => e.name === activeLink);
				setSeries(data);
				setIsLoading(true);
			})
			.catch(err => {
				setIsLoading(true);
				alert("error fetchin data");
			});
	}, [activeLink]);
	const options = {
		responsive: [
			{
				breakpoint: 1300,
				options: {
					chart: {
						width: 450
					}
				}
			},
			{
				breakpoint: 1200,
				options: {
					chart: {
						width: 600
					}
				}
			}
		],
		colors: ["#109bf8", "#ffb808", "#084c61"],
		chart: {
			type: "bar",
			height: 350
		},
		plotOptions: {
			bar: {
				horizontal: false,
				columnWidth: "35%",
				endingShape: "rounded"
			}
		},
		dataLabels: {
			enabled: false
		},
		stroke: {
			show: true,
			width: 0.5,
			colors: ["transparent"]
		},
		yaxis: {
			axisTicks: {
				show: false
			},
			axisBorder: {
				show: false
			}
		},
		xaxis: {
			labels: {
				show: false
			}
		},
		legend: {
			show: false
		},
		fill: {
			type: "gradient",
			gradient: {
				shade: "light",
				type: "vertical",
				shadeIntensity: 0.3,
				gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
				inverseColors: false
			}
		},
		tooltip: {
			y: {
				formatter: function(val) {
					return "" + val + " thousands";
				}
			}
		},
		legend: {
			show: true,
			position: "top",
			horizontalAlign: "right",
			showForSingleSeries: true,
			onItemClick: {
				toggleDataSeries: true
			}
		}
	};

	const handleSetActive = elm => {
		setActiveLink(elm);
	};

	return (
		<Container>
			<div className="mb-3 card">
				<div className="flex items-center h-16 border-none py-2  px-6 bg-white">
					<div className="flex items-center whitespace-no-wrap text-21">
						Bookings & Ordering
					</div>
					<div className="flex justify-between items-center ml-auto">
						{props.items.map(elem => {
							let isActive = activeLink === elem.name;
							let navClass = isActive
								? "agency_choice_time_btn active border-none cursor-pointer "
								: "agency_choice_time_btn border-none cursor-pointer ";
							return (
								<Link
									to="#"
									name={elem["name"]}
									className={navClass}
									scrollchor={elem["scrollchor"]}
									key={elem["key"]}
									onClick={props =>
										handleSetActive(props.currentTarget.attributes[0].nodeValue)
									}
								>
									{elem["name"]}
								</Link>
							);
						})}
						<span
							className="hint--bottom text-center ml-4 hint--medium"
							aria-label="this is a hint"
						>
							<button className="btn-icon btn-icon-only btn btn-link">
								<Info fill="#b3b8bd" className="w-4 h-4" />
							</button>
						</span>
						{/* here the dropdown div... */}
					</div>
				</div>
				{isLoading ? (
					<div className="rowGraph">
						<Chart
							className="GenChart"
							options={options}
							series={series}
							type="bar"
							width="550"
						/>
					</div>
				) : (
					<div className="flex justify-center items-center">
						<div class="lds-ring">
							<div></div>
							<div></div>
							<div></div>
							<div></div>
						</div>
					</div>
				)}
			</div>
		</Container>
	);
};

const Container = styled.div`
	.GenChart .apexcharts-legend-series {
		display: none !important;
	}
	@media (max-width: 1255px) {
		.agency_choice_time_btn {
			display: none !important;
		}
	}
	@media (max-width: 1200px) {
		.agency_choice_time_btn {
			display: flex !important;
		}
	}
`;
export default GraphGen;
