import React from "react";
import styled from "styled-components";

export default function TRTable(props) {
  const previewTour = e => {
    e.preventDefault();
    props.showTourDetails(e.currentTarget.dataset.id);
  };
  const toursTable = tours => {
    return (
      <table className="table font-montserrat">
        <thead className="thead">
          <tr className="tr">
            <th className="th tour">tour</th>
            <th className="th type">type</th>
            <th className="th destination">destination</th>
            <th className="th date">date</th>
            <th className="th price">price</th>
            <th className="th description">description</th>
          </tr>
        </thead>
        <tbody className="tbody">
          {tours.map((el, index) => {
            return (
              <tr key={`row-${index}`} className="tr">
                <td className="td ">{el.tour}</td>
                <td className="td ">{el.type}</td>
                <td className="td ">{el.destination}</td>
                <td className="td ">{el.date}</td>
                <td className="td ">{el.price}</td>
                <td className="td">
                  {el.description}
                  <div classsName="td__preview">
                    <a
                      data-id={el.id}
                      onClick={previewTour}
                      className="td__preview__link"
                      href="#"
                    >
                      Preview
                    </a>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  };

  const productsTable = products => {
    return <div>products data</div>;
  };
  return props.tours ? (
    <Container>{toursTable(props.tours)} </Container>
  ) : (
    <Container> {productsTable(props.products)}</Container>
  );
}

const Container = styled.div`
  width: 100%;
  .table {
    width: 100%;
    text-align: left;
    font-size: 0.88rem;
  }

  .thead {
    color: #757575;
    font-size: 0.9rem;
  }

  .tr {
    border-bottom: solid 0.5px #707070;
  }

  .th {
    padding: 1.3rem 1rem;
  }

  .td {
    padding: 1.3rem 1rem;
  }

  .td__preview {
    width: 100%;
    text-align: right;
  }

  .td__preview__link {
    float: right;

    color: #5782c2;
  }

  .tour,
  .type {
    width: 15%;
  }

  .destination,
  .price,
  .date {
    width: 12%;
  }
`;
