import React from "react";

import { Argument } from "./primitives/argument.js";
import {
  PropositionMaker,
  ConnectionMaker
} from "./primitives/opinion_adder.js";
import { PageSelector, ButtonSet1, ButtonSet2 } from "./primitives/buttons.js";
import {
  DetailView1,
  DetailView2,
  DetailView3
} from "./primitives/detailview.js";

import {
  data_argument,
  data_prop1,
  data_prop2,
  data_prop3,
  data_opinion1,
  data_opinion2,
  detaildata,
  inspectiondata
} from "../data_example.js";

const Contents = (props) => {
  return (
    <div>
      {props.data.contents.map((o, i) => (
        <div className="vstack" key={i}>
          <br />
          <div className={"content_description"}>Argument</div>
          <Argument data={o} />
        </div>
      ))}
    </div>
  );
};

const Feed = (props) => {
  // TODO: Get data from server
  return (
    <div>
      <div className="vstack">
        <div className={"content_description"}>Make a proposition!</div>
        <PropositionMaker bg="#fff" />
        <ButtonSet2 />
      </div>
      <Contents data={{ contents: [data_argument, data_argument] }} />
      <br />
      <Contents data={{ contents: [data_argument, data_argument] }} />
    </div>
  );
};

export default Feed;
