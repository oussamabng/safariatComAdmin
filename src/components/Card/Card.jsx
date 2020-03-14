import React, { Component } from "react";
import StarRatingComponent from "react-star-rating-component";
import "./Card.css";

class MyCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 4
    };
  }
  render() {
    const { rating } = this.state;
    const { Img, Title, Rate } = this.props;
    return (
      <div style={{ width: "90%", height: "80%" }}>
        <div class="max-w-sm rounded overflow-hidden set-back">
          <img
            class="w-full rounded-lg"
            src={Img}
            alt="Sunset in the mountains"
          />
          <div class="px-1 py-4 flex flex-col">
            <div class="font-bold text-xl mb-2">{Title}</div>
            <div className="flex md:flex-col md:items-start md:px-2 flex-row justify-between items-center set-fonts">
              <h1 class="text-base">Rate</h1>
              <p>( based on {Rate} reviews)</p>
              <div className="my-staring">
                <StarRatingComponent
                  name="rate1"
                  starCount={5}
                  value={rating}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default MyCard;
