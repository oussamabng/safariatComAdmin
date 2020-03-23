import React from "react";
import Chart from "react-apexcharts";

const FinanceDonut = props => {
	const options = {
		fill: {
			colors: [
				"#2DCE98",
				"#F53C56",
				"#11CDEF",
				"#FEB969",
				"#EF5B5B",
				"#175170",
				"#FAA154",
				"#21A0A0",
				"#946846",
				"#6D213C"
			]
		},
		plotOptions: {
			pie: {
				customScale: 1,
				offsetX: 0,
				offsetY: 0,
				expandOnClick: true,
				dataLabels: {
					enabled: false,
					colors: ["#000", "#ffff"]
				},
				donut: {
					size: "65%",
					labels: {
						show: true,
						name: {
							show: true,
							fontWeight: 400,
							color: "black"
						},
						value: {
							show: true,
							fontWeight: 500,
							fontSize: "18px",
							color: "#172B4D",
							fontFamily: "Montserrat sans-serif",
							offsetY: 0,
							formatter: function(val) {
								return val + " $";
							}
						},
						total: {
							show: true,
							showAlways: true,
							label: "total budget",
							fontSize: "21px",
							fontWeight: 500,
							fontFamily: "Montserrat sans-serif",
							color: "#172B4D",
							formatter: function(w) {
								return (
									w.globals.seriesTotals.reduce((a, b) => {
										return a + b;
									}, 0) + " $"
								);
							}
						}
					}
				}
			}
		},
		chart: {
			type: "donut"
		},
		responsive: [
			{
				breakpoint: 1729,
				options: {
					chart: {
						width: 300
					}
				}
			},
			{
				breakpoint: 1547,
				options: {
					chart: {
						width: 250
					}
				}
			},
			{
				breakpoint: 1400,
				options: {
					chart: {
						width: 240
					}
				}
			},
			{
				breakpoint: 1388,
				options: {
					chart: {
						width: 400
					}
				}
			}
		]
	};

	return (
		<Chart type="donut" options={options} series={props.data} width="350" />
	);
};
export default FinanceDonut;
