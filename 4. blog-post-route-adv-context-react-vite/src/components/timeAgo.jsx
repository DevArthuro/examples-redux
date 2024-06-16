import { parseISO, formatDistanceToNow } from "date-fns";

const TimeAgo = ({ timestamp }) => {
  let timeAgo = "";
  if (timestamp) {
    const date = parseISO(timestamp);
    timeAgo = `${formatDistanceToNow(date)} ago`;
  }
  return (
    <span title={timestamp}>
      <i>{timeAgo ?? "Unknown date"}</i>
    </span>
  );
};

export default TimeAgo;
