import React from "react";
import styled from "styled-components";
import Arrows from "./components/Arrows";
import personImg from "../../assets/person.png";
import message from "../../assets/message.svg";
import remove from "../../assets/remove.svg";

export default function HrTable(props) {
  const employeesTable = employees => {
    return (
      <table className="table font-montserrat">
        <thead className="thead">
          <tr className="tr ">
            <th className="th  first__th ">
              <span className="th__title text-11 sD:text-13 mD:text-15 lD:text-21">
                name{" "}
              </span>
              <Arrows className="arrows clearfix" />
            </th>
            <th className="th">
              <span className="th__title text-11 sD:text-13 mD:text-15 lD:text-21">
                Personal Info{" "}
              </span>

              <Arrows className="arrows clearfix " />
            </th>
            <th className="th">
              <span className="th__title text-11 sD:text-13 mD:text-15 lD:text-21">
                {" "}
                Departement
              </span>

              <Arrows className="arrows clearfix " />
            </th>
            <th className="th">
              <span className="th__title text-11 sD:text-13 mD:text-15 lD:text-21">
                Hire Date{" "}
              </span>

              <Arrows className="arrows clearfix" />
            </th>
            <th className="th last__th">
              <span className="th__title text-11 sD:text-13 mD:text-15 lD:text-21">
                Documents{" "}
              </span>

              <Arrows className="arrows clearfix" />
            </th>
          </tr>
        </thead>
        <tbody className="tbody">
          {employees.map((el, index) => {
            return (
              <tr key={`row-${index}`} className="tr">
                <td className="td font-montserrat">
                  <img className="td__img clearfix" src={personImg} />
                  <span className="td__text">
                    <span className="td__text__title  text-11 sD:text-13 mD:text-15 lD:text-21">
                      {el.name}
                    </span>
                    <span className="td__text__subtitle block text-8 sD:text-10 mD:text-12 lD:text-16">
                      {" "}
                      {el.role}{" "}
                    </span>
                  </span>
                </td>
                <td className="td  ">
                  <span className="td__text  ">
                    <span className="td__text__title  text-8 sD:text-10 mD:text-12 lD:text-16">
                      Birth Day:{" "}
                    </span>
                    <span className="td__text__subtitle text-8 sD:text-10 mD:text-12 lD:text-16">
                      {el.personalInfo.birthDate}
                    </span>
                  </span>
                  <br />
                  <span className="td__text">
                    <span className="td__text__title text-8 sD:text-10 mD:text-12 lD:text-16">
                      Status:{" "}
                    </span>
                    <span className="td__text__subtitle text-8 sD:text-10 mD:text-12 lD:text-16">
                      {el.personalInfo.status}
                    </span>
                  </span>
                  <br />
                  <span className="td__text">
                    <span className="td__text__title text-8 sD:text-10 mD:text-12 lD:text-16">
                      Phone:{" "}
                    </span>
                    <span className="td__text__subtitle text-8 sD:text-10 mD:text-12 lD:text-16">
                      {el.personalInfo.phone}
                    </span>
                  </span>
                </td>
                <td className="td ">
                  <span className="td__text__title text-9 sD:text-11 mD:text-13 lD:text-18">
                    {el.department}
                  </span>
                </td>
                <td className="td  ">
                  <span className="td__text__title text-9 sD:text-11 mD:text-13 lD:text-18 ">
                    {el.hireDate}
                  </span>
                </td>
                <td className="td td__link  last__td ">
                  <a
                    className="td__link__text "
                    href={el.employeeDocument.link}
                  >
                    <span className="td__link__text last__td text-9 sD:text-11 mD:text-13 lD:text-18">
                      PDF_CV.pdf
                    </span>
                  </a>
                  <span className="td__link__icons clearfix">
                    <img src={message} className="message__icon" alt="" />
                    <img src={remove} className="remove__icon" alt="" />
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
      <table className="table font-montserrat">
        <thead className="thead">
          <tr className="tr xsD:text-11 sD:text-13 mD:text-15 lD:text-21">
            <th className="th first__th">
              <span className="th__title">Status </span>
              <Arrows className="arrows  clearfix" />
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
                <td className="td td__center__text ">
                  <span className="status  text-11 sD:text-13 mD:text-15 lD:text-21 ">
                    {el.status}
                  </span>
                </td>
                <td className="td text-9 sD:text-11 mD:text-13 lD:text-18">
                  {el.task}
                </td>
                <td className="td  ">
                  <img className="td__img clearfix" src={personImg} />
                  <span className="td__text ">
                    <span className="td__text__title text-11 sD:text-13 mD:text-15 lD:text-21 ">
                      {el.Responsible}
                    </span>
                    <span className="td__text__subtitle block  text-8 sD:text-10 mD:text-12 lD:text-16">
                      {el.role}
                    </span>
                  </span>
                  <span className="td__link__icons center__icon clearfix">
                    <img src={message} className="message__icon" alt="" />
                  </span>
                </td>
                <td className="td text-9 sD:text-11 mD:text-13 lD:text-18">
                  {el.creationDate}
                </td>
                <td className="td ">
                  <span className="td__text">
                    <span className="td__text__title text-9 sD:text-11 mD:text-13 lD:text-18">
                      {el.deliveryDate}
                    </span>
                  </span>
                  <span className="td__link__icons clearfix">
                    <img src={remove} className="remove__icon" alt="" />
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
    text-align: left;
  }

  .thead {
    text-align: left;
    color: ##757575;
    vertical-align: middle;
  }

  .th {
    color: #757575;
    padding: 1em 1.5em 1em 1em;
    background-color: #f5f5f5;
    font-weight: normal;
    border-right: solid 0.25px #70707040;
    // width: 20%;
    vertical-align: middle;
  }

  .th__title {
    vertical-align: middle;
  }

  .arrows {
    vertical-align: bottom;
    float: right;
    // margin-left: 2rem;
  }

  @media only screen and (max-width: 1200px) {
    .th {
      padding: 0.5em 0.3em;
      vertical-align: middle;
    }
    // .arrows {
    //   margin-top: 1.15px;
    // }
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
    border-right: solid 0.25px #70707040;

    vertical-align: middle;
    padding: 0.5em 0.8em;
  }

  .td__img {
    width: 3em;
    display: inline-block;
    float: left;
    vertical-align: middle;
    margin-right: 0.5em;
    width: 21%;
  }

  .td__text {
    vertical-align: middle;
    display: inline-block;
    font-size: inherit;
  }

  .td__text__title {
    color: #2a2a2a;
    display: inline-block;
    font-size: inherit;
  }

  .td__text__subtitle {
    color: #727272;
    font-size: inherit;
  }

  .td__link__text {
    color: #035ba8;
  }

  .td__link__icons {
    float: right;
    // margin-right: 1rem;
    vertical-align: middle;
  }

  .center__icon {
    top: 50%;
    transform: translateY(50%);
  }

  .status {
    color: green;
    border: solid 1px green;
    padding: 0.5em 1em;
    border-radius: 4px;
    vertical-align: middle;
  }

  .td__center__text {
    text-align: center;
  }

  .last__td {
    border-right: none;
    padding: 0.5em 0.2em 0.5em 0;
  }

  // icons
  .message__icon {
    cursor: pointer;

    display: inline-block;
    width: 13px;
    margin-right: 10px;
    @media only screen and (min-width: 1200px) {
      width: 14px;
    }

    @media only screen and (min-width: 1440px) {
      width: 18px;
    }
  }

  .remove__icon {
    display: inline-block;
    width: 13px;
    cursor: pointer;
    @media only screen and (min-width: 1200px) {
      width: 14px;
    }
    @media only screen and (min-width: 1440px) {
      width: 18px;
    }
  }
`;
