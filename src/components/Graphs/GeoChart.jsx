import React, { Component } from "react";
import {
  MapsComponent,
  LayersDirective,
  LayerDirective,
  MarkersDirective,
  MarkerDirective,
  Marker,
  Inject,
  Zoom
} from "@syncfusion/ej2-react-maps";
import { world_map } from "./data/WorldMap_Countries.ts";
export default class GeoChart extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <MapsComponent className="w-full" id="maps">
        <Inject services={[Marker, Zoom]} />
        <LayersDirective>
          <LayerDirective
            shapeData={world_map}
            shapeSettings={{
              fill: "#084C61"
            }}
          >
            <MarkersDirective>
              <MarkerDirective
                visible={true}
                shape={"Circle"}
                fill="#FFCC4E"
                dataSource={[
                  {
                    latitude: 49.95121990866204,
                    longitude: 18.468749999999998,
                    name: "Europe"
                  },
                  {
                    latitude: 59.88893689676585,
                    longitude: -109.3359375,
                    name: "North America"
                  },
                  {
                    latitude: -6.64607562172573,
                    longitude: -55.54687499999999,
                    name: "South America"
                  },
                  {
                    latitude: 11.99950564947161,
                    longitude: 23.471668402596443,
                    name: "Algeria"
                  }
                ]}
              ></MarkerDirective>
            </MarkersDirective>
          </LayerDirective>
        </LayersDirective>
      </MapsComponent>
    );
  }
}
