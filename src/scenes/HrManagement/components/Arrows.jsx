import React from "react";
import styled from "styled-components";
import upArrow from "../../../assets/upArrow.svg";
import downArrow from "../../../assets/downArrow.svg";

export default function Arrows() {
  return (
    <Container className="arrows text-11 sD:text-13 mD:text-15 lD:text-21s">
      {/* <i className="fas fa-chevron-up"></i>
      <i className="fas fa-chevron-down"></i> */}
      <img src={upArrow} className="upArrow arrow" alt="" />
      <img src={downArrow} className="downArrow arrow" alt="" />
    </Container>
  );
}

const Container = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-item: center;

  .upArrow {
    vertical-align: middle;
    margin-bottom: 0.4em;
  }

  .downArrow {
    vertical-align: middle;
    margin-top: 0.4em;
  }

  .arrow {
    max-width: 9px;
  }

  @media only screen and (min-width: 1200px) {
    .arrow {
      max-width: 14px;
    }
  }
`;
