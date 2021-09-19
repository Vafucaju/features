export const TimeFormatter = (time) => {
  let d = new Date(time * 1000);
  let hours = d.getHours();
  let minutes = d.getMinutes();
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;

  return `${hours}:${minutes}`;
};
