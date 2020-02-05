import React from "react";
import Card from "./Card";
import Title from "../../../../components/Title/Title";
import { cards } from "./data";
const ListCards = () => {
  return (
    <div className="pt-8 pb-4 px-8 bg-gray">
      <Title title="why our website?" subTitle="easy, simple and smooth" />
      <div className="lg:flex md:block justify-between">
        {cards.map(card => (
          <Card data={card} />
        ))}
      </div>
    </div>
  );
};

export default ListCards;
