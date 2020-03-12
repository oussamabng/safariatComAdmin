import React, { Component } from "react";
import HrTable from "./components/HrTable";
import styled from "styled-components";

import data from "./data";
import TableActions from "./components/TableActions";

export default class HrManagement extends Component {
  state = {
    initialEmployees: null,
    filteredEmployees: null,
    // initialTasks: null,
    // filteredTasks:null,

    searchedName: "",
    searchedDepartment: "all",

    isEmployeesView: true,
    isTasksView: false
  };

  componentDidMount() {
    this.setState({
      initialEmployees: data
    });
  }

  addEmployeeHandler() {
    console.log("add Employee");
  }

  changeSearchedName(name) {
    this.setState(
      { searchedName: name },
      this.filterEmployees(name, this.state.searchedDepartment)
    );
  }

  changeSearchedDepartment(department) {
    this.setState(
      { searchedDepartment: department },
      this.filterEmployees(this.state.searchedName, department)
    );
  }

  employeesByName(name, employees) {
    const filteredEmployees = employees.filter((el, index) => {
      return el.name.toLowerCase().includes(name);
    });
    return filteredEmployees;
  }

  employeesByDepartment(department, employees) {
    const filteredEmployees = employees.filter((el, index) => {
      return el.department.toLowerCase().includes(department);
    });
    return filteredEmployees;
  }

  filterEmployees(name = "", department = "all") {
    // DEEP COPY ( need refactor later)
    let employees;
    let filteredEmployees;
    if (name === "" || department === "all") {
      employees = JSON.parse(JSON.stringify(this.state.initialEmployees));
      if (name !== "") {
        filteredEmployees = this.employeesByName(name, employees);
      } else if (department !== "all") {
        filteredEmployees = this.employeesByDepartment(department, employees);
      }
    } else if (name !== "" && department !== "all") {
      employees = JSON.parse(JSON.stringify(this.state.filteredEmployees));
      const tempData = this.employeesByName(name, employees);
      filteredEmployees = this.employeesByDepartment(department, tempData);
    }

    this.setState({ filteredEmployees });
  }

  render() {
    const filteredEmployees = this.state.filteredEmployees
      ? this.state.filteredEmployees
      : this.state.initialEmployees;
    return (
      <Container>
        <nav>navbar</nav>
        <div className="main">
          <div className="sidebar">sidebar</div>
          {/* //main content  */}
          {/* //Table top 
                  // Table Content */}
          <main className="hrManagement">
            <TableActions
              changeName={name => this.changeSearchedName(name)}
              changeDepartment={department =>
                this.changeSearchedDepartment(department)
              }
              addHandler={this.addEmployeeHandler}
              add="add Employee"
              search="search employees"
            />
            {filteredEmployees ? (
              <HrTable
                employees={filteredEmployees}
                // searchedEmployee={this.state.searchedEmployee}
              />
            ) : null}
          </main>
        </div>
      </Container>
    );
  }
}

const Container = styled.div`
  background-color: #eee;
  .hrManagement {
    width: 87%;
    background-color: white;
    border-radius: 10px;
    padding: 1rem 1.6rem;
    margin: 0 auto;
  }

  .main {
    display: flex;
  }
`;
