const formatDailyDate = (inputData) => {
  const date = new Date(inputData);

  const day = date.getDate();
  const month = date.getMonth();
  const weekday = date.getDay();

  const months = [
    "januar",
    "februar",
    "marts",
    "april",
    "maj",
    "juni",
    "juli",
    "august",
    "september",
    "oktober",
    "november",
    "december",
  ];
  const weekdays = [
    "søndag",
    "mandag",
    "tirsdag",
    "onsdag",
    "torsdag",
    "fredag",
    "lørdag",
  ];
  const formattedDate = `${weekdays[weekday]} ${day}. ${months[month]}`;
  return formattedDate;
};
export { formatDailyDate };
