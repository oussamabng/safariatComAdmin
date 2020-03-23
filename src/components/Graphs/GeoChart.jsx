import React from "react";
import { VectorMap } from "react-jvectormap";
import styled from "styled-components";
const MapChart = props => {
	return (
		<Container>
			<div style={{ width: 600, height: 400 }}>
				<VectorMap
					map={"world_mill"}
					zoomOnScroll={false}
					backgroundColor="#F5F5F5"
					hoverOpacity={0.7}
					id="map"
					containerStyle={{
						width: "100%",
						height: "100%"
					}}
					markerStyle={{
						initial: {
							fill: "#FFCC4E",
						}
					}}
					containerClassName="map"
					markers={{
						US: { latLng: [38.9, -98.45], name: "Name of City" }
					}}
				>
					<p>test</p>
				</VectorMap>
			</div>
		</Container>
	);
};
export default MapChart;
const Container = styled.div`
	.jvectormap-region.jvectormap-element {
		fill: #084c61;
	}
	.jvectormap-zoomout,
	.jvectormap-zoomin {
		display: none !important;
	}
`;
