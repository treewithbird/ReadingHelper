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
import Feed from "./components/feed.js";
import { Argument, Proposition } from "./components/primitives/argument.js";

export default function App() {
  //<PropositionInspection data={inspectiondata} />
  return (
    <div className="temp_layout">
      <div className="temp_layout2">
        <div>Logo....Sign in/Sign up</div>
        <br />
        <br />
        <br />
        <br />
        <div>Trending keywords</div>
        <br />
        <br />
        <br />
        <br />
        <div>Notifications</div>
        <br />
        <br />
        <br />
        <br />
        <div>User info</div>
        <br />
        <br />
        <br />
        <br />
        <div>AD</div>
        <br />
        <br />
        <br />
        <br />
      </div>
      <div className="temp_layout2">
        Main feed
        <br />
        <br />
        <br />
        <br />
        <Feed />
      </div>
      <div className="temp_layout2">
        Details
        <br />
        <br />
        <br />
        <br />
        <PropositionInspection data={inspectiondata} />
      </div>
    </div>
  );
}
