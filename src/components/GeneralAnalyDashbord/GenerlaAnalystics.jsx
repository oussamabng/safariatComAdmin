import React, { Component } from "react";
import GeneralGraph from "../../components/Graphs/GraphGen.jsx";
import Dubai from "./images/dubai.jpg";
import Sahara from "./images/sahara.jpg";
import { ReactComponent as ArrowLeft } from "./images/left-arrow.svg";
import { ReactComponent as ArrowRight } from "./images/right-arrow.svg";
import { ReactComponent as Info } from "./images/information.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TableProduct from "../TableProduct/TableProduct.jsx";
import MyCard from "../Card/Card.jsx";
import New from "../New/New.jsx";
import { Link } from "react-router-dom";
import styled from "styled-components";
import HeaderPage from "../HeaderPage/HeaderPage";
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
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      arrows: false,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1440,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 1108,
          settings: {
            slidesToShow: 2,
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

    return (
      <Container>
        <div className="z-10 flex flex-col ">
          <HeaderPage
            title="Analytics and Statistics"
            buttons={[
              {
                title: "Tours booking & Products",
                active: true,
                href: "/admin/tours"
              },
              {
                title: "Users interactions",
                active: false,
                href: "/admin/users"
              }
            ]}
          />
          <div className="flex agency_row">
            <div className="w-1/2 agency_col">
              <div className="flex">
                <div className="px-4 w-full">
                  <div className="mb-3 card">
                    <div className="flex items-center h-16 border-none py-2  px-6 bg-white">
                      <div className="flex items-center whitespace-no-wrap text-21">
                        Top product
                      </div>
                      <div className="flex justify-center items-center ml-auto whitespace-no-wrap">
                        <div className="flex justify-center items-center">
                          <span
                            className="hint--bottom text-center hint--medium"
                            aria-label="this is a hint"
                          >
                            <button>
                              <Info fill="#b3b8bd" className="w-4 h-4" />
                            </button>
                          </span>
                          {/* here the dropdown div... */}
                        </div>
                      </div>
                    </div>
                    <TableProduct />
                  </div>
                </div>
              </div>
              <div className="flex">
                <div className="w-full">
                  <div className="px-4">
                    <GeneralGraph
                      activeLink={this.state.activeLink}
                      items={this.state.items}
                      options={this.state.options}
                      series={this.state.series}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-1/2 agency_col">
              <div className="flex">
                <div className="px-4 w-full">
                  <div className="mb-3 card">
                    <div className="flex items-center h-16 border-none py-2  px-6 bg-white">
                      <div className="flex items-center whitespace-no-wrap text-21">
                        Top tours
                      </div>
                      <div className="ml-auto whitespace-no-wrap flex justify-center items-center">
                        <ArrowLeft
                          onClick={this.previous}
                          className="cursor-pointer w-6 h-6 px-1"
                        />
                        <ArrowRight
                          className="cursor-pointer w-6 h-6 px-1"
                          onClick={this.next}
                        />
                        <div className="mx-4 flex justify-center items-center">
                          {this.state.items.map(elem => {
                            let isActive = this.state.activeLink === elem.name;
                            let navClass = isActive
                              ? "agency_choice_time_btn active border-none cursor-pointer "
                              : "agency_choice_time_btn border-none cursor-pointer ";
                            return (
                              <Link
                                to="#"
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
                              </Link>
                            );
                          })}
                        </div>
                        <div className="flex justify-center items-center">
                          <span
                            className="hint--left text-center flex hint--medium"
                            aria-label="this is a hint"
                          >
                            <button className="btn-icon btn-icon-only">
                              <Info fill="#b3b8bd" className="w-4 h-4" />
                            </button>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="p-0">
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
                        </Slider>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex">
                <div className="w-full">
                  <div className="px-4">
                    <New data={data_news} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    );
  }
}

export default GenerlaAnalystics;

const Container = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap");
  * {
    font-family: "Montserrat", sans-serif;
    box-sizing: border-box;
  }
  .card {
    box-shadow: 0 0.46875rem 2.1875rem rgba(4, 9, 20, 0.03),
      0 0.9375rem 1.40625rem rgba(4, 9, 20, 0.03),
      0 0.25rem 0.53125rem rgba(4, 9, 20, 0.05),
      0 0.125rem 0.1875rem rgba(4, 9, 20, 0.03);
    border-width: 0;
    transition: all 0.2s;
  }
  .agency_choice_time_btn {
    font-size: 0.8rem !important;
    border: 1px solid #ffcc4e !important;
    border-right: none;
    border-left: none;
    background-color: white;
    color: #ffcc4e;
    padding: 4px 10px;
    border-radius: 5px;
    margin: 0 5px;
  }
  .agency_choice_time_btn.active {
    background-color: #ffcc4e;
    color: white;
  }
  .agency_choice_time_btn:hover {
    background-color: #ffcc4e;
    color: white;
  }
  @media (max-width: 1200px) {
    .agency_row {
      flex-direction: column-reverse !important;
      padding: 0 30px !important;
    }
    .agency_col {
      width: 100% !important;
    }
  }
`;
