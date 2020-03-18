import React from "react";
import styled from "styled-components";

export default function TableActions(props) {
  const renderSearch = () => {
    if (props.view === "employees") {
      return (
        <label className="searchLabel" htmlFor="search">
          <i className="fas fa-search "></i>
          <input
            className="search font-montserrat text-9 sD:text-11 mD:text-13 lD:text-18"
            onChange={e => props.searchedName(e.target.value)}
            type="search"
            name="search"
            id="search"
            placeholder={props.search}
          />
        </label>
      );
    } else if (props.view === "tasks") {
      return (
        <label className="searchLabel" for="search">
          <i className="fas fa-search "></i>
          <input
            className="search font-montserrat text-9 sD:text-11 mD:text-13 lD:text-18"
            onChange={e => props.searchedTask(e.target.value)}
            type="search"
            name="search"
            id="search"
            placeholder={props.search}
          />
        </label>
      );
    } else if (props.view === "tours") {
      return (
        <label className="searchLabel" for="search">
          <i className="fas fa-search "></i>
          <input
            className="search font-montserrat text-9 sD:text-11 mD:text-13 lD:text-18"
            // onChange={e => props.searchedTask(e.target.value)}
            type="search"
            name="search"
            id="search"
            placeholder={props.search}
          />
        </label>
      );
    } else if (props.view === "products") {
      return (
        <label className="searchLabel" for="search">
          <i className="fas fa-search "></i>
          <input
            className="search font-montserrat text-9 sD:text-11 mD:text-13 lD:text-18"
            // onChange={e => props.searchedTask(e.target.value)}
            type="search"
            name="search"
            id="search"
            placeholder={props.search}
          />
        </label>
      );
    } else {
      return null;
    }
  };

  const renderSelect = () => {
    return (
      <select
        // onChange={e => props.searchedDepartment(e.target.value)}
        className="select text-9 sD:text-11 mD:text-13 lD:text-18"
        defaultValue="all"
        name="departments"
      >
        {props.selectOptions.map((el, index) => (
          <option key={`option-${index}`} value={el}>
            {el}
          </option>
        ))}
      </select>
    );
    // return props.view === "employees" ? (
    //   <select
    //     onChange={e => props.searchedDepartment(e.target.value)}
    //     className="select text-9 sD:text-11 mD:text-13 lD:text-18"
    //     defaultValue="all"
    //     name="departments"
    //   >
    //     {props.selectOptions.map((el, index) => (
    //       <option key={`option-${index}`} value={el}>
    //         {el}
    //       </option>
    //     ))}
    //   </select>
    // ) : (
    //   <select
    //     // onChange={e => props.searchedDepartment(e.target.value)}
    //     className="select text-9 sD:text-11 mD:text-13 lD:text-18"
    //     defaultValue="type1"
    //     name="types"
    //   >
    //     {props.selectOptions.map(el => (
    //       <option value={el}>{el}</option>
    //     ))}
    //   </select>
    // );
  };

  const renderAddButton = () => {
    if (props.view === "employees") {
      return (
        <button
          onClick={props.addEmployee}
          className="addEmployee addBtn font-montserrat text-11 sD:text-13 mD:text-15 lD:text-21"
          // onClick={e => props.addHandler()}
        >
          {props.add}
        </button>
      );
    } else if (props.view === "tasks") {
      return (
        <button
          className="addTasks addBtn font-montserrat text-11 sD:text-13 mD:text-15 lD:text-21 "
          onClick={props.addTask}
        >
          {props.add}
        </button>
      );
    } else if (props.view === "tours") {
    } else {
      return null;
    }
  };

  return (
    <Container>
      <div className="left">
        {renderSearch()}
        {renderSelect()}
      </div>
      <div className="right">
        {renderAddButton()}
        {props.view === "employees" || props.view === "tasks" ? (
          <a href="#" className="infoLink">
            i
          </a>
        ) : null}
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;

  justify-content: space-between;
  flex-wrap: wrap;

  .left {
    display: flex;
    align-item: center;
    justify-content: space-between;
    flex-shrink: 1;
  }

  .searchLabel {
    padding-left: 1rem;
    background-color: #eee;
    margin-right: 1rem;
  }

  .search {
    padding: 0.5em 0.5rem;
    color: grey;
    background-color: transparent;
  }

  .select {
    padding: 0.5em 7em 0.5em 1em;

    color: grey;
    border: solid 1px black;
    // appearance: none;
  }
  .select,
  .search {
    outline: none;
  }
  .select,
  .searchLabel {
    border-radius: 4px;
  }

  .right {
    vertical-align: middle;
  }

  .addBtn {
    background-color: #084c61;
    color: #fff;
    padding: 0.5em 2.8em;
    border-radius: 4px;
    margin-right: 1.5rem;
    vertical-align: middle;
  }

  .infoLink {
    // position: absolute;
    font-size: 1rem;
    color: #b3b8bd;
    border: solid 1px #b3b8bd;
    border-radius: 100%;
    vertical-align: middle;
    cursor: pointer;
    padding: 0.2rem 0.5rem;
  }

  // @media only screen and (max-width: 1200px) {
  //   .addBtn {
  //     padding: 0.7rem 2rem;
  //   }

  //   .select {
  //     padding: 0.7rem 1.2rem;
  //   }

  //   .searchLabel,
  //   .search {
  //     padding: 0.7rem 0.4rem;
  //   }

  //   .infoLink {
  //     padding: 0.2rem 0.3rem;
  //   }
  // }
`;
