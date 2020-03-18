import React, { Component } from "react";
import GeneralGraph from "../../components/Graphs/GraphGen.jsx";
import "./GenerlaAnalystics.css";
import Img from "./images/NoPath - Copie (16)@3x.png";
import Dubai from "./images/dubai.jpg";
import Sahara from "./images/sahara.jpg";
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
import { Link } from "react-router-dom";

class GenerlaAnalystics extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.state = {
      items: [
        {
          name: "Hour",
          key: 0,
          scrollchor: "#"
        },
        {
          name: "Day",
          key: 1,

          scrollchor: "#"
        },
        {
          name: "Week",
          key: 2,
          scrollchor: "#about"
        },
        {
          name: "Month",
          key: 3,
          scrollchor: "#contact"
        }
      ],
      activeLink: "Month"
    };
  }
  setActive = link => {
    //request funtion to filter
    this.setState({ activeLink: link }); //for active class
  };
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
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
    var data_news = [
      {
        id: 15215112000,
        name: "Kevin Makelien",
        time: "Today at 22:45",
        type: "story"
      },
      {
        id: 15215112001,
        name: "Kevin Makelien",
        time: "Today at 22:45",
        type: "story"
      }
    ];
    var top_product_data = [
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
    ];
    return (
      /*min 1440 xsD:text-14 sD:text-17 mD:text-19 lD:text-28 */
      /*min 1366 xsD:text-11 sD:text-13 mD:text-15 lD:text-21 */
      /*min 1200 xsD:text-9 sD:text-11 mD:text-13 lD:text-18 *
       /*min 1000 xsD:text-8 sD:text-10 mD:text-12 lD:text-16 */

      <div className="app-main__outer">
        <section className="mainGeneralDashbord">
          <div className="app-page-title ">
            <div className="flex lD:items-center lD:flex-row lD:justify-between mD:justify-between mD:items-center sD:justify-between sD:items-center  xsD:justify-between xsD:items-center">
              <div className="GeneralDash xsD:text-14 sD:text-19 mD:text-21 lD:text-28">
                <h1>Analytics and Statistics</h1>
              </div>
              <div className="flex lD:justify-center lD:items-center lD:ml-auto  GeneralDash">
                <Link
                  className="hover-title xsD:text-13 sD:text-15 mD:text-19 lD:text-21"
                  style={{
                    backgroundColor: "#ffb808",
                    color: "#ffffff"
                  }}
                  to="/admin/tours"
                >
                  Tours bookings & Products
                </Link>
                <Link
                  className="hover-title dif xsD:text-13 sD:text-15 mD:text-19 lD:text-21"
                  style={{
                    backgroundColor: "#ffffff",
                    color: "#ffb808"
                  }}
                  to="/admin/users"
                >
                  Users interactions
                </Link>
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
                    <div className="xsD:text-13 sD:text-15 mD:text-18 lD:text-21 card-header-title font-size-lg text-capitalize font-weight-normal">
                      Top products
                    </div>
                    <div className="btn-actions-pane-right text-capitalize actions-icon-btn">
                      <div className=" btn-group dropdown rekative flex justify-center items-center">
                        <span
                          className="hint--bottom text-center  hint--medium"
                          aria-label="this is a hint"
                        >
                          <button className="btn-icon btn-icon-only btn btn-link">
                            <Info fill="#b3b8bd" className="info-btn" />
                          </button>
                        </span>
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
                              className="p-3 w:2/5  text-black-600 hidden lg:table-cell  xsD:text-9 sD:text-13 mD:text-15 lD:text-18"
                            >
                              Product name
                            </th>
                            <th
                              style={{ backgroundColor: "#f5f5f5" }}
                              className="p-3 w:2/5  text-black-600 hidden lg:table-cell  xsD:text-9 sD:text-13 mD:text-15 lD:text-18"
                            >
                              Price
                            </th>
                            <th
                              style={{ backgroundColor: "#f5f5f5" }}
                              className="p-3 w:2/5  text-black-600 hidden lg:table-cell  xsD:text-9 sD:text-13 mD:text-15 lD:text-18"
                            >
                              Rate
                            </th>
                          </tr>
                        </thead>
                        <tbody className="table-tbody">
                          {top_product_data.map(product => (
                            <tr
                              key={product["id"]}
                              className="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0"
                            >
                              <td className="w-full sm:flex sm:flex-row sm:justify-end sm:items-center lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                                <span className="lg:hidden absolute sm:  left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                                  Product name
                                </span>
                                <div className="flex 1000 xsD:text-8 sD:text-12 mD:text-16 lD:text-16  p-0 responsive-rate flex-row lg:justify-center items-center sm:flex sm:justify-end sm:flex sm:justify-end">
                                  <img
                                    src={product["img"]}
                                    alt="img"
                                    width="40"
                                  />
                                  <p className="text-center px-2 sD:text-12 mD:text-16 lD:text-16">
                                    {product["productName"]}
                                  </p>
                                </div>
                              </td>
                              <td className="w-full  lg:w-auto p-3 text-gray-800 text-center border border-b text-center flex justify-between items-center lg:table-cell relative lg:static">
                                <span className="lg:hidden absolute  left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase ">
                                  Price
                                </span>
                                <p className="responsive-rate 1000 sD:text-12 mD:text-16 lD:text-16 lg:text-center whitespace-no-wrap xl:text-center xl:float-none sm:text-right sm:float-right">
                                  {product["price"]}
                                </p>
                              </td>
                              <td className="w-full  lg:w-auto p-3 text-gray-800 text-center border border-b text-center flex justify-between items-center lg:table-cell relative lg:static">
                                <span className="lg:hidden absolute left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                                  Rate
                                </span>
                                <div className="productInfo responsive-rate">
                                  <div className="arrowProduct 1000  productInfo">
                                    <h1 className="sD:text-12 mD:text-16 lD:text-16">
                                      {product["up"]}
                                    </h1>
                                    <ArrowUp
                                      fill="#2edc5d"
                                      className="arrowProductUp"
                                    />
                                  </div>
                                  <div className="arrowProduct 1000  productInfo">
                                    <h1 className="sD:text-12 mD:text-16 lD:text-16">
                                      {product["down"]}
                                    </h1>
                                    <ArrowDown
                                      fill="#f53636"
                                      className="arrowProductUp"
                                    />
                                  </div>
                                  <div className="arrowProduct productInfo">
                                    <StarRatingComponent
                                      name="rate1"
                                      starCount={5}
                                      value={product["rate"]}
                                      className="sD:text-12 mD:text-16 lD:text-16"
                                    />
                                  </div>
                                </div>
                              </td>
                            </tr>
                          ))}
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
                  <GeneralGraph
                    options={this.state.options}
                    series={this.state.series}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/2">
            <div className="flex">
              <div className="w-full my-col my-col2 flex flex-col justify-start">
                <div className="mb-3 card">
                  <div className="card-header-tab card-header sm:px-5">
                    <div className="xsD:text-13 sD:text-15 mD:text-18 lD:text-21 card-header-title font-size-lg text-capitalize font-weight-normal">
                      Top tours
                    </div>
                    <div className="btn-actions-pane-right text-capitalize actions-icon-btn">
                      <ArrowLeft
                        onClick={this.previous}
                        className="arrows px-1"
                      />
                      <ArrowRight className="arrows px-1" onClick={this.next} />
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
                        className="btn-group-lg  btn-group lg:flex md:hidden sm:hidden"
                        role="groupe"
                      >
                        {this.state.items.map(elem => {
                          let isActive = this.state.activeLink === elem.name;
                          let navClass = isActive
                            ? "activeButt btn btn-alternate border-none cursor-pointer xsD:text-9 sD:text-11 mD:text-13 lD:text-18"
                            : "btn btn-alternate border-none cursor-pointer xsD:text-9 sD:text-11 mD:text-13 lD:text-18";
                          return (
                            <p
                              name={elem["name"]}
                              className={navClass}
                              scrollchor={elem["scrollchor"]}
                              key={elem["key"]}
                              onClick={props =>
                                this.setActive(
                                  props.currentTarget.attributes[0].nodeValue
                                )
                              }
                            >
                              {elem["name"]}
                            </p>
                          );
                        })}
                      </div>
                      <div className="btn-group dropdown flex justify-center items-center">
                        <span
                          className="hint--left text-center flex hint--medium"
                          aria-label="this is a hint"
                        >
                          <button className="btn-icon btn-icon-only btn btn-link">
                            <Info fill="#b3b8bd" className="info-btn" />
                          </button>
                        </span>
                        {/* here the dropdown div... */}
                      </div>
                    </div>
                  </div>
                  <div className="p-0 card-body">
                    <div className="p-5 pr-0 pt-0 pb-0 bg-white">
                      <Slider ref={c => (this.slider = c)} {...settings}>
                        <div className="flex justify-center items-center">
                          <MyCard
                            Title="Dubai"
                            Img={Sahara}
                            Rate={504}
                            views={5}
                          />
                        </div>
                        <div className="">
                          <MyCard
                            Title="Sahara"
                            Img={Sahara}
                            Rate={94}
                            views={3}
                          />
                        </div>
                        <div className="">
                          <MyCard
                            Title="Tunisia"
                            Img={Sahara}
                            Rate={278}
                            views={3}
                          />
                        </div>
                        <div className="">
                          <MyCard
                            Title="Dubai"
                            Img={Dubai}
                            Rate={504}
                            views={3}
                          />
                        </div>
                      </Slider>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex">
              <div className="w-full">
                <div className="my-col">
                  <New data={data_news} />
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
