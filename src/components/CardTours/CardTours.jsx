import React, { Component } from "react";

export default class CardTours extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { result, secondColumnStart } = this.props;
    return (
      <div className="p-2 flex bg-white flex-row justify-between items-start">
        <div className="w-1/2">
          {result.slice(0, secondColumnStart).map(item => (
            <div className=" rounded set-top-tour mx-1 my-1 sD:m-4">
              <div className="flex flex-col p-2 justify-start set-background-color-v2">
                <h1 className="text-18">{item["title"]}</h1>
                <p className="text-11 text-gray-800">{item["body"]}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="w-1/2">
          {result.slice(secondColumnStart).map(item => (
            <div className=" rounded set-top-tour mx-1 my-1 sD:m-4">
              <div className="flex flex-col p-2 justify-start set-background-color-v2">
                <h1 className="font-size-res">{item["title"]}</h1>
                <p>{item["body"]}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
