//Declared variable for CurrentDate
const renderCurrentDate = () => {
  const dateTime = $("#currentDay");
  const displayNow = moment().format("dddd, MMMM Do");
};

const renderCalendarEvents = () => {
  //Get from local storage
  const plannerEvents = JSON.parse(localStorage.getItem("plannerEvents"));

  if (plannerEvents !== null) {
    //declare a variable to get currentHour
    const currentHour = moment().hour();
    const timeBlocks = $(".container .row");
    //iterate array
    const callback = function () {
      const textarea = $(this).find("textarea");
      //get value
      const timeBlockTime = Number.parseInt($(this).data("time"), 10);
      //check value time in time
      if (timeBlockTime === currentHour) {
        //get child/remove from container
        textarea.removeClass("past").addClass("present");
      }
      if (timeBlockTime > currentHour) {
        textarea.removeClass("past").addClass("future");
      }
      const plannedEvent = plannerEvents[timeBlockTime];
      textarea.text(plannedEvent);
    };

    timeBlocks.each(callback);
  } else {
    //add an empty array in the local storage
    localStorage.setItem(
      "plannerEvents",
      JSON.stringify({ 9: "hej", 14: "älska" })
    );
  }
};
//Declared variable on click
const onClick = function () {
  //declare variable target
  const target = $(event.target);
  const currentTarget = $(event.currentTarget);
  if (target.is("button")) {
    const key = target.attr("id");
    const value = target.parent().find("textArea").val();
    const plannerEvents = JSON.parse(localStorage.getItem("plannerEvents"));
    const newObject = {
      ...plannerEvents,
      [key]: value,
    };
    //set item to local storage
    localStorage.setItem("plannerEvents", JSON.stringify(newObject));
  }
};

const onReady = () => {
  //event listener container
  $(".container").click(onClick);

  //currentTime();

  //renderCurrentTime
  renderCurrentDate();

  //check for events
  renderCalendarEvents();
};

//function window displaying
$(document).ready(onReady);
