import React from "react";
import styled from "styled-components";

export default function TableActions(props) {
  return (
    <Container>
      <div className="left">
        <label className="searchLabel" for="search">
          search
          <input
            className="search"
            // onChange={e => props.searchHandler(e.target.value, undefined)}
            onChange={e => props.changeName(e.target.value)}
            type="search"
            name="search"
            id="search"
            placeholder={props.search}
          />
        </label>

        <select
          // onChange={e => props.departementFilter(undefined,e.target.value)}
          onChange={e => props.changeDepartment(e.target.value)}
          className="select"
          defaultValue="all"
          name="departments"
        >
          <option value="all">all employees</option>
          <option value="hr">hr</option>
          <option value="sales">sales</option>
          <option value="marketing">marketing</option>
        </select>
      </div>
      <div className="right">
        <button className="addEmployee" onClick={e => props.addHandler()}>
          {props.add}
        </button>
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
    border-radius: 5px;
  }
`;
