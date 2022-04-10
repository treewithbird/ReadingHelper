import React from 'react';

const get_display_sentence = (content) => {
  if (content.sentence !== undefined) {
    return content.sentence;
  } else {
    const message = ['True', 'False', 'Bad'][content.connects[2]];
    const txt_color = ['t_txt', 'f_txt', 'b_txt'][content.connects[2]];
    const button1 = (
      <button
        className="prop_button"
        onClick={() => {
          /*TODO*/
        }}
        onMouseEnter={() => {
          /*TODO*/
        }}
        onMouseLeave={() => {
          /*TODO*/
        }}
      >
        {'#' + content.connects[0]}
      </button>
    );
    const txt1 = <span>{' Shows that '}</span>;
    const button2 = (
      <button
        className="prop_button"
        onClick={() => {}}
        onMouseEnter={() => {
          /*TODO*/
        }}
        onMouseLeave={() => {
          /*TODO*/
        }}
      >
        {'#' + content.connects[1]}
      </button>
    );
    const txt2 = <span>{' is '}</span>;
    const txt3 = <span className={txt_color}>{message}</span>;

    return (
      <span>
        {button1}
        {txt1}
        {button2}
        {txt2}
        {txt3}
      </span>
    );
  }
};

const Proposition = (props) => {
  const [data, setData] = React.useState(props.data);
  const [voted, setVoted] = React.useState(props.data.voted);
  const [background, setBackground] = React.useState(props.bg);

  const viewer_vote_updater = (v) => {
    let tmp = voted.map((d, i) => !d && v[i]);
    setVoted(tmp);
    /*TODO*/
  };

  let display_sentence = get_display_sentence(data.content);

  const watchers =
    data.watch === undefined ? null : (
      <button className="i_txt">&nbsp;{'👀' + data.watch}</button>
    );

  const t_button = (
    <button
      className={'t_button expand_area' + (voted[0] ? ' t_bg' : '')}
      onClick={() => viewer_vote_updater([true, false, false])}
    >
      {data.tfb[0] + data.voted[0]}
    </button>
  );

  const f_button = (
    <button
      className={'f_button expand_area' + (voted[1] ? ' f_bg' : '')}
      onClick={() => viewer_vote_updater([false, true, false])}
    >
      {data.tfb[1] + data.voted[1]}
    </button>
  );

  const b_button = (
    <button
      className={'b_button expand_area' + (voted[2] ? ' b_bg' : '')}
      onClick={() => viewer_vote_updater([false, false, true])}
    >
      {data.tfb[2] + data.voted[2]}
    </button>
  );

  return (
    <div className="proposition" style={{ background: background }}>
      <div className="info">
        <span>
          <button
            className="display_name"
            onClick={() => {
              /*TODO*/
            }}
          >
            {data.display_name}
          </button>
          {watchers}
          &nbsp;
          <button
            className="id_button"
            onClick={() => {
              /*TODO*/
            }}
          >
            {'#' + data.post_id}
          </button>
          &nbsp;
          <span className="secondary_txt">{'·'}</span>
          &nbsp;
          <span className="use_tool_tip">
            <span className="secondary_txt">{data.post_date}</span>
            <span className="tool_tip position_1">{data.post_date}</span>
          </span>
        </span>
        <span className="use_tool_tip">
          <span className="secondary_txt">{'Vote ·'}</span>
          &nbsp;{t_button}&nbsp;{f_button}&nbsp;{b_button}
          <span className="tool_tip position_1">
            {'True:'}
            {t_button}&nbsp;&nbsp;{'False:'}
            {f_button}&nbsp;&nbsp;{'Bad:'}
            {b_button}
          </span>
        </span>
      </div>
      <div className="primary_txt">{display_sentence}</div>
    </div>
  );
};

const Opinion = (props) => {
  const [lhs_expanded, set_lhs_expanded] = React.useState(false);

  const tmp = props.data.lhs.content.connects[2];
  const lhs_style = [' t_lhs', ' f_lhs', ' b_lhs'][tmp];
  const lhs_bg = ['var(--t3)', ' var(--f3)', ' var(--b3)'][tmp];
  const lhs_message = ['T', 'F', 'B'][tmp];
  const lhs = <Proposition data={props.data.lhs} bg={lhs_bg} />;

  const rhs = <Proposition data={props.data.rhs} bg={'#fff'} />;

  const lhs_folded = (
    <div
      className={'lhs_folded folded' + lhs_style}
      onClick={() => set_lhs_expanded(true)}
    >
      {lhs_message}
    </div>
  );

  const rhs_folded = (
    <div className="rhs_folded folded" onClick={() => set_lhs_expanded(false)}>
      {'<'}
    </div>
  );

  const subopinions_l = props.data.opinions_l.map((o, i) => (
    <Opinion data={o} key={i} />
  ));

  const subopinions_r = props.data.opinions_r.map((o, i) => (
    <Opinion data={o} key={i} />
  ));

  return (
    <div className="opinion">
      <div className={'hstack ' + (lhs_expanded ? 'hide_me' : 'show_me')}>
        {lhs_folded}
        <div className="vstack">
          {rhs}
          {subopinions_r}
        </div>
      </div>
      <div className={'hstack ' + (lhs_expanded ? 'show_me' : 'hide_me')}>
        <div className="vstack">
          {lhs}
          {subopinions_l}
        </div>
        {rhs_folded}
      </div>
    </div>
  );
};

const Argument = (props) => {
  return (
    <div className="vstack">
      {props.data.thesis === undefined ? null : (
        <Proposition data={props.data.thesis} bg="#fff" />
      )}
      {props.data.opinions.map((p, i) => (
        <Opinion key={i} data={p} />
      ))}
    </div>
  );
};

const VoteView = (props) => {
  const watchers =
    props.data.watch === undefined ? null : (
      <button className="i_txt">&nbsp;{'👀' + props.data.watch}</button>
    );

  const tfb_color = ['var(--t1)', 'var(--f1)', 'var(--b1)'][props.data.vote];

  return (
    <div className="proposition" style={{ background: '#fff' }}>
      <div className="info">
        <span>
          <button
            className="display_name"
            onClick={() => {
              /*TODO*/
            }}
          >
            {props.data.display_name}
          </button>
          {watchers}&nbsp;&nbsp;
          <div
            className="op5_txt"
            style={{ display: 'inline-block', color: '#000' }}
          >
            {'Voted '}
          </div>
          &nbsp;&nbsp;
          <div
            className="op5_txt"
            style={{ display: 'inline-block', color: tfb_color }}
          >
            {['True', 'False', 'Bad'][props.data.vote]}
          </div>
          &nbsp;&nbsp;
          <span className="use_tool_tip">
            <span className="op5_txt">{props.data.vote_date}</span>
            <span className="tool_tip position_1">{props.data.vote_date}</span>
          </span>
        </span>
      </div>
    </div>
  );
};

export { Proposition, Opinion, Argument, VoteView };
