import React from "react";

import { Argument, VoteView } from "./primitives/argument.js";
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

const PropositionInspection = (props) => {
  const [curr_page, set_curr_page] = React.useState(0);

  const page0 = () => {
    return (
      <div className="vstack">
        <div className={"content_description"}>Add your opinion:</div>
        <ConnectionMaker />

        <br />
        <div className={"content_description"}>Community Opinions:</div>
        {props.data.opinions.map((o, i) => (
          <Argument data={o} key={i} />
        ))}
      </div>
    );
  };
  const page1 = () => {
    return (
      <div className="vstack">
        <div className={"content_description"}>User info:</div>
        <DetailView3 data={props.data.detail_data} />
        <br />
        <div className={"content_description"}>Content created:</div>
        {props.data.created_contents.map((o, i) => (
          <Argument data={o} key={i} />
        ))}
      </div>
    );
  };
  const page2 = () => {
    return (
      <div className="vstack">
        <div className={"content_description"}>Voters:</div>
        {props.data.voters.map((o, i) => (
          <VoteView data={o} key={i} />
        ))}
      </div>
    );
  };
  const page3 = () => {
    return (
      <div className="vstack">
        <div className={"content_description"}>Mentions:</div>
        {props.data.mentions.map((o, i) => (
          <Argument data={o} key={i} />
        ))}
      </div>
    );
  };

  let display_page = [page0, page1, page2, page3][curr_page];

  return (
    <div className="vstack">
      <Argument data={props.data.argument_data} />
      <ButtonSet1 />
      <br />
      <div className={"content_description"}>Proposition info:</div>
      <DetailView1 data={props.data.detail_data} />
      <DetailView2 data={props.data.detail_data} />
      <br />
      <PageSelector set_curr_page={set_curr_page} />
      <br />
      {display_page()}
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default PropositionInspection;
