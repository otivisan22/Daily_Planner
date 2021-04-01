const renderCurrentDate = () => {
  const dateTime = $("#currentDay");
  const displayNow = moment().format("dddd, MMMM Do");
  console.log(displayNow);
};

const renderCalendarEvents = () => {
  const plannerEvents = localStorage.getItem("plannerEvents");

  if (plannerEvents !== null) {
    console.log("render the data in the table");
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
