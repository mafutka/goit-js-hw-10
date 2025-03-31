import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";




console.log(typeof flatpickr);

const input = document.querySelector("#datetime-picker");
const startBtn = document.querySelector(".start-btn");
const daysSpan = document.querySelector("[data-days]");
const hoursSpan = document.querySelector("[data-hours]");
const minutesSpan = document.querySelector("[data-minutes]");
const secondsSpan = document.querySelector("[data-seconds]");
