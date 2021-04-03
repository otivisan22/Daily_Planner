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
    const timeBlocks = $(".container .row");
    //iterate array
    const callback = function () {
      //get value
      const timeBlockTime = Number.parseInt($(this).data("time"), 10);
      //check value time in time
      if (timeBlockTime === currentHour) {
        //get child/remove from container
        $(this).find("textArea").removeClass("past").addClass("present");
      }
      if (timeBlockTime > currentHour) {
        $(this).find("textArea").removeClass("past").addClass("future");
        console.log("future");
      }

      const plannedEvent = plannerEvents[timeBlockTime];
      textArea.text(plannedEvent);
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

const onClick = function () {
  const target = $(event.target);
  const currentTarget = $(event.currentTarget);
  if (target.is("button")) {
    const key = target.attr("id");
    const value = target.parent().find("textArea").val();

    const newObject = {
      ...plannerEvents,
      [key]: value,
    };
    localStorage.getItem("plannerEvents", JSON.stringify(newObject));

    console.log(key, value);
    console.log(newObject);
  }
  console.log("save button clicked");
};

const onReady = () => {
  //event listener container
  $(".container").click(onClick);
  currentTime();
  console.log("Ålskä");

  //renderCurrentTime
  renderCurrentDate();

  //check for events
  renderCalendarEvents();
};

//function window displaying
$(document).ready(onReady);
