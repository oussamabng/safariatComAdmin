import React, { Component } from "react";
import StarRatingComponent from "react-star-rating-component";
import styled from "styled-components";

class MyCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { Img, Title, Rate, views } = this.props;
    return (
      <Container
        className="agency_card"
        style={{ width: "90%", height: "100%" }}
      >
        <div
          style={{
            backgroundColor: "#f9f9f9"
          }}
          className="rounded overflow-hidden"
        >
          <div className="flex justify-center items-center">
            <img
              className="slider-img rounded-lg"
              src={Img}
              alt="Sunset in the mountains"
            />
          </div>
          <div className="px-2 py-4 flex flex-col">
            <div className="text-21 mb-2">{Title}</div>
            <div className="flex justify-between items-center text-center">
              <h1 className="whitespace-no-wrap text-16">Rate</h1>
              <p className="whitespace-no-wrap text-gray-600 text-14">
                ( based on {Rate} reviews)
              </p>
              <div className="whitespace-no-wrap text-14">
                <StarRatingComponent
                  className="rate-card "
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
    max-height: 250px;
    width: 100%;
  }

  @media (max-width: 1440px) {
    .agency_card {
      width: 75% !important;
    }
  }
`;
