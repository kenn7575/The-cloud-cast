function isTimeBetweenSunsetAndSunrise(sunset, sunrise, time) {
  // Convert sunset, sunrise, and time to Date objects
  const sunsetDate = new Date(`2023-01-01T${sunset}:00`);
  let sunriseDate = new Date(`2023-01-01T${sunrise}:00`);
  const timeDate = new Date(`2023-01-01T${time}:00`);

  // If sunset is after sunrise, adjust sunrise to be on the next day
  if (sunsetDate > sunriseDate) {
    sunriseDate = new Date(`2023-01-02T-${sunrise}:00`);
  }

  // Check if the time is between sunset and sunrise
  return !(timeDate >= sunsetDate && timeDate <= sunriseDate);
}
export default isTimeBetweenSunsetAndSunrise;
