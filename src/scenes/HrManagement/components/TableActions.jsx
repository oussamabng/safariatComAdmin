import React from "react";
import styled from "styled-components";

export default function TableActions(props) {
  const renderSearch = () => {
    return props.view === "employees" ? (
      <label className="searchLabel" for="search">
        <i className="fas fa-search "></i>
        <input
          className="search"
          onChange={e => props.searchedName(e.target.value)}
          type="search"
          name="search"
          id="search"
          placeholder={props.search}
        />
      </label>
    ) : (
      <label className="searchLabel" for="search">
        search
        <input
          className="search"
          onChange={e => props.searchedTask(e.target.value)}
          type="search"
          name="search"
          id="search"
          placeholder={props.search}
        />
      </label>
    );
  };

  const renderSelect = () => {
    return (
      <select
        onChange={e => props.searchedDepartment(e.target.value)}
        className="select"
        defaultValue="all"
        name="departments"
      >
        {props.selectOptions.map(el => (
          <option value={el}>{el}</option>
        ))}
      </select>
    );
  };

  const renderAddButton = () => {
    return props.view === "employees" ? (
      <button className="addEmployee addBtn" onClick={e => props.addHandler()}>
        {props.add}
      </button>
    ) : (
      <button className="addTasks addBtn" onClick={e => props.addHandler()}>
        {props.add}
      </button>
    );
  };

  return (
    <Container>
      <div className="left">
        {renderSearch()}
        {renderSelect()}
      </div>
      <div className="right">
        {renderAddButton()}
        <a href="#" className="infoLink">
          i
        </a>
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;

  justify-content: space-between;

  .search {
    min-width: 14.4rem;
    padding: 1rem 1.6rem;
    color: grey;
    background-color: transparent;
  }

  .searchLabel {
    min-width: 14.4rem;
    padding: 1rem 0 1rem 1.25rem;
    background-color: #eee;
    margin-right: 0.6rem;
  }

  .select {
    min-width: 14.4rem;
    padding: 1rem 1.6rem;
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
    border-radius: 15px;
  }

  .addBtn {
    background-color: #084c61;
    color: #fff;
    padding: 1rem 4rem;
    border-radius: 15px;
    margin-right: 1.5rem;
  }

  .infoLink {
    font-size: 1rem;
    color: #b3b8bd;
    border: solid 1px #b3b8bd;
    border-radius: 100%;
    vertical-align: middle;
    cursor: pointer;
    padding: 0.2rem 0.5rem;
  }
`;
