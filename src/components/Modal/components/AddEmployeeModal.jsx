import React from "react";
import styled from "styled-components";

export default function AddEmployeeModal(props) {
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
    height: 80vh;
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

  @media only screen and (min-width: 1250px) {
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
  .departmentAndCv {
    width: 39%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    color: #ababab;
  }

  .department__input {
    padding: 0.5rem 1rem;

    border: solid 1px #888888;
    margin-bottom: 1rem;
    margin-right: 1.5rem;
    flex-basis: 200px;
    background-color: #fafafa;
    border-radius: 4px;
    flex-grow: 1;
    flex-shrink: 0;
  }
  // file upload

  .fileContainer {
    // fake div
    position: relative;
    display: flex;
    align-items: center;
    width: 40%;
    flex-grow: 1;
    flex-shrink: 0;

    margin-bottom: 1rem;
  }

  .selectedFile {
    // selectedFile
    opacity: 0;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    padding: 0.5rem 0;
  }

  .inputFile {
    //fakeInpue
    width: 40%;
    padding: 0.5rem;
    border: solid 1px #888888;
    margin-right: 1.5rem;
    background-color: #fafafa;
    border-radius: 4px;
  }

  .upload {
    //buttonImage
    color: #265ba1;
    text-decoration: underline;
  }
  .add {
    width: 21%;
    margin-left: 10.5%;
    padding: 0.5rem;
    background-color: #ffcc4e;
    color: #fff;
  }

  .status {
    margin-bottom: 4rem;
  }
`;
