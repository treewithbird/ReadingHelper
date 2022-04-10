import React from "react";
import "./style.scss";

import {
  data_argument,
  data_prop1,
  data_prop2,
  data_prop3,
  data_opinion1,
  data_opinion2,
  detaildata,
  inspectiondata
} from "./data_example.js";
import PropositionInspection from "./components/proposition_inspection.js";
import { Argument, Proposition } from "./components/primitives/argument.js";

export default function App() {
  //<PropositionInspection data={inspectiondata} />
  return (
    <div className="temp_layout">
      <div className="temp_layout2">
        <Argument data={data_argument} />
        <br />
        <br />
        <br />
        <Argument data={data_argument} />
      </div>
      <div className="temp_layout2">
        <Argument data={data_argument} />
        <br />
        <br />
        <br />
        <Argument data={data_argument} />
      </div>
      <div className="temp_layout2">
        <PropositionInspection data={inspectiondata} />
      </div>
    </div>
  );
}
