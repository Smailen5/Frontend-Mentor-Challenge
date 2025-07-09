// second version

// const radioButtons = document.querySelectorAll('input[name="select-time"]');
const btnGroup = document.getElementById("button-group");
const workHours = document.getElementById("work-hour");
const workPrevious = document.getElementById("work-previous");
const playHours = document.getElementById("play-hour");
const playPrevious = document.getElementById("play-previous");
const studyHours = document.getElementById("study-hour");
const studyPrevious = document.getElementById("study-previous");
const exerciseHours = document.getElementById("exercise-hour");
const exercisePrevious = document.getElementById("exercise-previous");
const socialHours = document.getElementById("social-hour");
const socialPrevious = document.getElementById("social-previous");
const selfCareHours = document.getElementById("self-hour");
const selfCarePrevious = document.getElementById("self-previous");

btnGroup.addEventListener("click", (event) => {
  const selectedTime = event.target.value;
  // console.log(selectedTime);
  fetchData(selectedTime);
});

function fetchData(selectedTime) {
  fetch("data.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then(function (data) {
      // console.log(data);
      // const selectedTime = radioButtons.value;
      update(data, selectedTime);
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
}

function update(data, btnValue) {
  // Check if data at an index is not undefined
  if (data && data.length > 0 && data[0].timeframes[btnValue]) {
    let text;

    if (btnValue === "daily") {
      text = "Previous";
    } else if (btnValue === "weekly") {
      text = "Last Week";
    } else if (btnValue === "monthly") {
      text = "Last Month";
    }
    // console.log(data[0].timeframes[btnValue]);
    workHours.innerText = data[0].timeframes[btnValue].current + "hrs";
    workPrevious.innerText = `${text} - ${data[0].timeframes[btnValue].previous}hrs`;
    playHours.innerText = data[1].timeframes[btnValue].current + "hrs";
    playPrevious.innerText = `${text} - ${data[1].timeframes[btnValue].previous}hrs`;
    studyHours.innerText = data[2].timeframes[btnValue].current + "hrs";
    studyPrevious.innerText = `${text} - ${data[2].timeframes[btnValue].previous}hrs`;
    exerciseHours.innerText = data[3].timeframes[btnValue].current + "hrs";
    exercisePrevious.innerText = `${text} - ${data[3].timeframes[btnValue].previous}hrs`;
    socialHours.innerText = data[4].timeframes[btnValue].current + "hrs";
    socialPrevious.innerText = `${text} - ${data[4].timeframes[btnValue].previous}hrs`;
    selfCareHours.innerText = data[5].timeframes[btnValue].current + "hrs";
    selfCarePrevious.innerText = `${text} - ${data[5].timeframes[btnValue].previous}hrs`;
  }
}
