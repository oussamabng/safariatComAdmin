import React, { Component } from 'react';
import { Table,Row,Col,Card,Button } from 'react-bootstrap';
import GeneralGraph from "../../components/Graphs/GraphGen.jsx";
import "./GenerlaAnalystics.css";
import Img from "./images/NoPath - Copie (16)@3x.png";
import Dubai from "./images/dubai.jpg";
import { ReactComponent as ArrowUp } from './images/up-arrow(1).svg';
import { ReactComponent as ArrowDown } from './images/down-arrow(1).svg';
import { ReactComponent as Info } from './images/information.svg';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import StarRatingComponent from 'react-star-rating-component';
import MyCard from "../Card/Card.jsx";
import New from "../New/New.jsx";


class GenerlaAnalystics extends Component{
    constructor(props){
        super(props);
        this.state={
            rating:4
        }
    }
    render(){
        const {rating} = this.state;
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1
          };
        return(
            <div className="app-main__outer">
                 <section className="mainGeneralDashbord">
                     <div className="app-page-title">
                         <div className="page-title-wrapper">
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
                         </div>
                     </div> 
            </section>
                 <div className="body-tabs">
                     <Row>
                         <Col className="my-col" sm={12} lg={6}>
                             <div className="mb-3 card">
                                 <div className="card-header-tab card-header">
                                     <div className="card-header-title font-size-lg text-capitalize font-weight-normal">
                                         Top products
                                     </div>
                                     <div className="btn-actions-pane-right text-capitalize actions-icon-btn">
                                         <div className="btn-group dropdown">
                                             <button className="btn-icon btn-icon-only btn btn-link">
                                            <Info fill="#b3b8bd" className="info-btn"/>
                                             </button>
                                             {/* here the dropdown div... */}
                                         </div>
                                     </div>
                                 </div>
                                 <div className="p-0 card-body">
                                     <div className="p-3 product-details">
                                         {/* hna tabda */}
                                     <div className="tableProduct">
                                     <Table   bordered responsive>
  <thead>
    <tr>
      <th width="200">Product name</th>
      <th width="150">Price</th>
      <th width="200">Rate</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <div className="widget-content">
              <img src={Img} alt="img" width="40"/>
              <p>first medical kit</p>
        </div>
       </td>
       <td>
               <p>89$ ~ 149$</p>
       </td>
      <td>
        <div className="productInfo">
            <div className="arrowProduct productInfo">
                  <h1>255</h1>
                  <ArrowUp fill="#2edc5d" className="arrowProductUp" />
            </div>
            <div className="arrowProduct productInfo">
                  <h1>0</h1>
                  <ArrowDown fill="#f53636" className="arrowProductUp" />
             </div>
             <div className="arrowProduct productInfo my-staring">
                 <StarRatingComponent 
                 
                 name="rate1" 
                 starCount={5}
                 value={rating}/>
            </div>
        </div>
      </td>
     
    </tr>
    <tr>
      <td>
          <div className="widget-content">
              <img src={Img} alt="img" width="40"/>
              <p>first medical kit</p>
        </div>
        </td>
        <td>
               <p>89$ ~ 149$</p>
       </td>
      <td>
      <div className="productInfo">
            <div className="arrowProduct productInfo">
                  <h1>255</h1>
                  <ArrowUp fill="#2edc5d" className="arrowProductUp" />
            </div>
            <div className="arrowProduct productInfo">
                  <h1>0</h1>
                  <ArrowDown fill="#f53636" className="arrowProductUp" />
             </div>
             <div className="arrowProduct productInfo my-staring">
                 <StarRatingComponent 
                 
                 name="rate1" 
                 starCount={5}
                 value={rating}/>
            </div>
        </div>
      </td>
  
    </tr>
    <tr>
      <td>
          <div className="widget-content">
              <img src={Img} alt="img" width="40"/>
              <p>first medical kit</p>
        </div>
        </td>
        <td>
               <p>89$ ~ 149$</p>
       </td>
      <td>
      <div className="productInfo">
            <div className="arrowProduct productInfo">
                  <h1>255</h1>
                  <ArrowUp fill="#2edc5d" className="arrowProductUp" />
            </div>
            <div className="arrowProduct productInfo">
                  <h1>0</h1>
                  <ArrowDown fill="#f53636" className="arrowProductUp" />
             </div>
             <div className="arrowProduct productInfo my-staring">
                 <StarRatingComponent 
                 
                 name="rate1" 
                 starCount={5}
                 value={rating}/>
            </div>
        </div>
      </td>
      
    </tr>
    <tr>
      <td>
          <div className="widget-content">
              <img src={Img} alt="img" width="40"/>
              <p>first medical kit</p>
        </div>
        </td>
        <td>
               <p>89$ ~ 149$</p>
       </td>
      <td>
      <div className="productInfo">
            <div className="arrowProduct productInfo">
                  <h1>255</h1>
                  <ArrowUp fill="#2edc5d" className="arrowProductUp" />
            </div>
            <div className="arrowProduct productInfo">
                  <h1>0</h1>
                  <ArrowDown fill="#f53636" className="arrowProductUp" />
             </div>
             <div className="arrowProduct productInfo my-staring">
                 <StarRatingComponent 
                 
                 name="rate1" 
                 starCount={5}
                 value={rating}/>
            </div>
        </div>
      </td>
      
    </tr>
    <tr>
      <td>
          <div className="widget-content">
              <img src={Img} alt="img" width="40"/>
              <p>first medical kit</p>
        </div>
        </td>
        <td>
               <p>89$ ~ 149$</p>
       </td>
      <td>
      <div className="productInfo">
            <div className="arrowProduct productInfo">
                  <h1>255</h1>
                  <ArrowUp fill="#2edc5d" className="arrowProductUp" />
            </div>
            <div className="arrowProduct productInfo">
                  <h1>0</h1>
                  <ArrowDown fill="#f53636" className="arrowProductUp" />
             </div>
             <div className="arrowProduct productInfo my-staring">
                 <StarRatingComponent 
                 
                 name="rate1" 
                 starCount={5}
                 value={rating}/>
            </div>
        </div>
      </td>
      
    </tr>
    <tr>
      <td>
          <div className="widget-content">
              <img src={Img} alt="img" width="40"/>
              <p>first medical kit</p>
        </div>
        </td>
        <td>
               <p>89$ ~ 149$</p>
       </td>
      <td>
      <div className="productInfo">
            <div className="arrowProduct productInfo">
                  <h1>255</h1>
                  <ArrowUp fill="#2edc5d" className="arrowProductUp" />
            </div>
            <div className="arrowProduct productInfo">
                  <h1>0</h1>
                  <ArrowDown fill="#f53636" className="arrowProductUp" />
             </div>
             <div className="arrowProduct productInfo my-staring">
                 <StarRatingComponent 
                 
                 name="rate1" 
                 starCount={5}
                 value={rating}/>
            </div>
        </div>
      </td>
      
    </tr>
  </tbody>
</Table>           
            </div>  
                                     </div>
                                 </div>
                             </div>
                         </Col>
                         <Col className="my-col2 my-col flex flex-col justify-start" sm={12} lg={6}>
                         <div className="mb-3 card">
                                 <div className="card-header-tab card-header">
                                     <div className="card-header-title font-size-lg text-capitalize font-weight-normal">
                                         Top tours
                                     </div>
                                     <div className="btn-actions-pane-right text-capitalize actions-icon-btn">
                                     <div className="btn-group-lg btn-group" role="groupe">
                                             <button className="btn btn-alternate btn-pill1">
                                                 Hour
                                             </button>
                                             <button className="btn btn-alternate active">
                                                 Day
                                             </button>
                                             <button className="btn btn-alternate">
                                                 Week
                                             </button>
                                             <button className="btn btn-alternate btn-pill2">
                                                 Month
                                             </button>
                                         </div>
                                         <div className="btn-group dropdown">
                                             <button className="btn-icon btn-icon-only btn btn-link">
                                            <Info fill="#b3b8bd" className="info-btn"/>
                                             </button>
                                             {/* here the dropdown div... */}
                                         </div>
                                     </div>
                                 </div>
                                 <div className="p-0 card-body">
                                     <div className="p-3 product-details">
                                     <div>
                                     <Slider {...settings}>
          <div className="bg-white">
          <MyCard Title="Dubai" Img={Dubai} Rate={504} />
          </div>
          <div className="bg-white">
          <MyCard Title="Sahara" Img={Dubai} Rate={94} />
          </div>
          <div className="bg-white">
          <MyCard Title="Tunisia" Img={Dubai} Rate={278} />
          </div>
          <div className="bg-white">
          <MyCard Title="Dubai" Img={Dubai} Rate={504} />
          </div>
          <div className="bg-white">
          <MyCard Title="Dubai" Img={Dubai} Rate={504} />
          </div>
          <div className="bg-white">
          <MyCard Title="Dubai" Img={Dubai} Rate={504} />
          </div>
        </Slider>
                                     </div>
                                     </div>
                                 </div>
                         </div>
           
                         </Col>
                     </Row>
                      <Row>
                      <Col className="my-col" sm={12} lg={6}>
                        <GeneralGraph />
                    </Col>
                    <Col className="my-col" sm={12} lg={6}>
                        <New name="Kevin maklien" time="Today at 22:45" type="story"/>
                    </Col>
                      </Row>
                 
                 </div>
            </div>

        )
    }
  
}

export default GenerlaAnalystics;