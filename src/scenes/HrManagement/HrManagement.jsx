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
      initialEmployees: employees,
      initialTasks: tasks
    });
  }

  toggleViewHandler = (e, value) => {
    switch (value) {
      case "employeesView":
        this.setState({
          isEmployeesView: true,
          isTasksView: false
        });
        break;
      case "tasksView":
        this.setState({
          isEmployeesView: false,
          isTasksView: true
        });

        break;
      default:
        console.log("view Toggle Error");
        break;
    }
  };

  addEmployeeHandler() {
    console.log("add Employee");
  }

  addTasksHandler() {
    console.log("add Tasks");
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
          add="+Add Employee"
          search="search employees"
          view="employees"
          selectOptions={this.state.departmentsOptions}
        />
      );
    } else if (isTasksView) {
      return (
        <TableActions
          addHandler={this.addTasksHandler}
          add="add Task"
          search="search tasks"
          view="tasks"
          selectOptions={this.state.tasksTypes}
        />
      );
    }
  }

  renderTable() {
    const filteredEmployees = this.state.filteredEmployees
      ? this.state.filteredEmployees
      : this.state.initialEmployees;

    const filteredTasks = this.state.filteredTasks
      ? this.state.filteredTasks
      : this.state.initialTasks;
    const view = this.state.isEmployeesView ? "employees" : "tasks";

    if (filteredEmployees && view === "employees") {
      return <HrTable employees={filteredEmployees} />;
    } else if (filteredTasks && view === "tasks") {
      return <HrTable tasks={filteredTasks} />;
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

          <main className="hrManagement">
            <div className="hrManagement__top">
              <h3 className="hrManagement__top__title">HR HrManagement</h3>
              <hr className="hrManagement__top__hr"></hr>
              <div className="hrManagement__top__buttons">
                <button
                  className="hrManagement__top__button employeesViewBTN"
                  onClick={e => this.toggleViewHandler(e, "employeesView")}
                >
                  Employees Management
                </button>
                <button
                  className="hrManagement__top__button tasksViewBTN"
                  onClick={e => this.toggleViewHandler(e, "tasksView")}
                >
                  Tasks Management
                </button>
              </div>
            </div>
            <div className="hrManagement__content">
              {this.renderTableActions()}
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
  .hrManagement {
    width: 87%;
    // padding: 1rem 1.6rem;
    margin: 0 auto;
  }

  .hrManagement__top {
    margin-top: 2rem;
    padding: 0 1.6rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .hrManagement__top__title {
    vertical-align: middle;
    font-size: 1.2rem;
    color: #171717;
  }

  .hrManagement__top__hr {
    background: #000;
    border: 0;
    color: #000;
    height: 1px;
    width: 50%;
  }

  .hrManagement__top__button {
    display: inline-block;
    vertical-align: middle;
    padding: 0.65rem;
    border-radius: 30px;
  }

  .employeesViewBTN {
    color: white;
    background-color: #ffcc4e;
    margin-right: 0.5rem;
  }

  .tasksViewBTN {
    color: #4d4d4d;
    background-color: white;
  }

  .hrManagement__content {
    background-color: #ffffff;
    padding: 1rem 1.6rem;
    margin-top: 2rem;
  }
`;
