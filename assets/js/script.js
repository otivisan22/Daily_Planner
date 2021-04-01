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
    const currentHour = 11;
    const timeBlocks= $(".container .row");
    const callback = function() {
      const timeBlockTime= Number.parseInt($ (this).data("time"), 10);
      if (timeBlockTime === currentHour) {
       $(this).find("textarea").removeClass("past").addClass("present");
      }
       if(timeBlockTime > currentHour) {
        $(this).find("textarea").removeClass("past").addClass("future");
        console.log("future");
      }
      
    };
    console.log(timeBlocks);
    timeBlocks.each(callback);
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
