import React from "react";

const Ttxt = (props) => <span style={{ color: "var(--t1)" }}>{props.t}</span>;
const Ftxt = (props) => <span style={{ color: "var(--f1)" }}>{props.t}</span>;
const Btxt = (props) => <span style={{ color: "var(--b1)" }}>{props.t}</span>;
const Itxt = (props) => <span style={{ color: "var(--i1)" }}>{props.t}</span>;

const countChar = (string) => {
  return [...string].reduce(
    (res, char) => ((res[char] = (res[char] || 0) + 1), res),
    {}
  );
};

const DetailView1 = (props) => {
  return (
    <div className="detail_view">
      <table className="vstack">
        <tbody>
          <tr className="pair">
            <th className="left">Creation date</th>
            <td className="right">{props.data.creation_date}</td>
          </tr>
          <tr className="pair">
            <th className="left">Creator vote</th>
            <td className="right">
              {
                [<Ttxt t="True" />, <Ftxt t="False" />, <Btxt t="Bad" />][
                  props.data.creator_vote
                ]
              }
            </td>
          </tr>
          <tr className="pair">
            <th className="left">Source</th>
            <td className="right">
              <a href={props.data.source}>{props.data.source}</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const DetailView2 = (props) => {
  const tfb = countChar(props.data.tfb_history);

  const impact = tfb[0] + tfb[1] - tfb[2];
  const truthiness = ((100 * tfb[0]) / (tfb[0] + tfb[1])).toFixed(0);
  const quality = (
    (100 * (tfb[0] + tfb[1])) /
    (tfb[0] + tfb[1] + tfb[2])
  ).toFixed(0);
  return (
    <div className="detail_view">
      <table className="vstack">
        <tbody>
          <tr className="pair">
            <th className="left">Vote timeline</th>
            <td className="right">{"TODO"}</td>
          </tr>
          <tr className="pair">
            <th className="left">Pie chart</th>
            <td className="right">{"TODO"}</td>
          </tr>
          <tr className="pair">
            <th className="left">Vote count</th>
            <td className="right">
              True:
              <Ttxt t={tfb[0]} />
              &nbsp;&nbsp;False:
              <Ftxt t={tfb[1]} />
              &nbsp;&nbsp;Bad:
              <Btxt t={tfb[2]} />
            </td>
          </tr>
          <tr className="pair">
            <th className="left">Impact</th>
            <td className="right">
              <Ttxt t={tfb[0]} />
              {"+"}
              <Ftxt t={tfb[1]} />
              {"-"}
              <Btxt t={tfb[2]} />
              {` = ${impact}`}
            </td>
          </tr>
          <tr className="pair">
            <th className="left">Truthiness</th>
            <td className="right">
              <Ttxt t={tfb[0]} />
              {"/("}
              <Ttxt t={tfb[0]} />
              {"+"}
              <Ftxt t={tfb[1]} />
              {`) => ${truthiness}%`}
            </td>
          </tr>
          <tr className="pair">
            <th className="left">Quality</th>
            <td className="right">
              {"("}
              <Ttxt t={tfb[0]} />
              {"+"}
              <Ftxt t={tfb[1]} />
              {")/("}
              <Ttxt t={tfb[0]} />
              {"+"}
              <Ftxt t={tfb[1]} />
              {"+"}
              <Btxt t={tfb[2]} />
              {`) => ${quality}%`}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const DetailView3 = (props) => {
  return (
    <div className="detail_view">
      <table className="vstack">
        <tbody>
          <tr className="pair">
            <th className="left">Display name</th>
            <td className="right">{props.data.display_name}</td>
          </tr>
          <tr className="pair">
            <th className="left">About</th>
            <td className="right">{props.data.about}</td>
          </tr>
          <tr className="pair">
            <th className="left">ID</th>
            <td className="right">{props.data.id}</td>
          </tr>
          <tr className="pair">
            <th className="left">Watchers</th>
            <td className="right">
              {"👀"}
              <Itxt t={props.data.watchers} />
            </td>
          </tr>
          <tr className="pair">
            <th className="left">Contributions</th>
            <td className="right">{props.data.contributions}</td>
          </tr>
          <tr className="pair">
            <th className="left">Votes given</th>
            <td className="right">
              True:
              <Ttxt t={props.data.given_tfb[0]} />
              &nbsp;&nbsp;False:
              <Ftxt t={props.data.given_tfb[1]} />
              &nbsp;&nbsp;Bad:
              <Btxt t={props.data.given_tfb[2]} />
            </td>
          </tr>
          <tr className="pair">
            <th className="left">Votes gotten</th>
            <td className="right">
              True:
              <Ttxt t={props.data.gotten_tfb[0]} />
              &nbsp;&nbsp;False:
              <Ftxt t={props.data.gotten_tfb[1]} />
              &nbsp;&nbsp;Bad:
              <Btxt t={props.data.gotten_tfb[2]} />
            </td>
          </tr>
          <tr className="pair">
            <th className="left"></th>
            <td className="right">{"TODO"}</td>
          </tr>
          <tr className="pair">
            <th className="left">Signup date</th>
            <td className="right">{props.data.visit_history[0]}</td>
          </tr>
          <tr className="pair">
            <th className="left">Visit</th>
            <td className="right">{props.data.visit_history.length}</td>
          </tr>
          <tr className="pair">
            <th className="left"></th>
            <td className="right">{"TODO"}</td>
          </tr>
          <tr className="pair">
            <th className="left">Last visit</th>
            <td className="right">
              {props.data.visit_history[props.data.visit_history.length - 1]}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export { DetailView1, DetailView2, DetailView3 };
