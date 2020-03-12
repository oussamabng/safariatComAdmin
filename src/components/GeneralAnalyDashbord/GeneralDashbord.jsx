import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import GeneralGraph from "../../components/Graphs/GraphGen.jsx";
import "./GeneralDashbord.css";
import Img from "./images/NoPath - Copie (16)@3x.png";
import Img2 from "./images/pic2.png";
import { ReactComponent as ArrowUp } from './images/up-arrow(1).svg';
import { ReactComponent as ArrowDown } from './images/down-arrow(1).svg';
import StarRatingComponent from 'react-star-rating-component';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

 export class GeneralDashbord extends Component{
    constructor(props){
        super(props);
        this.state={
            rating: 4
        }
    }
    
    render(){
        const { rating } = this.state;
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3
          };
        return(
            <>
            <div style={{
                backgroundColor:"#f6f6f6"
            }}>
            <section className="mainGeneralDashbord">
                <div className="GeneralDash">
                    <h1>
                    Analytics and Statistics 
                    </h1>
                </div>
                <div className="GeneralButtons GeneralDash">
                    <a style={{
                        backgroundColor:"#ffb808",
                        color:"#ffffff"
                    }} href="#">Tours bookings & Products</a>
                    <a style={{
                        backgroundColor:"#ffffff",
                        color:"#747474"
                    }} href="#">Users interactions</a>
                </div>
            </section>
            <div className="separateSections">
            <section className="topProducts">
                <div className="ContainerSect">
                <div className="TitleP">
                    <div className="GeneralDash">
                        <p>Top products</p>
                    </div>
                </div>
            <div className="tableProduct">
                <Table className="myTableProduct" responsive bordered hover>
                    <thead>
                        <tr className="firstTr">
                            <th style={{
                                borderRadius:"10px 0 0 10px"
                            }} >Product Name</th>
                            <th className="specialTh">Price</th>
                            <th style={{
                                borderRadius: "0 10px 10px 0"
                            }}>Rate</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <div className="nameAdmin productInfo">
                                    <img src={Img} alt="img"/>
                                    <p>first medical kit</p>
                                </div>
                            </td>
                            <td className="specialTh">89$ ~ 149$</td>
                            <td>
                                <div className="nameAdmin productInfo">
                                   <div className="arrowProduct productInfo">
                                   <p>255</p>
                                    <ArrowUp fill="#2edc5d" className="arrowProductUp" />
                                   </div>
                                   <div className="arrowProduct productInfo">
                                   <p>0</p>
                                    <ArrowDown fill="#f53636" className="arrowProductUp" />
                                   </div>
                                   <div className="arrowProduct productInfo">
                                   <StarRatingComponent 
                                   name="rate1" 
                                   starCount={5}
                                   value={rating}/>                                   </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                            <div className="nameAdmin productInfo">
                                    <img src={Img2} alt="img"/>
                                    <p>Renting Diving tools</p>
                                </div>
                            </td>
                            <td className="specialTh">89$ ~ 149$</td>
                            <td>
                            <div className="nameAdmin productInfo">
                                   <div className="arrowProduct productInfo">
                                   <p>255</p>
                                    <ArrowUp fill="#2edc5d" className="arrowProductUp" />
                                   </div>
                                   <div className="arrowProduct productInfo">
                                   <p>0</p>
                                    <ArrowDown fill="#f53636" className="arrowProductUp" />
                                   </div>
                                   <div className="arrowProduct productInfo">
                                   <StarRatingComponent 
                                   name="rate1" 
                                   starCount={5}
                                   value={rating}/>                                   </div>
                                </div>
                            </td>
                        </tr>
                        <tr className="lastTr">
                            <td> <div className="nameAdmin productInfo">
                                    <img src={Img2} alt="img"/>
                                    <p>Renting Diving tools</p>
                                </div></td>
                            <td className="specialTh">89$ ~ 149$</td>
                            <td>
                            <div className="nameAdmin productInfo">
                                   <div className="arrowProduct productInfo">
                                   <p>255</p>
                                    <ArrowUp fill="#2edc5d" className="arrowProductUp" />
                                   </div>
                                   <div className="arrowProduct productInfo">
                                   <p>0</p>
                                    <ArrowDown fill="#f53636" className="arrowProductUp" />
                                   </div>
                                   <div className="arrowProduct productInfo">
                                   <StarRatingComponent 
                                   name="rate1" 
                                   starCount={5}
                                   value={rating}/>                                   </div>
                                </div>
                            </td>
                            </tr>
                            <tr className="lastTr">
                            <td> <div className="nameAdmin productInfo">
                                    <img src={Img2} alt="img"/>
                                    <p>Renting Diving tools</p>
                                </div></td>
                            <td className="specialTh">89$ ~ 149$</td>
                            <td>
                            <div className="nameAdmin productInfo">
                                   <div className="arrowProduct productInfo">
                                   <p>255</p>
                                    <ArrowUp fill="#2edc5d" className="arrowProductUp" />
                                   </div>
                                   <div className="arrowProduct productInfo">
                                   <p>0</p>
                                    <ArrowDown fill="#f53636" className="arrowProductUp" />
                                   </div>
                                   <div className="arrowProduct productInfo">
                                   <StarRatingComponent 
                                   name="rate1" 
                                   starCount={5}
                                   value={rating}/>                                   </div>
                                </div>
                            </td>
                            </tr>
                            <tr className="lastTr">
                            <td> <div className="nameAdmin productInfo">
                                    <img src={Img2} alt="img"/>
                                    <p>Renting Diving tools</p>
                                </div></td>
                            <td className="specialTh">89$ ~ 149$</td>
                            <td>
                            <div className="nameAdmin productInfo">
                                   <div className="arrowProduct productInfo">
                                   <p>255</p>
                                    <ArrowUp fill="#2edc5d" className="arrowProductUp" />
                                   </div>
                                   <div className="arrowProduct productInfo">
                                   <p>0</p>
                                    <ArrowDown fill="#f53636" className="arrowProductUp" />
                                   </div>
                                   <div className="arrowProduct productInfo">
                                   <StarRatingComponent 
                                   name="rate1" 
                                   starCount={5}
                                   value={rating}/>                                   </div>
                                </div>
                            </td>
                            </tr>
                            <tr className="lastTr">
                            <td> <div className="nameAdmin productInfo">
                                    <img src={Img2} alt="img"/>
                                    <p>Renting Diving tools</p>
                                </div></td>
                            <td className="specialTh">89$ ~ 149$</td>
                            <td>
                            <div className="nameAdmin productInfo">
                                   <div className="arrowProduct productInfo">
                                   <p>255</p>
                                    <ArrowUp fill="#2edc5d" className="arrowProductUp" />
                                   </div>
                                   <div className="arrowProduct productInfo">
                                   <p>0</p>
                                    <ArrowDown fill="#f53636" className="arrowProductUp" />
                                   </div>
                                   <div className="arrowProduct productInfo">
                                   <StarRatingComponent 
                                   name="rate1" 
                                   starCount={5}
                                   value={rating}/>                                   </div>
                                </div>
                            </td>
                            </tr>
                            <tr className="lastTr">
                            <td> <div className="nameAdmin productInfo">
                                    <img src={Img2} alt="img"/>
                                    <p>Renting Diving tools</p>
                                </div></td>
                            <td className="specialTh">89$ ~ 149$</td>
                            <td>
                            <div className="nameAdmin productInfo">
                                   <div className="arrowProduct productInfo">
                                   <p>255</p>
                                    <ArrowUp fill="#2edc5d" className="arrowProductUp" />
                                   </div>
                                   <div className="arrowProduct productInfo">
                                   <p>0</p>
                                    <ArrowDown fill="#f53636" className="arrowProductUp" />
                                   </div>
                                   <div className="arrowProduct productInfo">
                                   <StarRatingComponent 
                                   name="rate1" 
                                   starCount={5}
                                   value={rating}/>                                   </div>
                                </div>
                            </td>
                            </tr>
                    </tbody>
                </Table>               
            </div>
                </div>
            </section>
            <section className="topTours">
            <div className="ContainerSectD">
                <div className="TitleP">
                    <div className="GeneralDash">
                        <p>Top products</p>
                    </div>
                </div>
                </div>
                <div>
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
            </section>
            </div>
            <section className="GeneralGraphX">
                <GeneralGraph />
            </section>
            </div>
            </>
            
        )
    }
}

export default GeneralDashbord;