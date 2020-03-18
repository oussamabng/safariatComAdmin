import React, { Component } from "react";
import StarRatingComponent from "react-star-rating-component";
import "./Card.css";
import styled from "styled-components";

class MyCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { Img, Title, Rate, views } = this.props;
    return (
      <Container style={{ width: "90%", height: "100%" }}>
        <div className="rounded overflow-hidden set-back">
          <div className="flex justify-center items-center">
            <img
              className="slider-img rounded-lg"
              src={Img}
              alt="Sunset in the mountains"
            />
          </div>
          <div className="px-1 py-4 flex flex-col">
            <div className="font-bold text-lg md:px-2 mb-2 1366 xsD:text-11 sD:text-13 mD:text-15 lD:text-21">
              {Title}
            </div>
            <div className="flex lD:flex-row lD:items-center mD:flex-col mD:items-start md:px-2 flex-row justify-between items-center set-fonts">
              <h1 className="text-base 1200 xsD:text-9 sD:text-11 mD:text-13 lD:text-18">
                {Rate}
              </h1>
              <p className="xsD:text-8 sD:text-8 mD:text-110 lD:text-12">
                ( based on {Rate} reviews)
              </p>
              <div className="my-staring">
                <StarRatingComponent
                  className="xsD:text-8 sD:text-8 mD:text-110 lD:text-12"
                  starCount={5}
                  value={views}
                  name="my-rateee"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    );
  }
}
export default MyCard;
const Container = styled.div`
  .slider-img {
    max-height: 190px;
    width: 100%;
  }
`;
