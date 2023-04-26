const formatDailyDate = (inputData) => {
  const date = new Date(inputData);

  const day = date.getDate();
  const month = date.getMonth();
  const weekday = date.getDay();

  const months = [
    "Jan.",
    "Feb.",
    "Mar.",
    "Apr.",
    "May",
    "June",
    "July",
    "Aug.",
    "Sept.",
    "Oct.",
    "Nov.",
    "Dec.",
  ];
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const formattedDate = `${weekdays[weekday]} ${day}. ${months[month]}`;
  return formattedDate;
};
export { formatDailyDate };
