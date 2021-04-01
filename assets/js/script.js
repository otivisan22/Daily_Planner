//Declared variable for CurrentDate
const renderCurrentDate = () => {
  const dateTime = $("#currentDay");
  const displayNow = moment().format("dddd, MMMM Do");
  console.log(displayNow);
};

const renderCalendarEvents = () => {
  //Declared the variable for local storage
  const plannerEvents = localStorage.getItem("plannerEvents");

  if (plannerEvents !== null) {
    //declare a variable to get currentHour
  } else {
    localStorage.setItem("plannerEvents", JSON.stringify({}));
  }
};

const onReady = () => {
  console.log("Ålskä");

  //renderCurrentTime

  renderCalendarEvents();
};

$(document).ready(onReady);
