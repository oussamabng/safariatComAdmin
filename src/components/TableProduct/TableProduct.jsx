import React, { Component } from "react";
import styled from "styled-components";
import { ReactComponent as ArrowDown } from "../GeneralAnalyDashbord/images/down-arrow(1).svg";
import { ReactComponent as ArrowUp } from "../GeneralAnalyDashbord/images/up-arrow(1).svg";
import StarRatingComponent from "react-star-rating-component";
import Img from "../../assets/person.png";

export default class TableProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      top_product_data: []
    };
  }
  componentDidMount() {
    //request of data table...
    this.setState({
      top_product_data: [
        {
          productName: "first medical kit",
          id: 175757,
          price: "98$-149$",
          rate: 4,
          up: 255,
          down: 0,
          img: Img
        },
        {
          productName: "first medical kit",
          id: 117,
          price: "98$-149$",
          rate: 4,
          up: 255,
          down: 0,
          img: Img
        },
        {
          id: 118,
          productName: "first medical kit",
          price: "98$-149$",
          rate: 4,
          up: 255,
          down: 0,
          img: Img
        },
        {
          id: 119,
          productName: "first medical kit",
          price: "98$-149$",
          rate: 4,
          up: 255,
          down: 0,
          img: Img
        },
        {
          id: 11444,
          productName: "first medical kit",
          price: "98$-149$",
          rate: 4,
          up: 255,
          down: 0,
          img: Img
        }
      ]
    });
  }
  render() {
    let { top_product_data } = this.state;
    return (
      <Container>
        <div className="px-3 bg-white agency_scroll">
          <table className="w-full">
            <thead>
              <tr>
                <th className="agency_th">Product name</th>
                <th className="agency_th">Price</th>
                <th className="agency_th">Rate</th>
              </tr>
            </thead>
            <tbody>
              {top_product_data.map(product => (
                <tr key={product["id"]} className="hover:bg-gray-100  ">
                  <td className="w-full flex justify-center items-center p-3 border border-b">
                    <div className="flex justify-center items-center text-center">
                      <img src={product["img"]} alt="img" width="40" />
                      <p className="text-center px-2 agency_table_text">
                        {product["productName"]}
                      </p>
                    </div>
                  </td>
                  <td className=" p-3 border border-b flex justify-center items-center table-cell">
                    <p className="text-center agency_table_text">
                      {product["price"]}
                    </p>
                  </td>
                  <td className="w-auto p-3 border border-b flex justify-center items-center table-cell">
                    <div className="flex justify-center items-center">
                      <div className="agency_margin flex justify-center items-center">
                        <h1 className="agency_table_text">{product["up"]}</h1>
                        <ArrowUp fill="#2edc5d" className="agency_arrow ml-2" />
                      </div>
                      <div className="agency_margin flex justify-center items-center">
                        <h1 className="agency_table_text">{product["down"]}</h1>
                        <ArrowDown
                          fill="#f53636"
                          className="agency_arrow ml-2"
                        />
                      </div>
                      <div className="agency_margin flex justify-center items-center">
                        <StarRatingComponent
                          name="rate1"
                          starCount={5}
                          value={product["rate"]}
                          className="agency_table_text"
                        />
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    );
  }
}
const Container = styled.div`
  .agency_scroll {
    max-height: 330px;
    overflow: scroll;
    overflow-x: hidden;
    -ms-overflow-style: none; /* Internet Explorer 10+ */
    scrollbar-width: none;
    overflow: -moz-scrollbars-none;
  }
  .agency_margin {
    margin: 0 1rem;
  }
  .agency_th {
    padding: 0.75rem;
    font-size: 18px;
    width: 2/5;
    background-color: #f5f5f5;
  }
  .agency_arrow {
    width: 16px;
    height: 16px;
  }
  .agency_table_text {
    font-size: 16px;
  }
  @media (max-width: 1366px) {
    .agency_margin {
      margin: 0 !important;
    }
  }
`;
