import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

export function formatDate(dateString: string): { full: string; relative: string } {
  const date = dayjs(dateString);
  return {
    full: date.format("MMMM D, YYYY"),       
    relative: date.fromNow(),            
  };
}
