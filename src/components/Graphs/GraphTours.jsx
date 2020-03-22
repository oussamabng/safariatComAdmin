import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Chart from "react-apexcharts";

const GraphTours = () => {
	const [options, setOptions] = useState({});
	const [series, setSeries] = useState([]);
	useEffect(() => {
		setOptions({
			responsive: [
				{
					breakpoint: 1400,
					options: {
						chart: {
							width: 700
						}
					}
				},
				{
					breakpoint: 1300,
					options: {
						chart: {
							width: 600
						}
					}
				},
				{
					breakpoint: 1200,
					options: {
						chart: {
							width: 450
						}
					}
				},
				{
					breakpoint: 1000,
					options: {
						chart: {
							width: 300
						}
					}
				}
			],
			chart: {
				height: 350,
				type: "area"
			},
			colors: ["#19a4cf", "#ffcc4f"],

			dataLabels: {
				enabled: false
			},
			stroke: {
				curve: "smooth",
				colors: ["#19a4cf", "#ffcc4f"]
			},
			fill: {
				colors: ["#19a4cf", "#ffcc4f"]
			},
			xaxis: {
				labels: {
					show: false
				}
			},
			tooltip: {
				x: {
					format: "dd/MM/yy HH:mm"
				}
			}
		});
		setSeries([
			{
				name: "Shares",
				data: [31, 40, 28, 51, 42, 109, 100]
			},
			{
				name: "Likes",
				data: [11, 32, 45, 32, 34, 52, 41]
			}
		]);
	}, []);

	return (
		<Container>
			<Chart
				className="agency_tours_chart"
				options={options}
				series={series}
				type="area"
				width="800"
				height="400"
			/>
		</Container>
	);
};
export default GraphTours;
const Container = styled.div`
	.agency_tours_chart .apexcharts-legend {
		display: flex !important;
		justify-content: flex-end !important;
		padding: 15px 0 !important;
	}
`;
