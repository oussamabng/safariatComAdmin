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
        <i className="fas fa-search "></i>
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
    return props.view === "employees" ? (
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
    ) : (
      <select
        // onChange={e => props.searchedDepartment(e.target.value)}
        className="select"
        defaultValue="type1"
        name="types"
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
  flex-wrap: wrap;

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
    border-radius: 4px;
  }

  .right {
    vertical-align: middle;
  }

  .addBtn {
    background-color: #084c61;
    color: #fff;
    padding: 1rem 4rem;
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

  @media only screen and (max-width: 1200px) {
    .addBtn {
      padding: 0.7rem 2rem;
    }

    .select {
      padding: 0.7rem 1.2rem;
    }

    .searchLabel,
    .search {
      padding: 0.7rem 0.4rem;
    }

    .infoLink {
      padding: 0.2rem 0.3rem;
    }
  }
`;
