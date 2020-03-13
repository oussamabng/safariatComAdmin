import React, { Component } from "react";

import { tours, toursDetails, products } from "./data";
import styled from "styled-components";
import Modal from "./components/Modal";

import TRTable from "./components/TRTable";

export default class ToursAndProducts extends Component {
  state = {
    isToursView: true,
    isProductsView: false,

    isTourDetailsShown: false,
    isProductDetailsShown: false,

    tours: null,
    toursDetails: null,
    tourDetails: null,

    products: null,
    productDetails: null
  };

  componentDidMount() {
    this.setState({ tours, toursDetails, products });

    //remove ShowTourModal() After Tests ;
    // this.setState({ tours, toursDetails }, () => {
    //   this.showTourModal();
    // });
  }

  toggleViewHandler = (e, value) => {
    switch (value) {
      case "toursView":
        this.setState({
          isToursView: true,
          isProductsView: false
        });
        break;
      case "productsView":
        this.setState({
          isToursView: false,
          isProductsView: true
        });

        break;
      default:
        console.log("view Toggle Error");
        break;
    }
  };

  showTourModal = tourId => {
    const tours = this.state.tours;
    const toursDetails = this.state.toursDetails;

    let tour = tours.find(el => Number(el.id) === Number(tourId));
    let details = toursDetails.find(el => Number(el.id) === Number(tourId));

    tour = JSON.parse(JSON.stringify(tour));
    details = JSON.parse(JSON.stringify(details));

    const tourDetails = { ...tour, ...details };
    console.log("tourDetials : ", tourDetails);
    this.setState({ tourDetails, isTourDetailsShown: true });
  };

  showProductModal = productId => {
    const products = this.state.products;
    const productDetails = products.find(
      el => Number(el.id) === Number(productId)
    );
    this.setState({ isProductDetailsShown: true, productDetails });
  };

  hideTourModal = () => {
    this.setState({ tourDetails: null, isTourDetailsShown: false });
  };

  hideProductModal = () => {
    this.setState({ productDetails: null, isProductDetailsShown: false });
  };

  renderTable() {
    const view = this.state.isToursView ? "tours" : "products";

    const tours =
      this.state.tours && view === "tours" ? this.state.tours : null;

    const products =
      this.state.products && view === "products" ? this.state.products : null;

    if (tours) {
      return (
        <TRTable
          showTourDetails={details => this.showTourModal(details)}
          tours={tours}
        >
          products DAta
        </TRTable>
      );
    } else if (products) {
      return (
        <TRTable
          showProductDetails={details => this.showProductModal(details)}
          products={products}
        >
          products DAta
        </TRTable>
      );
    } else {
      return null;
    }
  }

  renderModal = () => {
    const tourDetails = this.state.tourDetails && this.state.tourDetails;
    const productDetails =
      this.state.productDetails && this.state.productDetails;

    const isTourDetailsShown = this.state.isTourDetailsShown;
    const isProductDetailsShown = this.state.isProductDetailsShown;

    if (isTourDetailsShown) {
      return (
        <Modal
          closeModal={this.hideTourModal}
          tourDetails={tourDetails}
        ></Modal>
      );
    } else if (isProductDetailsShown) {
      return (
        <Modal
          closeModal={this.hideProductModal}
          productDetails={productDetails}
        ></Modal>
      );
    } else {
      return null;
    }
  };

  render() {
    return (
      <Container>
        <nav>navbar</nav>

        <div className="main">
          <div className="sidebar">sidebar</div>

          <main className="toursAndProducts">
            <div className="toursAndProducts__top">
              <h3 className="toursAndProducts__top__title">HR HrManagement</h3>
              <hr className="toursAndProducts__top__hr"></hr>
              <div className="toursAndProducts__top__buttons">
                <button
                  className="toursAndProducts__top__button toursViewBTN"
                  onClick={e => this.toggleViewHandler(e, "toursView")}
                >
                  Tours Management
                </button>
                <button
                  className="toursAndProducts__top__button productsViewBTN"
                  onClick={e => this.toggleViewHandler(e, "productsView")}
                >
                  Products Management
                </button>
              </div>
            </div>
            <div className="toursAndProducts__content">
              {this.renderTable()}
              {this.renderModal()}
            </div>
          </main>
        </div>
      </Container>
    );
  }
}

const Container = styled.div`
  .main {
    display: flex;
    background-color: #f6f6f6;
  }

  .toursAndProducts {
    width: 87%;
    // padding: 1rem 1.6rem;
    margin: 0 auto;
  }

  .toursAndProducts__top {
    margin-top: 2rem;
    // padding: 0 1.6rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .toursAndProducts__top__title {
    vertical-align: middle;
    font-size: 1.2rem;
    color: #171717;
  }

  .toursAndProducts__top__hr {
    background: #000;
    border: 0;
    color: #000;
    height: 1px;
    width: 54%;
  }

  .toursAndProducts__top__button {
    display: inline-block;
    vertical-align: middle;
    padding: 0.65rem;
    border-radius: 4px;
  }

  .toursViewBTN {
    color: white;
    background-color: #ffcc4e;
    margin-right: 0.5rem;
  }

  .productsViewBTN {
    color: #4d4d4d;
    background-color: white;
  }

  .toursAndProducts__content {
    background-color: #ffffff;
    padding: 1rem 1.6rem;
    margin-top: 2rem;
    border-radius: 4px;
  }
`;
