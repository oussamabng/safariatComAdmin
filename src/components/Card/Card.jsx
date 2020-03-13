import React, { Component } from "react";
import StarRatingComponent from "react-star-rating-component";
import "./Card.css";

class MyCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { Img, Title, Rate, views } = this.props;
    return (
      <div className="img" style={{ width: "16rem", height: "18rem" }}>
        <img className="rounded-lg" variant="top" src={Img} />
        <div className="card-body pt-1 pl-1">
          <div className="card-title mb-0">{Title}</div>
          <div className="card-title">
            <div className="productInfo">
              <div className="productInfo card-slider">
                <h1>
                  Rate <p>( based on {views} reviews)</p>
                </h1>
              </div>
              <div className="  my-staring">
                <StarRatingComponent name="rate1" starCount={5} value={Rate} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default MyCard;
