const countStat = (tfb_history) => {
  let t_vote = tfb_history.split("").map((x) => Number(x === "0"));
  let f_vote = tfb_history.split("").map((x) => Number(x === "1"));
  let b_vote = tfb_history.split("").map((x) => Number(x === "2"));
  t_vote = t_vote.reduce(
    (a, x, i) => [...a, a.length > 0 ? x + a[i - 1] : x],
    []
  );
  f_vote = f_vote.reduce(
    (a, x, i) => [...a, a.length > 0 ? x + a[i - 1] : x],
    []
  );
  b_vote = b_vote.reduce(
    (a, x, i) => [...a, a.length > 0 ? x + a[i - 1] : x],
    []
  );

  return [t_vote, f_vote, b_vote];
};

const countChar = (string) => {
  return [...string].reduce(
    (res, char) => ((res[char] = (res[char] || 0) + 1), res),
    {}
  );
};

const timeSince = (date) => {
  const seconds = Math.floor((new Date() - date) / 1000);

  let interval = seconds / 31536000;
  if (interval > 1) {
    return Math.floor(interval) + "y ago";
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    return Math.floor(interval) + "mo ago";
  }
  interval = seconds / 86400;
  if (interval > 1) {
    return Math.floor(interval) + "d ago";
  }
  interval = seconds / 3600;
  if (interval > 1) {
    return Math.floor(interval) + "hr ago";
  }
  interval = seconds / 60;
  if (interval > 1) {
    return Math.floor(interval) + "min ago";
  }
  return Math.floor(seconds) + "s ago";
};
