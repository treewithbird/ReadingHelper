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

  const is_horizontal = window.innerWidth / window.innerHeight > 1;

  return (
    <div className="temp_layout">
      {is_horizontal ? (
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
      ) : null}
      <div className="temp_layout2">
        Main feed
        <br />
        <br />
        <br />
        <br />
        <Feed />
      </div>
      {is_horizontal ? (
        <div className="temp_layout2">
          Details
          <br />
          <br />
          <br />
          <br />
          <PropositionInspection data={inspectiondata} />
        </div>
      ) : null}
    </div>
  );
}
