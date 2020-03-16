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
import { Link } from "react-router-dom";

class GenerlaAnalystics extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.state = {
      series: [
        {
          name: "Day",
          data: [80, 65, 60, 44, 77, 58, 63, 60, 15]
        },
        {
          name: "Week",
          data: [60, 55, 38, 15, 61, 58, 63, 44, 55]
        },
        {
          name: "Month",
          data: [44, 40, 25, 80, 38, 58, 63, 78, 63]
        }
      ],
      options: {
        responsive: [
          {
            breakpoint: 1300,
            options: {
              chart: {
                width: 450
              }
            }
          },
          {
            breakpoint: 1100,
            options: {
              chart: {
                width: 350
              }
            }
          }
        ],
        colors: ["#109bf8", "#ffb808", "#084c61"],
        chart: {
          type: "bar",
          height: 350
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "35%",
            endingShape: "rounded"
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: true,
          width: 0.5,
          colors: ["transparent"]
        },
        yaxis: {
          axisTicks: {
            show: true
          },
          axisBorder: {
            show: false
          }
        },
        fill: {
          opacity: 1
        },
        tooltip: {
          y: {
            formatter: function(val) {
              return "" + val + " thousands";
            }
          }
        },
        legend: {
          show: true,
          position: "top",
          horizontalAlign: "right",
          showForSingleSeries: true,
          onItemClick: {
            toggleDataSeries: true
          }
        }
      },
      items: [
        {
          name: "Hour",
          key: 0,
          scrollChor: "#"
        },
        {
          name: "Day",
          key: 1,

          scrollChor: "#"
        },
        {
          name: "Week",
          key: 2,
          scrollChor: "#about"
        },
        {
          name: "Month",
          key: 3,
          scrollChor: "#contact"
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
    var data_news = [
      {
        name: "Kevin Makelien",
        time: "Today at 22:45",
        type: "story"
      },
      {
        name: "Kevin Makelien",
        time: "Today at 22:45",
        type: "story"
      },
      {
        name: "Kevin Makelien",
        time: "Today at 22:45",
        type: "story"
      },
      {
        name: "Kevin Makelien",
        time: "Today at 22:45",
        type: "story"
      },
      {
        name: "Kevin Makelien",
        time: "Today at 22:45",
        type: "story"
      },
      {
        name: "Kevin Makelien",
        time: "Today at 22:45",
        type: "story"
      }
    ];
    var top_product_data = [
      {
        productName: "first medical kit",
        price: "98$-149$",
        rate: 4,
        up: 255,
        down: 0,
        img: Img
      },
      {
        productName: "first medical kit",
        price: "98$-149$",
        rate: 4,
        up: 255,
        down: 0,
        img: Img
      },
      {
        productName: "first medical kit",
        price: "98$-149$",
        rate: 4,
        up: 255,
        down: 0,
        img: Img
      },
      {
        productName: "first medical kit",
        price: "98$-149$",
        rate: 4,
        up: 255,
        down: 0,
        img: Img
      },
      {
        productName: "first medical kit",
        price: "98$-149$",
        rate: 4,
        up: 255,
        down: 0,
        img: Img
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
                <Link
                  style={{
                    backgroundColor: "#ffb808",
                    color: "#ffffff"
                  }}
                  to="/admin/tours"
                >
                  Tours bookings & Products
                </Link>
                <Link
                  style={{
                    backgroundColor: "#ffffff",
                    color: "#747474"
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
                    <div className="card-header-title font-size-lg text-capitalize font-weight-normal">
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
                          {top_product_data.map(product => (
                            <tr className="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
                              <td className="w-full sm:flex sm:flex-row sm:justify-end sm:items-center lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                                <span className="lg:hidden absolute sm:  left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                                  Product name
                                </span>
                                <div className="flex p-0 responsive-rate flex-row lg:justify-center items-center sm:flex sm:justify-end sm:flex sm:justify-end">
                                  <img
                                    src={product["img"]}
                                    alt="img"
                                    width="40"
                                  />
                                  <p className="text-center px-2">
                                    {product["productName"]}
                                  </p>
                                </div>
                              </td>
                              <td className="w-full  lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                                <span className="lg:hidden absolute  left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                                  Price
                                </span>
                                <p className="responsive-rate lg:text-center whitespace-no-wrap xl:text-center xl:float-none sm:text-right sm:float-right">
                                  {product["price"]}
                                </p>
                              </td>
                              <td className="w-full  lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                                <span className="lg:hidden absolute left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                                  Rate
                                </span>
                                <div className="productInfo responsive-rate">
                                  <div className="arrowProduct productInfo">
                                    <h1>{product["up"]}</h1>
                                    <ArrowUp
                                      fill="#2edc5d"
                                      className="arrowProductUp"
                                    />
                                  </div>
                                  <div className="arrowProduct productInfo">
                                    <h1>{product["down"]}</h1>
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
                    <div className="card-header-title font-size-lg text-capitalize font-weight-normal">
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
                            ? "activeButt btn btn-alternate border-none cursor-pointer"
                            : "btn btn-alternate border-none cursor-pointer";
                          return (
                            <p
                              name={elem["name"]}
                              className={navClass}
                              scrollChor={elem["scrollChor"]}
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
                          className="hint--left text-center  hint--medium"
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
