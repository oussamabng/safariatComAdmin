import React from "react";
import styled from "styled-components";

import BigImg from "../images/01.png";
import SmallImg from "../images/02.png";

import productBig from "../images/productBig.png";
import product from "../images/product.png";

export default function Modal(props) {
  document.body.style.overflow = "hidden";
  const renderTourDetails = tourDetails => {
    return (
      <div className="modal-main">
        <header className="header">
          <a onClick={props.closeModal} href="">
            <i className=" header__back fas fa-long-arrow-alt-left"></i>
          </a>
          <h4 className="header__title">Tour Preview</h4>
        </header>
        <div className="top">
          {/*  */}
          <div className="details__text">
            <div className="details__buttons">
              <button className="edit">edit</button>
              <button className="delete">delete</button>
            </div>
            <div className="details__info">
              <div className="details__info__row">
                <p className="details__info__col ">Tour</p>
                <p className="details__info__col subText">{tourDetails.tour}</p>
              </div>
              <div className="details__info__row">
                <p className="details__info__col">Type</p>
                <p className="details__info__col subText">{tourDetails.type}</p>
              </div>
              <div className="details__info__row">
                <p className="details__info__col">destination</p>
                <p className="details__info__col subText">
                  {tourDetails.destination}
                </p>
              </div>
              <div className="details__info__row">
                <p className="details__info__col">date</p>
                <p className="details__info__col subText">{tourDetails.date}</p>
              </div>
              <div className="details__info__row">
                <p className="details__info__col">Price</p>
                <p className="details__info__col subText">
                  {tourDetails.price}
                </p>
              </div>
              <div className="details__info__row">
                <p className="details__info__col">Activity Level</p>
                <p className="details__info__col subText">
                  {tourDetails.activityLevel}
                </p>
              </div>
              <div className="details__info__row">
                <p className="details__info__col">Number of Groups</p>
                <p className="details__info__col subText">
                  {tourDetails.numberOfGroup}
                </p>
              </div>
              <div className="details__info__row">
                <p className="details__info__col">Number of Members</p>
                <p className="details__info__col">
                  {tourDetails.numberOfMembers}
                </p>
              </div>
              <div className="details__info__row">
                <p className="details__info__col">Description</p>
                <p className="details__info__col  subText">
                  {tourDetails.longDescription}
                </p>
              </div>
            </div>
          </div>

          <div className="details__images">
            <img src={BigImg} alt="" className="mainImage" />
            <div className="details__images__small">
              <img className="smallImage" src={SmallImg} alt="" />
              <img className="smallImage" src={SmallImg} alt="" />
              <img className="smallImage" src={SmallImg} alt="" />
            </div>
          </div>
        </div>

        <div className="bottom">
          <div className="bottom__package">
            <div className="bottom__package__includes">
              <p className="bottom__package__includes__title">Includes</p>
              {tourDetails.includes.map((el, index) => {
                return <p className="bottom__package__includes__text">{el}</p>;
              })}
            </div>
            <div className="bottom__package__excludes">
              <p className="bottom__package__excludes__title">Excludes</p>
              {tourDetails.excludes.map((el, index) => {
                return <p className="bottom__package__excludes__text">{el}</p>;
              })}
            </div>
          </div>
          <div className="bottom__extra">
            <div className="bottom__itinerary">
              <p className="bottom__itinerary__title">itinerary</p>
              <p className="bottom__itinerary__text">{tourDetails.itinerary}</p>
            </div>
            <div className="bottom__accomedation">
              <p className="bottom__accomedation__title">accomedation</p>
              <p className="bottom__accomedation__text">
                {tourDetails.accomedation}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderProductsDetails = productDetails => {
    return (
      <div className="modal-main">
        <header className="header">
          <a onClick={props.closeModal} href="">
            <i className=" header__back fas fa-long-arrow-alt-left"></i>
          </a>
          <h4 className="header__title">Product Preview</h4>
        </header>
        <div className="top">
          {/*  */}
          <div className="details__text">
            <div className="details__buttons">
              <button className="edit">edit</button>
              <button className="delete">delete</button>
            </div>
            <div className="details__info">
              <div className="details__info__row">
                <p className="details__info__col ">product</p>
                <p className="details__info__col subText">
                  {productDetails.product}
                </p>
              </div>
              <div className="details__info__row">
                <p className="details__info__col">Type</p>
                <p className="details__info__col subText">
                  {productDetails.type}
                </p>
              </div>

              <div className="details__info__row">
                <p className="details__info__col">Price</p>
                <p className="details__info__col subText">
                  {productDetails.price}
                </p>
              </div>
              <div className="details__info__row">
                <p className="details__info__col">description</p>
                <p className="details__info__col subText">
                  {productDetails.description}
                </p>
              </div>
            </div>
          </div>

          <div className="details__images">
            <img src={productBig} alt="" className="mainImage" />
          </div>
        </div>
      </div>
    );
  };

  return props.tourDetails ? (
    <Container>
      <div className="modal">{renderTourDetails(props.tourDetails)}</div>
    </Container>
  ) : (
    <Container>
      <div className="modal">{renderProductsDetails(props.productDetails)}</div>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);


  .modal-main {
      background-color:white;
    position: fixed;
    background: white;
    width: 80%;
    height: auto;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height:80vh;
    overflow:auto;
  }

  /// main styling
  .main {
    display: flex;
    flex-direction: column;
    background-color:white;
  }

  // header

  .header {
    display: flex;
    max-width: 50%;
    justify-content: space-between;
    align-items: center;
  }

  .header__back {
    cursour: pointer;
    font-size: 2rem;
    color: white;
    padding: 0 1rem;
    background-color: #2c2c2c;
  }

  .header__tittle {
  }

  // Top -----------------------------------------------------------------------------
  .top {
      display:flex;
      justify:content:center;
      align-items:center;
      
  }
  // text -------------
  .details__text {
      flex-basis:30rem;
      
  }

  .details__buttons{
      width:100%;
      text-align:center;
  }


  .edit {
      color:#fff;
      background-color:#FFCC4E
  }

  .delete { 
      margin-left:1rem;
      background-color:#7B7B7B;
      color:#fff;
  }

  .edit , .delete {
      padding:.5rem 1rem; 
      border: solid 1px #707070;
      border-radius:4px;
  }

  .details__info{
    background-color:#F6F6F6;
    margin-top:15px;
    margin-left:5rem;
  }

  .details__info__row {
    width:100%;

  }
  .details__info__col {
    display:inline-block;
    width:50%;
    padding:.5rem 1rem;
    text-align:left;
    vertical-align:top;
  }

  .subText {
      color:#3E3E3E
  }

  // images -----------

  .details__images {
      align-self:flex-end;
      flex-basis:50%;
    display:flex;
    flex-direction:column;
    align-items:center;
   
  }

  .mainImage{
    max-width:24.5rem;
  }

  .details__images__small{
      display:flex; 
      justify-content:center;
      align-items;center;
      margin-top:1rem;
  }

  .smallImage{
    max-width:5.7rem;
  }

  
  // Bottom -----------------------------------------------------------------------------

  .bottom {
      margin: 5rem ;
      display:flex;
      flex-direction:column;
      
  }

  
  .bottom__package{
    display:flex;
    justify-content:space-between;
  }

  .bottom__package__includes {
    flex-basis:28rem;
  }

  .bottom__package__includes__title {

  }

  .bottom__package__includes__text {
    margin-left:1rem;
  }

.bottom__package__excludes {
    flex-basis:28rem;

}

.bottom__package__excludes__title {

}

.bottom__package__excludes__text {
    margin-left:1rem;
    
}




.bottom__extra {
    margin-top:1.5rem;
    background-color:#F6F6F6;

}

.bottom__itinerary {
    text-align:center
}

.bottom__itinerary {
    margin-top:1rem;

}


.bottom__itinerary__text {
    text-align:justify;
    margin: 0 8rem;
    
    margin-top:1rem;
}

.bottom__accomedation{
    
    text-align:center;
}

.bottom__accomedation__title{
    margin:0 auto;
    margin-top:2rem;

}

.bottom__accomedation__text{
    text-align:left;
    padding: 0 4rem;
    margin-top:1rem;
}

`;
