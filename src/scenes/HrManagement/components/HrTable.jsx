import React from "react";
import Arrows from "./Arrows";
import styled from "styled-components";
import personImg from "../images/person.png";

export default function HrTable(props) {
  const employeesTable = employees => {
    return (
      <table class="table font-montserrat">
        <thead className="thead">
          <tr className="tr">
            <th className="th first__th">
              <span className="th__title">name </span>
              <Arrows className="arrows clearfix" />
            </th>
            <th className="th">
              <span className="th__title">Personal Info </span>

              <Arrows className="arrows clearfix " />
            </th>
            <th className="th">
              <span className="th__title"> Departement</span>

              <Arrows className="arrows clearfix" />
            </th>
            <th className="th">
              <span className="th__title">Hire Date </span>

              <Arrows className="arrows clearfix" />
            </th>
            <th className="th last__th">
              <span className="th__title">Documents </span>

              <Arrows className="arrows clearfix" />
            </th>
          </tr>
        </thead>
        <tbody className="tbody">
          {employees.map((el, index) => {
            return (
              <tr key={`row-${index}`} className="tr">
                <td className="td">
                  <img className="td__img clearfix" src={personImg} />
                  <span className="td__text">
                    <span className="td__text__title">{el.name}</span>
                    <span className="td__text__subtitle block">
                      {" "}
                      {el.role}{" "}
                    </span>
                  </span>
                </td>
                <td className="td">
                  <span className="td__text">
                    <span className="td__text__title">Birth Day: </span>
                    <span className="td__text__subtitle">
                      {el.personalInfo.birthDate}
                    </span>
                  </span>
                  <br />
                  <span className="td__text">
                    <span className="td__text__title">Status: </span>
                    <span className="td__text__subtitle">
                      {el.personalInfo.status}
                    </span>
                  </span>
                  <br />
                  <span className="td__text">
                    <span className="td__text__title">Phone: </span>
                    <span className="td__text__subtitle">
                      {el.personalInfo.phone}
                    </span>
                  </span>
                </td>
                <td className="td">
                  <span className="td__text__title">{el.department}</span>
                </td>
                <td className="td">
                  <span className="td__text__title">{el.hireDate}</span>
                </td>
                <td className="td td__link last__td">
                  <a className="td__link__text" href={el.employeeDocument.link}>
                    <span className="td__link__text">PDF_CV.pdf</span>
                  </a>
                  <span className="td__link__icons clearfix">
                    <i class="fas fa-envelope-square"></i>
                    <i class="far fa-minus-square"></i>
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  };

  const tasksTable = tasks => {
    return (
      <table className="table">
        <thead className="thead">
          <tr className="tr ">
            <th className="th first__th">
              <span className="th__title">Status </span>
              <Arrows className="arrows clearfix" />
            </th>
            <th className="th">
              <span className="th__title">task </span>
              <Arrows className="arrows clearfix" />
            </th>
            <th className="th">
              <span className="th__title">Responsible </span>
              <Arrows className="arrows clearfix" />
            </th>
            <th className="th">
              <span className="th__title"> Creation Date</span>
              <Arrows className="arrows clearfix" />
            </th>
            <th className="th last__th">
              <span className="th__title"> Delivery Date</span>
              <Arrows className="arrows clearfix" />
            </th>
          </tr>
        </thead>
        <tbody className="tbody">
          {tasks.map((el, index) => {
            return (
              <tr key={`row-${index}`} className="tr">
                <td className="td td__center__text">
                  <span className="td__status ">{el.status}</span>
                </td>
                <td className="td">{el.task}</td>
                <td className="td">
                  <img className="td__img clearfix" src={personImg} />
                  <span className="td__text">
                    <span className="td__text__title">{el.Responsible}</span>
                    <span className="td__text__subtitle block">{el.role}</span>
                  </span>
                  <span className="td__link__icons center__icon clearfix">
                    <i class="fas fa-envelope-square"></i>
                  </span>
                </td>
                <td className="td">{el.creationDate}</td>
                <td className="td last__td">
                  <span className="td__text">
                    <span className="td__text__title">{el.deliveryDate}</span>
                  </span>
                  <span className="td__link__icons clearfix">
                    <i class="fas fa-minus-square"></i>
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  };

  const renderTable = () => {
    return props.employees ? (
      <Container>{employeesTable(props.employees)}</Container>
    ) : (
      <Container>{tasksTable(props.tasks)}</Container>
    );
  };

  {
    /* <div>{props.employees ? props.employees[0].name : null}</div> */
  }
  return renderTable();
}

const Container = styled.div`
  border-radius: 4px;
  width: 100%;
  .table {
    margin-top: 0.75rem;
    // table-layout: fixed;
    width: 100%;
  }

  .thead {
    text-align: left;
    color: ##757575;
  }

  .th {
    color: #757575;
    padding: 1rem 1.8rem;
    background-color: #f5f5f5;
    fonts-size: 0.93rem;
    font-weight: normal;
    border-right: solid 0.5px #707070;
    // width: 20%;
    vertical-align: middle;
  }

  .th__title {
    vertical-align: middle;
  }

  .arrows {
    vertical-align: middle;
    float: right;
  }

  .clearfix::after {
    content: "";
    clear: both;
    display: table;
  }

  .first__th {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }

  .last__th {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    border-right: none;
  }

  .td {
    border-right: solid 0.5px #707070;
    vertical-align: middle;
    padding: 0.5rem 0.8rem;
    // width: 20%;
  }

  .td__img {
    max-width: 48px;
    display: inline-block;
    float: left;
    vertical-align: middle;
    margin-right: 0.5rem;
  }

  .td__text {
    vertical-align: middle;
    display: inline-block;
  }

  .td__text__title {
    font-size: 1rem;
    color: #2a2a2a;
    display: inline-block;
  }

  .td__text__subtitle {
    color: #727272;
    font-size: 0.85rem;
  }

  .td__link__text {
    font-size: 0.8rem;
    color: #035ba8;
  }

  .td__link__icons {
    float: right;
    margin-right: 1rem;
    vertical-align: middle;
  }

  .center__icon {
    top: 50%;
    transform: translateY(50%);
  }

  .td__status {
    color: green;
    border: solid 1px green;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    vertical-align: middle;
  }

  .td__center__text {
    text-align: center;
  }

  .last__td {
    border-right: none;
  }
`;