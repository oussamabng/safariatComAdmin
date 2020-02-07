import React from "react";

const Paragraph = ({title, body}) => {
  return (
    <div className="text-blackgray py-2 font-montserrat max-w-xl text-left float-right pr-4">
      <h3 className="text-md font-bold">{title}</h3>
      <p className="text-xs">
        {body}
      </p>
    </div>
  );
};

export default Paragraph;
