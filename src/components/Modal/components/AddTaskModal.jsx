import React from "react";
import styled from "styled-components";

export default function AddTaskModal(props) {
  return <Container>{props.children}</Container>;
}

const Container = styled.div`
  .modal-main {
    margin: 0 auto;
    background-color: white;
    position: fixed;
    background: white;
    width: 90%;
    margin-left: 40px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 54vh;
    margin-top: 2rem;
  }

  .header {
    display: flex;
    max-width: 50%;
    justify-content: space-between;
    align-items: center;
  }

  .header__back {
    cursour: pointer;
    font-size: 2rem;
    color: white;
    padding: 0 1rem;
    background-color: #2c2c2c;
  }

  .header__tittle {
  }

  // form -------------------------------------------------
  .form {
    padding-top: 1rem;
    height: 80%;
    width: 84%;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: space-between;
    flex-direction: column;
    margin: 0 auto;
  }

  .form__label__input {
    margin-bottom: 1rem;
    width: 39%;
    padding: 0.5rem 1rem;

    border: solid 1px #888888;
    color: #ababab;
    background-color: #fafafa;
    border-radius: 4px;
  }

  .form__select {
    margin-bottom: 1rem;
    width: 39%;
    padding: 0.5rem 1rem;

    border: solid 1px #888888;
    color: #ababab;
    background-color: #fafafa;
    border-radius: 4px;
  }

  .text {
    flex-basis: 150px;
  }
  .add {
    width: 21%;
    margin-left: 10.5%;
    padding: 0.5rem;
    background-color: #ffcc4e;
    color: #fff;
  }
`;
