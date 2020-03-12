import React from "react";
import styled from "styled-components";

export default function HrTable(props) {
  const tableData = () => {
    const employees = props.employees;

    return (
      <tbody>
        {employees.map((el, index) => {
          return (
            <tr>
              <td>{el.name}</td>
              <td>
                <span>BirthDay: {el.personalInfo.birthDate} </span>
                <br />
                <span>status: {el.personalInfo.status} </span>
                <br />
                <span>phone: {el.personalInfo.phone} </span>
              </td>
              <td>{el.department}</td>
              <td>{el.hireDate}</td>
              <td>
                <a href={el.employeeDocument.link}>PDF_CV.pdf</a>
              </td>
            </tr>
          );
        })}
      </tbody>
    );
  };

  const renderTable = () => {
    const employees = props.employees;
    return (
      <Container>
        <table>
          <thead>
            <tr>
              <th>Status</th>
              <th>Personal Info</th>
              <th>Departement</th>
              <th>Hire Date</th>
              <th>Employee Document</th>
            </tr>
          </thead>
          {tableData(employees)}
        </table>
      </Container>
    );
  };

  {
    /* <div>{props.employees ? props.employees[0].name : null}</div> */
  }
  return renderTable();
}

const Container = styled.div``;
