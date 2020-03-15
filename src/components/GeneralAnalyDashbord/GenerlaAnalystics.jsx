import React, { Component } from "react";
import GeneralGraph from "../../components/Graphs/GraphGen.jsx";
import "./GenerlaAnalystics.css";
import Img from "./images/NoPath - Copie (16)@3x.png";
import Dubai from "./images/dubai.jpg";
import { ReactComponent as ArrowUp } from "./images/up-arrow(1).svg";
import { ReactComponent as ArrowLeft } from "./images/left-arrow.svg";
import { ReactComponent as ArrowRight } from "./images/right-arrow.svg";

import { ReactComponent as ArrowDown } from "./images/down-arrow(1).svg";
import { ReactComponent as Info } from "./images/information.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import StarRatingComponent from "react-star-rating-component";
import MyCard from "../Card/Card.jsx";
import New from "../New/New.jsx";

class GenerlaAnalystics extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.state = {
      rating: 4,
    };
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    var { rating } = this.state;
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      arrows: false,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    var sliderData = [
      {
        name: "Dubai",
        rate: 4,
        views: 504
      },
      {
        name: "Dubai",
        rate: 4,
        views: 504
      },
      {
        name: "Dubai",
        rate: 4,
        views: 504
      },
      {
        name: "Dubai",
        rate: 4,
        views: 504
      },
      {
        name: "Dubai",
        rate: 4,
        views: 504
      },
      {
        name: "Dubai",
        rate: 4,
        views: 504
      }
    ];
    var data = [
      {
        productName: "first medical kit",
        price: "89$ - 149$",
        Rate: 4,
        NumberUp: 255,
        NumberDown: 0
      },
      {
        productName: "first medical kit",
        price: "89$ - 149$",
        Rate: 4,
        NumberUp: 255,
        NumberDown: 0
      },
      {
        productName: "first medical kit",
        price: "89$ - 149$",
        Rate: 4,
        NumberUp: 255,
        NumberDown: 0
      },
      {
        productName: "first medical kit",
        price: "89$ - 149$",
        Rate: 4,
        NumberUp: 255,
        NumberDown: 0
      },
      {
        productName: "first medical kit",
        price: "89$ - 149$",
        Rate: 4,
        NumberUp: 255,
        NumberDown: 0
      },
      {
        productName: "first medical kit",
        price: "89$ - 149$",
        Rate: 4,
        NumberUp: 255,
        NumberDown: 0
      }
    ];
    return (
      <div className="app-main__outer">
        <section className="mainGeneralDashbord">
          <div className="app-page-title ">
            <div className="flex lg:items-center md:justify-center md:items-center  lg:justify-between md:flex-col lg:flex-row">
              <div className="GeneralDash">
                <h1>Analytics and Statistics</h1>
              </div>
              <div className="flex lg:justify-center lg:items-center lg:ml-auto md:mt-4 GeneralDash">
                <a
                  style={{
                    backgroundColor: "#ffb808",
                    color: "#ffffff"
                  }}
                  href="/admin/tours"
                >
                  Tours bookings & Products
                </a>
                <a
                  style={{
                    backgroundColor: "#ffffff",
                    color: "#747474"
                  }}
                  href="/admin/users"
                >
                  Users interactions
                </a>
              </div>
            </div>
          </div>
        </section>
        <div className="flex">
          <div className="w-1/2">
            <div className="flex">
              <div className="my-col w-full">
                <div className="mb-3 card">
                  <div className="card-header-tab card-header">
                    <div className="card-header-title font-size-lg text-capitalize font-weight-normal">
                      Top products
                    </div>
                    <div className="btn-actions-pane-right text-capitalize actions-icon-btn">
                      <div className="btn-group dropdown flex justify-center items-center">
                        <button className="btn-icon btn-icon-only btn btn-link">
                          <Info fill="#b3b8bd" className="info-btn" />
                        </button>
                        {/* here the dropdown div... */}
                      </div>
                    </div>
                  </div>
                  <div className="p-0 card-body">
                    <div className="p-3 product-details">
                      {/* hna tabda */}
                      <table className="border-collapse w-full">
                        <thead>
                          <tr>
                            <th
                              style={{ backgroundColor: "#f5f5f5" }}
                              className="p-3 w:2/5  text-black-600 hidden lg:table-cell"
                            >
                              Product name
                            </th>
                            <th
                              style={{ backgroundColor: "#f5f5f5" }}
                              className="p-3 w:1/5    text-black-600 hidden lg:table-cell"
                            >
                              Price
                            </th>
                            <th
                              style={{ backgroundColor: "#f5f5f5" }}
                              className="p-3 w:2/5    text-black-600 hidden lg:table-cell"
                            >
                              Rate
                            </th>
                          </tr>
                        </thead>
                        <tbody className="table-tbody">
                          <tr className="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
                            <td className="w-full sm:flex sm:flex-row sm:justify-end sm:items-center lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                              <span className="lg:hidden absolute sm:  left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                                Product name
                              </span>
                              <div className="flex p-0 responsive-rate flex-row lg:justify-center items-center sm:flex sm:justify-end sm:flex sm:justify-end">
                                <img src={Img} alt="img" width="40" />
                                <p className="text-center px-2">
                                  first medical kit
                                </p>
                              </div>
                            </td>
                            <td className="w-full  lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                              <span className="lg:hidden absolute  left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                                Price
                              </span>
                              <p className="responsive-rate lg:text-center whitespace-no-wrap sm:text-right">
                                89$ ~ 149$
                              </p>
                            </td>
                            <td className="w-full  lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                              <span className="lg:hidden absolute left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                                Rate
                              </span>
                              <div className="productInfo responsive-rate">
                                <div className="arrowProduct productInfo">
                                  <h1>255</h1>
                                  <ArrowUp

                                    fill="#2edc5d"
                                    className="arrowProductUp"
                                  />
                                </div>
                                <div className="arrowProduct productInfo">
                                  <h1>0</h1>
                                  <ArrowDown
                                    fill="#f53636"
                                    className="arrowProductUp"
                                  />
                                </div>
                                <div className="arrowProduct productInfo">
                                  <StarRatingComponent
                                    name="rate1"
                                    starCount={5}
                                    value={rating}
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr className="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
                            <td className="w-full sm:flex sm:flex-row sm:justify-end sm:items-center lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                              <span className="lg:hidden absolute sm:  left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                                Product name
                              </span>
                              <div className="flex p-0 flex-row lg:justify-center items-center sm:flex sm:justify-end sm:flex sm:justify-end">
                                <img src={Img} alt="img" width="40" />
                                <p className="text-center px-2">
                                  first medical kit
                                </p>
                              </div>
                            </td>
                            <td className="w-full  lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                              <span className="lg:hidden absolute  left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                                Price
                              </span>
                              <p className="lg:text-center whitespace-no-wrap sm:text-right">
                                89$ ~ 149$
                              </p>
                            </td>
                            <td className="w-full lg:w-auto flex justify-center sm:justify-end p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                              <span className="lg:hidden absolute left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                                Rate
                              </span>
                              <div className="productInfo">
                                <div className="arrowProduct productInfo">
                                  <h1>255</h1>
                                  <ArrowUp
                                    fill="#2edc5d"
                                    className="arrowProductUp"
                                  />
                                </div>
                                <div className="arrowProduct productInfo">
                                  <h1>0</h1>
                                  <ArrowDown
                                    fill="#f53636"
                                    className="arrowProductUp"
                                  />
                                </div>
                                <div className="arrowProduct productInfo">
                                  <StarRatingComponent
                                    name="rate1"
                                    starCount={5}
                                    value={rating}
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr className="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
                            <td className="w-full sm:flex sm:flex-row sm:justify-end sm:items-center lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                              <span className="lg:hidden absolute sm:  left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                                Product name
                              </span>
                              <div className="flex p-0 flex-row lg:justify-center items-center sm:flex sm:justify-end sm:flex sm:justify-end">
                                <img src={Img} alt="img" width="40" />
                                <p className="text-center px-2">
                                  first medical kit
                                </p>
                              </div>
                            </td>
                            <td className="w-full  lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                              <span className="lg:hidden absolute  left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                                Price
                              </span>
                              <p className="lg:text-center whitespace-no-wrap sm:text-right">
                                89$ ~ 149$
                              </p>
                            </td>
                            <td className="w-full lg:w-auto flex justify-center sm:justify-end p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                              <span className="lg:hidden absolute left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                                Rate
                              </span>
                              <div className="productInfo">
                                <div className="arrowProduct productInfo">
                                  <h1>255</h1>
                                  <ArrowUp
                                    fill="#2edc5d"
                                    className="arrowProductUp"
                                  />
                                </div>
                                <div className="arrowProduct productInfo">
                                  <h1>0</h1>
                                  <ArrowDown
                                    fill="#f53636"
                                    className="arrowProductUp"
                                  />
                                </div>
                                <div className="arrowProduct productInfo">
                                  <StarRatingComponent
                                    name="rate1"
                                    starCount={5}
                                    value={rating}
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr className="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
                            <td className="w-full sm:flex sm:flex-row sm:justify-end sm:items-center lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                              <span className="lg:hidden absolute sm:  left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                                Product name
                              </span>
                              <div className="flex p-0 flex-row lg:justify-center items-center sm:flex sm:justify-end sm:flex sm:justify-end">
                                <img src={Img} alt="img" width="40" />
                                <p className="text-center px-2">
                                  first medical kit
                                </p>
                              </div>
                            </td>
                            <td className="w-full  lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                              <span className="lg:hidden absolute  left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                                Price
                              </span>
                              <p className="lg:text-center whitespace-no-wrap sm:text-right">
                                89$ ~ 149$
                              </p>
                            </td>
                            <td className="w-full lg:w-auto flex justify-center sm:justify-end p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                              <span className="lg:hidden absolute left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                                Rate
                              </span>
                              <div className="productInfo">
                                <div className="arrowProduct productInfo">
                                  <h1>255</h1>
                                  <ArrowUp
                                    fill="#2edc5d"
                                    className="arrowProductUp"
                                  />
                                </div>
                                <div className="arrowProduct productInfo">
                                  <h1>0</h1>
                                  <ArrowDown
                                    fill="#f53636"
                                    className="arrowProductUp"
                                  />
                                </div>
                                <div className="arrowProduct productInfo">
                                  <StarRatingComponent
                                    name="rate1"
                                    starCount={5}
                                    value={rating}
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr className="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
                            <td className="w-full sm:flex sm:flex-row sm:justify-end sm:items-center lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                              <span className="lg:hidden absolute sm:  left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                                Product name
                              </span>
                              <div className="flex p-0 flex-row lg:justify-center items-center sm:flex sm:justify-end sm:flex sm:justify-end">
                                <img src={Img} alt="img" width="40" />
                                <p className="text-center px-2">
                                  first medical kit
                                </p>
                              </div>
                            </td>
                            <td className="w-full  lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                              <span className="lg:hidden absolute  left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                                Price
                              </span>
                              <p className="lg:text-center whitespace-no-wrap sm:text-right">
                                89$ ~ 149$
                              </p>
                            </td>
                            <td className="w-full lg:w-auto flex justify-center sm:justify-end p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                              <span className="lg:hidden absolute left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                                Rate
                              </span>
                              <div className="productInfo">
                                <div className="arrowProduct productInfo">
                                  <h1>255</h1>
                                  <ArrowUp
                                    fill="#2edc5d"
                                    className="arrowProductUp"
                                  />
                                </div>
                                <div className="arrowProduct productInfo">
                                  <h1>0</h1>
                                  <ArrowDown
                                    fill="#f53636"
                                    className="arrowProductUp"
                                  />
                                </div>
                                <div className="arrowProduct productInfo">
                                  <StarRatingComponent
                                    name="rate1"
                                    starCount={5}
                                    value={rating}
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr className="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
                            <td className="w-full sm:flex sm:flex-row sm:justify-end sm:items-center lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                              <span className="lg:hidden absolute sm:  left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                                Product name
                              </span>
                              <div className="flex p-0 flex-row lg:justify-center items-center sm:flex sm:justify-end sm:flex sm:justify-end">
                                <img src={Img} alt="img" width="40" />
                                <p className="text-center px-2">
                                  first medical kit
                                </p>
                              </div>
                            </td>
                            <td className="w-full  lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                              <span className="lg:hidden absolute  left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                                Price
                              </span>
                              <p className="lg:text-center whitespace-no-wrap sm:text-right">
                                89$ ~ 149$
                              </p>
                            </td>
                            <td className="w-full lg:w-auto flex justify-center sm:justify-end p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                              <span className="lg:hidden absolute left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                                Rate
                              </span>
                              <div className="productInfo">
                                <div className="arrowProduct productInfo">
                                  <h1>255</h1>
                                  <ArrowUp
                                    fill="#2edc5d"
                                    className="arrowProductUp"
                                  />
                                </div>
                                <div className="arrowProduct productInfo">
                                  <h1>0</h1>
                                  <ArrowDown
                                    fill="#f53636"
                                    className="arrowProductUp"
                                  />
                                </div>
                                <div className="arrowProduct productInfo">
                                  <StarRatingComponent
                                    name="rate1"
                                    starCount={5}
                                    value={rating}
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr className="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
                            <td className="w-full sm:flex sm:flex-row sm:justify-end sm:items-center lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                              <span className="lg:hidden absolute sm:  left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                                Product name
                              </span>
                              <div className="flex p-0 flex-row lg:justify-center items-center sm:flex sm:justify-end sm:flex sm:justify-end">
                                <img src={Img} alt="img" width="40" />
                                <p className="text-center px-2">
                                  first medical kit
                                </p>
                              </div>
                            </td>
                            <td className="w-full  lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                              <span className="lg:hidden absolute  left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                                Price
                              </span>
                              <p className="lg:text-center whitespace-no-wrap sm:text-right">
                                89$ ~ 149$
                              </p>
                            </td>
                            <td className="w-full lg:w-auto flex justify-center sm:justify-end p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                              <span className="lg:hidden absolute left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                                Rate
                              </span>
                              <div className="productInfo">
                                <div className="arrowProduct productInfo">
                                  <h1>255</h1>
                                  <ArrowUp
                                    fill="#2edc5d"
                                    className="arrowProductUp"
                                  />
                                </div>
                                <div className="arrowProduct productInfo">
                                  <h1>0</h1>
                                  <ArrowDown
                                    fill="#f53636"
                                    className="arrowProductUp"
                                  />
                                </div>
                                <div className="arrowProduct productInfo">
                                  <StarRatingComponent
                                    name="rate1"
                                    starCount={5}
                                    value={rating}
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="w-full">
                <div className="my-col">
                  <GeneralGraph />
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/2">
            <div className="flex">
              <div className="w-full my-col my-col2 flex flex-col justify-start">
                <div className="mb-3 card">
                  <div className="card-header-tab card-header sm:px-5">
                    <div className="card-header-title font-size-lg text-capitalize font-weight-normal">
                      Top tours
                    </div>
                    <div className="btn-actions-pane-right text-capitalize actions-icon-btn">
                      <ArrowLeft
                        onClick={this.previous}
                        className="arrows px-1"

                      />
                      <ArrowRight
                        className="arrows px-1"
                        onClick={this.next}

                      />
                      <div className="p-10  lg:hidden sm:px-5">
                        <div className="dropdown inline-block  relative">
                          <button className="bg-gray-300 text-gray-700 font-semibold py-1 px-2 rounded inline-flex items-center">
                            <span className="mr-1 text-xs">Time</span>
                            <svg
                              className="fill-current h-4 w-4"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
                            </svg>
                          </button>
                          <ul className="dropdown-menu absolute hidden text-gray-700 pt-1">
                            <li className="">
                              <a
                                className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap text-xs"
                                href="#"
                              >
                                Hour
                              </a>
                            </li>
                            <li className="">
                              <a
                                className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap text-xs"
                                href="#"
                              >
                                Week
                              </a>
                            </li>
                            <li className="">
                              <a
                                className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap text-xs"
                                href="#"
                              >
                                Day
                              </a>
                            </li>
                            <li className="">
                              <a
                                className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap text-xs"
                                href="#"
                              >
                                Month
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div
                        className="btn-group-lg btn-group lg:flex md:hidden sm:hidden"
                        role="groupe"
                      >
                        <button className="btn btn-alternate btn-pill1">
                          Hour
                        </button>
                        <button className="btn btn-alternate active">
                          Day
                        </button>
                        <button className="btn btn-alternate">Week</button>
                        <button className="btn btn-alternate btn-pill2">
                          Month
                        </button>
                      </div>
                      <div className="btn-group dropdown flex justify-center items-center">
                        <button className="btn-icon btn-icon-only btn btn-link">
                          <Info fill="#b3b8bd" className="info-btn" />
                        </button>
                        {/* here the dropdown div... */}
                      </div>
                    </div>
                  </div>
                  <div className="p-0 card-body">
                    <div className="p-5 pt-0 pb-0 bg-white">
                      <div>
                        <Slider ref={c => (this.slider = c)} {...settings}>
                          <div className=" ">
                            <MyCard Title="Dubai" Img={Dubai} Rate={504} />
                          </div>
                          <div className="">
                            <MyCard Title="Sahara" Img={Dubai} Rate={94} />
                          </div>
                          <div className="">
                            <MyCard Title="Tunisia" Img={Dubai} Rate={278} />
                          </div>
                          <div className="">
                            <MyCard Title="Dubai" Img={Dubai} Rate={504} />
                          </div>
                          <div className="">
                            <MyCard Title="Dubai" Img={Dubai} Rate={504} />
                          </div>
                          <div className="">
                            <MyCard Title="Dubai" Img={Dubai} Rate={504} />
                          </div>
                        </Slider>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="w-full">
                <div className="my-col">
                  <New
                    name="Kevin maklien"
                    time="Today at 22:45"
                    type="story"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GenerlaAnalystics;
