import { useState, useEffect } from "react";

const SetDate = () => {
  const dateObj = new Date();

  const month = dateObj.getMonth();
  let monthName;
  switch (month) {
    case 0:
      monthName = "Jan";
      break;
    case 1:
      monthName = "Feb";
      break;
    case 2:
      monthName = "Mar";
      break;
    case 3:
      monthName = "Apr";
      break;
    case 4:
      monthName = "May";
      break;
    case 5:
      monthName = "June";
      break;
    case 6:
      monthName = "July";
      break;
    case 7:
      monthName = "Aug";
      break;
    case 8:
      monthName = "Sept";
      break;
    case 9:
      monthName = "Oct";
      break;
    case 10:
      monthName = "Nov";
      break;
    case 11:
      monthName = "Dec";
      break;
  }

  let seconds =
    dateObj.getSeconds() < 10
      ? "0" + dateObj.getSeconds()
      : dateObj.getSeconds();

  let minutes =
    dateObj.getMinutes() < 10
      ? "0" + dateObj.getMinutes()
      : dateObj.getMinutes();

  let hours =
    dateObj.getHours() < 10 ? "0" + dateObj.getHours() : dateObj.getHours();

  const date = `${monthName} 
    ${dateObj.getDate()}, 
    ${dateObj.getFullYear()} 
    (${hours} : ${minutes} : ${seconds})`;

  const [currentDate, setCurrentdate] = useState(date);
  useEffect(() => {
    setTimeout(() => setCurrentdate(date), 1000);
  }, [date]);
  return currentDate;
};

// This is for the date formats

export default SetDate;
