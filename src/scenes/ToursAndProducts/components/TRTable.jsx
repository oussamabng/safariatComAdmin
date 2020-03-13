import React from "react";
import styled from "styled-components";

export default function TRTable(props) {
  const toursTable = tours => {
    return (
      <table className="table">
        <thead className="thead">
          <tr className="tr">
            <th className="th">tour</th>
            <th className="th">type</th>
            <th className="th">destination</th>
            <th className="th">date</th>
            <th className="th">price</th>
            <th className="th">description</th>
          </tr>
        </thead>
        <tbody className="tbody">
          {tours.map((el, index) => {
            return (
              <tr key={`row-${index}`} className="tr">
                <td className="td">{el.tour}</td>
                <td className="td">{el.type}</td>
                <td className="td">{el.destination}</td>
                <td className="td">{el.date}</td>
                <td className="td">
                  {el.price.min} {el.price.max}
                </td>
                <td className="td">{el.description}</td>
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
  }

  .thead {
  }

  .tbody {
  }

  .tr {
    border-bottom: solid 1px #707070;
  }

  .th {
    padding: 1.3rem 1rem;
  }

  .td {
    padding: 1.3rem 1rem;
  }
`;
