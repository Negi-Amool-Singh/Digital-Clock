const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const currentDay = document.getElementById("currentDay");
const container = document.getElementById("container");
const dateContainer = document.getElementById("dateContainer");
const date = document.getElementById("date");
const month = document.getElementById("month");
const year = document.getElementById("year");

function clock() {
  const dates = new Date();
  const hour = dates.getHours();
  const minute = dates.getMinutes();
  const second = dates.getSeconds();
  const day = dates.getDay();
  const dd = dates.getDate();
  const mm = dates.getMonth();
  const yyyy = dates.getFullYear();
  // const currentTime = `${hour}:${minute}:${second}`;
  const daysNames = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];

  const monthsNames = [
    "january",
    "febrauary",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december",
  ];

  if (hour < 6) {
    currentDay.style.width = "80%";
  } else if (hour == 6) {
    container.style.backgroundImage = "url('./images/bg1.jpg')";
  } else if (hour == 7) {
    currentDay.style.width = "75%";
    container.style.backgroundImage = "url('./images/bg1.jpg')";
  } else if (hour == 8) {
    currentDay.style.width = "70%";
    container.style.backgroundImage = "url('./images/bg1.jpg')";
  } else if (hour == 9) {
    currentDay.style.width = "75%";
    container.style.backgroundImage = "url('./images/bg2.jpg')";
  } else if (hour == 10) {
    currentDay.style.width = "70%";
    container.style.backgroundImage = "url('./images/bg2.jpg')";
  } else if (hour == 11) {
    currentDay.style.width = "60%";
    container.style.backgroundImage = "url('./images/bg2.jpg')";
  } else if (hour == 12) {
    currentDay.style.width = "55%";
    container.style.backgroundImage = "url('./images/bg2.jpg')";
  } else if (hour == 13) {
    currentDay.style.width = "50%";
    container.style.backgroundImage = "url('./images/bg2.jpg')";
  } else if (hour == 14) {
    currentDay.style.width = "45%";
    container.style.backgroundImage = "url('./images/bg2.jpg')";
  } else if (hour == 15) {
    currentDay.style.width = "40%";
    container.style.backgroundImage = "url('./images/bg2.jpg')";
  } else if (hour == 16) {
    currentDay.style.width = "35%";
    container.style.backgroundImage = "url('./images/bg2.jpg')";
  } else if (hour == 17) {
    currentDay.style.width = "30%";
    currentDay.style.borderColor = "tomato";
    container.style.backgroundImage = "url('./images/bg2.jpg')";
  } else if (hour == 18) {
    currentDay.style.width = "25%";
    currentDay.style.borderColor = "tomato";
    container.style.backgroundImage = "url('./images/bg3.jpg')";
  } else if (hour == 19) {
    currentDay.style.width = "23%";
    currentDay.style.borderColor = "tomato";
    container.style.backgroundImage = "url('./images/bg4.jpg')";
  } else if (hour == 20) {
    currentDay.style.width = "18%";
    currentDay.style.borderColor = "tomato";
    container.style.backgroundImage = "url('./images/bg5.jpg')";
  } else if (hour == 21) {
    currentDay.style.width = "13%";
    currentDay.style.borderColor = "tomato";
    container.style.backgroundImage = "url('./images/bg5.jpg')";
  } else if (hour == 22) {
    currentDay.style.width = "8%";
    currentDay.style.borderColor = "red";
    container.style.backgroundImage = "url('./images/bg5.jpg')";
  } else if (hour == 23 && minute >= 40) {
    currentDay.style.width = "5%";
    currentDay.style.borderColor = "red";
    container.style.backgroundImage = "url('./images/bg5.jpg')";
  } else {
    currentDay.style.width = "2%";
    currentDay.style.borderColor = "red";
    container.style.backgroundImage = "url('./images/bg5.jpg')";
  }

  hours.innerText = hour;
  minutes.innerText = minute;
  seconds.innerText = second;
  currentDay.innerText = daysNames[day].toUpperCase();
  date.innerText = dd;
  month.innerText = monthsNames[mm].toUpperCase();
  year.innerText = yyyy;
}

setInterval(clock, 1000);
