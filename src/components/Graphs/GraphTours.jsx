import React, { Component } from "react";
import styled from "styled-components";
import Chart from "react-apexcharts";

export default class GraphTours extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Container>
        <Chart
          className="agency_tours_chart"
          options={this.props.options}
          series={this.props.series}
          type="area"
          width="800"
          height="400"
        />
      </Container>
    );
  }
}

const Container = styled.div`
  .agency_tours_chart .apexcharts-legend {
    display: flex !important;
    justify-content: flex-end !important;
    padding: 15px 0 !important;
  }
`;
