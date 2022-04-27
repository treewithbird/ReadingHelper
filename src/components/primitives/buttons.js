import React from "react";

const PageSelector = (props) => {
  const [page, setPage] = React.useState(0);
  return (
    <div className="page_selector">
      <button
        className={
          "page_select_button l_most" + (page === 0 ? " selected" : "")
        }
        onClick={() => {
          setPage(0);
          props.set_curr_page(0);
        }}
      >
        {"Opinions"}
      </button>
      <button
        className={"page_select_button" + (page === 1 ? " selected" : "")}
        onClick={() => {
          setPage(1);
          props.set_curr_page(1);
        }}
      >
        {"User"}
      </button>
      <button
        className={"page_select_button" + (page === 2 ? " selected" : "")}
        onClick={() => {
          setPage(2);
          props.set_curr_page(2);
        }}
      >
        {"Voters"}
      </button>
      <button
        className={
          "page_select_button r_most" + (page === 3 ? " selected" : "")
        }
        onClick={() => {
          setPage(3);
          props.set_curr_page(3);
        }}
      >
        {"Mentions"}
      </button>
    </div>
  );
};

const ButtonSet1 = (props) => {
  /*TODO Watch user, unwatch user toggle TODO*/
  return (
    <div className="button_set">
      <button className="interaction_button">Report</button>
      <button className="interaction_button">{"Watch User"}</button>
      <button className="interaction_button">Bookmark</button>
      <button className="interaction_button">Share</button>
    </div>
  );
};

const ButtonSet2 = (props) => {
  /*TODO Watch user, unwatch user toggle TODO*/
  return (
    <div className="button_set">
      <button className="interaction_button">Save draft</button>
      <button className="interaction_button">Post</button>
    </div>
  );
};

export { PageSelector, ButtonSet1, ButtonSet2 };
