//Declared variable for CurrentDate
const renderCurrentDate = () => {
  const dateTime = $("#currentDay");
  const displayNow = moment().format("dddd, MMMM Do");
  console.log(displayNow);
};

const renderCalendarEvents = () => {
  //Get from local storage
  const plannerEvents = localStorage.getItem("plannerEvents");

  if (plannerEvents !== null) {
    //declare a variable to get currentHour
    const currentHour = moment().hour();
    const timeBlocks= $(".container .row");
    
  } else {
    localStorage.setItem("plannerEvents", JSON.stringify({}));
  }
};

const onReady = () => {
  console.log("Ålskä");

  //renderCurrentTime
  render renderCurrentDate();

  //check for events
  renderCalendarEvents();
};

$(document).ready(onReady);
