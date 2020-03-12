import React, { Component } from "react";
import HrTable from "./components/HrTable";
import styled from "styled-components";

import { employees, tasks } from "./data";
import TableActions from "./components/TableActions";

export default class HrManagement extends Component {
  state = {
    initialEmployees: null,
    filteredEmployees: null,
    searchedName: "",
    searchedDepartment: "all",

    initialTasks: null,
    filteredTasks: null,
    searchedTask: "",
    searchedTaskType: "all",

    isEmployeesView: true,
    isTasksView: false,

    departmentsOptions: ["all", "hr", "sales", "marketing"],
    tasksTypes: []
  };

  componentDidMount() {
    this.setState({
      initialEmployees: employees
    });
  }

  addEmployeeHandler() {
    console.log("add Employee");
  }

  // Employees functions
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
    let employees = JSON.parse(JSON.stringify(this.state.initialEmployees));
    let filteredEmployees;
    if (name === "" || department === "all") {
      if (name !== "") {
        filteredEmployees = this.employeesByName(name, employees);
      } else if (department !== "all") {
        filteredEmployees = this.employeesByDepartment(department, employees);
      }
    } else if (name !== "" && department !== "all") {
      const tempData = this.employeesByDepartment(department, employees);
      filteredEmployees = this.employeesByName(name, tempData);
    }

    this.setState({ filteredEmployees });
  }
  // Tasks functions

  changeSearchedTasks(task) {
    this.setState(
      { searchedTask: task },
      this.filterTasks(task, this.state.searchedTaskType)
    );
  }

  changeSearchedTaskType(taskType) {
    this.setState(
      { searchedTask: taskType },
      this.filterTasks(this.state.searchedTask, taskType)
    );
  }

  tasksByName(task, tasks) {
    const filteredTasks = tasks.filter((el, index) => {
      return el.task.toLowerCase().includes(task);
    });
    return filteredTasks;
  }

  tasksByType(taskType, tasks) {
    const filteredTasks = tasks.filter((el, index) => {
      return el.taskType.toLowerCase().includes(taskType);
    });
    return filteredTasks;
  }

  filterTasks(task = "", taskType = "all") {
    // DEEP COPY ( need refactor later)
    let tasks = JSON.parse(JSON.stringify(this.state.initialTasks));
    let filteredTasks;
    if (task === "" || taskType === "all") {
      if (task !== "") {
        filteredTasks = this.employeesByName(task, tasks);
      } else if (taskType !== "all") {
        filteredTasks = this.employeesByDepartment(taskType, tasks);
      }
    } else if (task !== "" && taskType !== "all") {
      const tempData = this.employeesByName(task, tasks);
      filteredTasks = this.employeesByDepartment(taskType, tempData);
    }

    this.setState({ filteredTasks });
  }

  // Render Functions

  renderTableActions() {
    const isEmployeesView = this.state.isEmployeesView;
    const isTasksView = this.state.isTasksView;

    if (isEmployeesView) {
      return (
        <TableActions
          searchedName={name => this.changeSearchedName(name)}
          searchedDepartment={department =>
            this.changeSearchedDepartment(department)
          }
          addHandler={this.addEmployeeHandler}
          add="add Employee"
          search="search employees"
          view="employees"
          selectOptions={this.state.departmentsOptions}
        />
      );
    } else if (isTasksView) {
      return (
        <TableActions
          // searchedTask={task => this.changeSearchedName(task)}
          add="add Task"
          search="search tasks"
          view="tasks"
          selectOptions={this.state.tasksTypes}
        />
      );
    }
  }

  render() {
    const filteredEmployees = this.state.filteredEmployees
      ? this.state.filteredEmployees
      : this.state.initialEmployees;

    const filteredTasks = this.state.filteredTasks
      ? this.state.filteredTasks
      : this.state.initialTasks;
    return (
      <Container>
        <nav>navbar</nav>

        <div className="main">
          <div className="sidebar">sidebar</div>

          <main className="hrManagement">
            {this.renderTableActions()}
            {/* {this.renderTable()} */}

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
