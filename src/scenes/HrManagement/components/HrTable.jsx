import React from "react";
import styled from "styled-components";

export default function HrTable(props) {
  const employeesTable = employees => {
    return (
      <table class="table font-montserrat">
        <thead className="thead">
          <tr className="tr">
            <th className="th first__th">name</th>
            <th className="th">Personal Info</th>
            <th className="th">Departement</th>
            <th className="th">Hire Date</th>
            <th className="th last__th">Employee Document</th>
          </tr>
        </thead>
        <tbody className="tbody">
          {employees.map((el, index) => {
            return (
              <tr key={`row-${index}`} className="tr">
                <td className="td">{el.name}</td>
                <td className="td">
                  <span>BirthDay: {el.personalInfo.birthDate} </span>
                  <br />
                  <span>status: {el.personalInfo.status} </span>
                  <br />
                  <span>phone: {el.personalInfo.phone} </span>
                </td>
                <td className="td">{el.department}</td>
                <td className="td">{el.hireDate}</td>
                <td className="td last__td">
                  <a href={el.employeeDocument.link}>PDF_CV.pdf</a>
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
            <th className="th first__th">Status</th>
            <th className="th"> task</th>
            <th className="th">Responsible</th>
            <th className="th">Creation Date</th>
            <th className="th last__th">Delivery Date</th>
          </tr>
        </thead>
        <tbody className="tbody">
          {tasks.map((el, index) => {
            return (
              <tr key={`row-${index}`} className="tr">
                <td className="td">{el.status}</td>
                <td className="td">{el.task}</td>
                <td className="td">{el.Responsible}</td>
                <td className="td">{el.creationDate}</td>
                <td className="td last__td">{el.deliveryDate}</td>
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
  .table {
    width: 100%;
  }

  .thead {
    text-align: left;
    color: ##757575;
  }

  .tbody {
  }

  .tr {
  }

  .th {
    color: #757575;
    padding: 2rem 1.8rem;
    background-color: #f5f5f5;
    fonts-size: 0.93rem;
    font-weight: normal;
    border-right: solid 0.5px #707070;
  }

  .first__th {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 12px;
  }

  .last__th {
    border-top-right-radius: 10px;
    border-bottom-right-radius: 12px;
    border-right: none;
  }

  .td {
    border-right: solid 0.5px #707070;
    vertical-align: middle;
    padding: 0.5rem 1rem;
  }

  .last__td {
    border-right: none;
  }
`;
