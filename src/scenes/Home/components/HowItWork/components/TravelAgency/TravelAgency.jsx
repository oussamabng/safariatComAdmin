import React from "react";
import styled from "styled-components";
// custom components
import Title from "../../../../../../components/Title/Title";
import Paragraph from "../Paragraph/Paragraph";
// Images
import fly from "./images/fly.png";
import office from "./images/office.png";
// data
import { paragraphs } from "./data";
const TravelAgency = () => {
  return (
    <Wrapper className="px-20 py- bg-white">
      <Title title="how does it work?" subTitle="everything you need" />
      <div className="flex justify-around">
        <div>
          <img src={office} alt="officeImage" className="officeImage" />
          <img src={fly} className="flyImage" alt="" />
        </div>
        <div className="">
          {paragraphs.map(paragraph => (
            <Paragraph
              key={paragraph.id}
              title={paragraph.title}
              body={paragraph.body}
            />
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .flyImage {
    position: absolute;
    z-index: 3;
    top: 75rem;
    left: 12rem;
    width: 420px;
  }
  .officeImage {
    position: relative;
    top: -2rem;
    left: -2rem;
    z-index: 2;
    &:before {
        position: absolute;
        content: "";
        width: 192px;
        height: 158px;
        opacity: 0.62;
        border-radius: 25.5px;
        background-color: #eaf7fa;
      }
  }
`;

export default TravelAgency;
