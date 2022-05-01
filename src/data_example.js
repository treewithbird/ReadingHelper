const propdata_raw_r1 = {
  display_name: "Wolfram",
  watch: undefined,
  watchers: 23,
  post_id: "000000",
  post_date: "4m ago",
  tfb: [56, 21, 9],
  voted: [false, false, false],
  content: {
    sentence: "It seems like the kind of question that might have been ",
    connects: undefined
  }
};

const propdata_raw_r2 = {
  display_name: "Wolfram",
  watch: 23,
  creator_vote: 1,
  post_id: "000001",
  post_date: "4m ago",
  tfb: [56, 21, 9],
  voted: [false, false, false],
  content: {
    sentence: "Identifier 'propdata' has already been declared",
    connects: undefined
  }
};

const propdata_raw_r3 = {
  display_name: "Wolfram",
  watch: 23,
  creator_vote: 1,
  post_id: "000002",
  post_date: "4m ago",
  tfb: [56, 21, 9],
  voted: [false, false, false],
  content: {
    sentence:
      "Applying simple rule over and over again produces really complicated result.",
    connects: undefined
  }
};

const propdata_raw_l1 = {
  display_name: "Wolfram",
  watch: 23,
  creator_vote: 0,
  post_id: "000003",
  post_date: "4m ago",
  tfb: [56, 21, 9],
  voted: [false, false, false],
  content: {
    sentence: undefined,
    connects: ["000001", "000002", 0]
  }
};

const propdata_raw_l2 = {
  display_name: "Wolfram",
  watch: undefined,
  creator_vote: 1,
  post_id: "000004",
  post_date: "4m ago",
  tfb: [56, 21, 9],
  voted: [false, false, false],
  content: {
    sentence: undefined,
    connects: ["000001", "000002", 1]
  }
};

const propdata_raw_l3 = {
  display_name: "Wolfram",
  watch: undefined,
  creator_vote: 2,
  post_id: "000004",
  post_date: "4m ago",
  tfb: [56, 21, 9],
  voted: [false, false, false],
  content: {
    sentence: undefined,
    connects: ["000001", "000002", 2]
  }
};

const opiniondata_raw1 = {
  lhs: propdata_raw_l1,
  rhs: propdata_raw_r1,
  opinions_l: [],
  opinions_r: []
};

const opiniondata_raw2 = {
  lhs: propdata_raw_l1,
  rhs: propdata_raw_r2,
  opinions_l: [],
  opinions_r: []
};

const opiniondata_raw3 = {
  lhs: propdata_raw_l1,
  rhs: propdata_raw_r3,
  opinions_l: [opiniondata_raw1, opiniondata_raw2],
  opinions_r: [opiniondata_raw1, opiniondata_raw1, opiniondata_raw2]
};

const opiniondata_raw4 = {
  lhs: propdata_raw_l2,
  rhs: propdata_raw_r1,
  opinions_l: [opiniondata_raw3],
  opinions_r: [opiniondata_raw3]
};

const opiniondata_raw5 = {
  lhs: propdata_raw_l2,
  rhs: propdata_raw_r2,
  opinions_l: [opiniondata_raw4],
  opinions_r: [opiniondata_raw4]
};

const opiniondata_raw6 = {
  lhs: propdata_raw_l3,
  rhs: propdata_raw_r3,
  opinions_l: [],
  opinions_r: [opiniondata_raw2]
};

const data_argument = {
  thesis: propdata_raw_r1,
  opinions: [opiniondata_raw1, opiniondata_raw6, opiniondata_raw5]
};

const data_prop1 = {
  thesis: propdata_raw_r1,
  opinions: []
};

const data_prop2 = {
  thesis: propdata_raw_l2,
  opinions: []
};

const data_prop3 = {
  thesis: propdata_raw_l2,
  opinions: []
};

const data_opinion1 = {
  thesis: undefined,
  opinions: [opiniondata_raw1]
};

const data_opinion2 = {
  thesis: undefined,
  opinions: [opiniondata_raw2]
};

const detaildata = {
  tfb_history: "0102010101020202020101010101111110110100",

  creation_date: "2021/05/23 17:49",
  creator_vote: 0,
  source: "https://writings.stephenwolfram.com/",

  display_name: "Wolfram",
  about: "I am who I am",
  id: "realwolfram",
  watchers: 23,
  contributions: [42],
  given_tfb: [42, 21, 9],
  gotten_tfb: [42, 21, 9], // TODO: REMOVE
  gotten_tfb_history: [
    [42, 21, 9],
    [42, 21, 9],
    [42, 21, 9],
    [42, 21, 9]
  ], // TODO: replace
  visit_history: ["2021/05/23 17:48", "2021/05/23 17:49", "2021/05/23 17:50"]
};

const votedata_raw1 = {
  display_name: "Wolfram",
  watchers: 23,
  vote: 1,
  vote_id: "000000",
  vote_date: "4m ago"
};

const inspectiondata = {
  argument_data: data_prop1,
  detail_data: detaildata,
  opinions: [data_opinion1, data_opinion2],
  voters: [votedata_raw1, votedata_raw1, votedata_raw1],
  mentions: [data_opinion1, data_opinion1, data_opinion2, data_opinion1],
  created_contents: [data_opinion1, data_opinion2, data_opinion2]
};

export {
  data_argument,
  data_prop1,
  data_prop2,
  data_prop3,
  data_opinion1,
  data_opinion2,
  detaildata,
  inspectiondata
};
