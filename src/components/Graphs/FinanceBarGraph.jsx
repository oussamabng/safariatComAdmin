import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import Axios from "axios";

const FinanceLineGraph = () => {
	const options = {
		colors: ["#169EF7", "#ffb808", "#084c61"],
		chart: {
			type: "bar",
			width: 500
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
				show: true
			},
			axisBorder: {
				show: false
			}
		},

		xaxis: {
			categories: ["Apr", "May", "Jun", "Jul", "Aug", "Sep"]
		},
		fill: {
			opacity: 1
		},
		tooltip: {
			y: {
				formatter: function(val) {
					return "" + val + " thousands";
				}
			}
		},
		legend: {
			show: false
		}
	};
	const [series, setSeries] = useState([{ data: [0, 0, 0, 0, 0, 0, 0, 0] }]);
	useEffect(() => {
		Axios.get("  http://localhost:3000/product_sale_values")
			.then(res => {
				setSeries(res.data);
			})
			.catch(err => alert("err on fetching data"));
	}, []);

	return (
		<div className="bar-one px-6 h-full flex flex-col justify-end items-center">
			<Chart options={options} series={series} type="bar" height="80%" />
		</div>
	);
};
export default FinanceLineGraph;
