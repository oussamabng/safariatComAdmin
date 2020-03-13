import React, { Component } from "react";

import { tours, toursDetails } from "./data";
import styled from "styled-components";

import TRTable from "./components/TRTable";

export default class ToursAndProducts extends Component {
  state = {
    isToursView: true,
    isProductsView: false,

    isTourShown: false,
    isProductShown: false,

    tours: null,
    products: null
  };

  componentDidMount() {
    this.setState({ tours, products: tours });
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

  renderTable() {
    const view = this.state.isToursView ? "tours" : "products";

    const tours =
      this.state.tours && view === "tours" ? this.state.tours : null;

    const products =
      this.state.products && view === "products" ? this.state.products : null;

    if (tours) {
      return <TRTable tours={tours}>products DAta</TRTable>;
    } else if (products) {
      return <TRTable products={products}>products DAta</TRTable>;
    } else {
      return null;
    }
  }

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
                  className="toursAndProducts__top__button toursviewBTN"
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

  .toursviewBTN {
    color: white;
    background-color: #ffcc4e;
    margin-right: 0.5rem;
  }

  .productsviewBTN {
    color: #4d4d4d;
    background-color: white;
  }

  .toursAndProducts__content {
    background-color: #ffffff;
    padding: 1rem 1.6rem;
    margin-top: 2rem;
  }
`;
