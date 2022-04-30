import React from "react";

const PropositionMaker = (props) => {
  const [vote, setVote] = React.useState([true, false, false]);
  const [background, setBackground] = React.useState(props.bg);

  const t_button = (
    <button
      className={"t_button expand_area" + (vote[0] ? " t_bg" : "")}
      onClick={() => setVote([true, false, false])}
    >
      {vote[0] + 0}
    </button>
  );

  const f_button = (
    <button
      className={"f_button expand_area" + (vote[1] ? " f_bg" : "")}
      onClick={() => setVote([false, true, false])}
    >
      {vote[1] + 0}
    </button>
  );

  const b_button = (
    <button
      className={"b_button expand_area" + (vote[2] ? " b_bg" : "")}
      onClick={() => setVote([false, false, true])}
    >
      {vote[2] + 0}
    </button>
  );

  return (
    <div
      className="proposition round_border"
      style={{ background: background }}
    >
      <div className="opinion_adder_info">
        <input
          type="text"
          placeholder="Add tags.."
          className="write_tag_here"
        ></input>
        <input
          type="text"
          placeholder="Add source.."
          className="write_src_here"
        ></input>
        <span className="info_3">
          &nbsp;&nbsp;
          <span className="secondary_txt">{"Vote ·"}</span>
          &nbsp;{t_button}&nbsp;{f_button}&nbsp;{b_button}
        </span>
      </div>
      <textarea
        className="write_prop_here"
        placeholder="Write/Search proposition.."
      ></textarea>
    </div>
  );
};

const ConnectionMaker = (props) => {
  const [type, setType] = React.useState(0);
  const [select, setSelect] = React.useState(false);

  const lhs_style = [" t_lhs_o", " f_lhs_o", " b_lhs_o"][type];
  const lhs_message = ["T", "F", "B"][type];

  return (
    <div className="connection_maker hstack">
      <div className={"hstack " + (select ? "show_me" : "hide")}>
        <span
          className={"folded_o t_lhs_o selector"}
          onClick={() => {
            setSelect(false);
            setType(0);
          }}
        >
          {"T"}
        </span>
        <span
          className={"folded_o f_lhs_o selector"}
          onClick={() => {
            setSelect(false);
            setType(1);
          }}
        >
          {"F"}
        </span>
        <span
          className={"folded_o b_lhs_o selector"}
          onClick={() => {
            setSelect(false);
            setType(2);
          }}
        >
          {"B"}
        </span>
      </div>
      <div className={select ? "hide" : "show_me"}>
        <div
          className={"folded_o " + lhs_style}
          onClick={() => {
            setSelect(true);
          }}
        >
          {lhs_message}
        </div>
      </div>
      <PropositionMaker bg="#fff" />
    </div>
  );
};

export { PropositionMaker, ConnectionMaker };
