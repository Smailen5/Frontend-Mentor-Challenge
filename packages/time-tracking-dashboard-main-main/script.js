
// first version

const radioButtons = document.querySelectorAll('input[name="select-time"]');

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

radioButtons.forEach((radioButton) => {
  radioButton.addEventListener("change", () => {
    // console.log(radioButton.value);

    const selectedIme = radioButton.value;

    fetch("data.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(function (data) {
        switch (selectedIme) {
          case "monthly":
            monthly(data);
            break;
          case "weekly":
            weekly(data);
            break;
          case "daily":
            daily(data);
            break;
          default:
            alert("seleziona qualcosa");
        }
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  });
});

function daily(data) {
  workHours.innerText = data[0].timeframes.daily.current + "hrs";
  workPrevious.innerText = `Previous - ${data[0].timeframes.daily.previous}hrs`;
  playHours.innerText = data[1].timeframes.daily.current + "hrs";
  playPrevious.innerText = `Previous - ${data[1].timeframes.daily.previous}hrs`;
  studyHours.innerText = data[2].timeframes.daily.current + "hrs";
  studyPrevious.innerText = `Previous - ${data[2].timeframes.daily.previous}hrs`;
  exerciseHours.innerText = data[3].timeframes.daily.current + "hrs";
  exercisePrevious.innerText = `Previous - ${data[3].timeframes.daily.previous}hrs`;
  socialHours.innerText = data[4].timeframes.daily.current + "hrs";
  socialPrevious.innerText = `Previous - ${data[4].timeframes.daily.previous}hrs`;
  selfCareHours.innerText = data[5].timeframes.daily.current + "hrs";
  selfCarePrevious.innerText = `Previous - ${data[5].timeframes.daily.previous}hrs`;
}

function weekly(data) {
  workHours.innerText = data[0].timeframes.weekly.current + "hrs";
  workPrevious.innerText = `Last Week - ${data[0].timeframes.weekly.previous}hrs`;
  playHours.innerText = data[1].timeframes.weekly.current + "hrs";
  playPrevious.innerText = `Last Week - ${data[1].timeframes.daily.previous}hrs`;
  studyHours.innerText = data[2].timeframes.weekly.current + "hrs";
  studyPrevious.innerText = `Last Week - ${data[2].timeframes.weekly.previous}hrs`;
  exerciseHours.innerText = data[3].timeframes.weekly.current + "hrs";
  exercisePrevious.innerText = `Last Week - ${data[3].timeframes.weekly.previous}hrs`;
  socialHours.innerText = data[4].timeframes.weekly.current + "hrs";
  socialPrevious.innerText = `Last Week - ${data[4].timeframes.weekly.previous}hrs`;
  selfCareHours.innerText = data[5].timeframes.weekly.current + "hrs";
  selfCarePrevious.innerText = `Last Week - ${data[5].timeframes.weekly.previous}hrs`;
}

function monthly(data) {
  workHours.innerText = data[0].timeframes.monthly.current + "hrs";
  workPrevious.innerText = `Last Month - ${data[0].timeframes.monthly.previous}hrs`;
  playHours.innerText = data[1].timeframes.monthly.current + "hrs";
  playPrevious.innerText = `Last Month - ${data[1].timeframes.monthly.previous}hrs`;
  studyHours.innerText = data[2].timeframes.monthly.current + "hrs";
  studyPrevious.innerText = `Last Month - ${data[2].timeframes.monthly.previous}hrs`;
  exerciseHours.innerText = data[3].timeframes.monthly.current + "hrs";
  exercisePrevious.innerText = `Last Month - ${data[3].timeframes.monthly.previous}hrs`;
  socialHours.innerText = data[4].timeframes.monthly.current + "hrs";
  socialPrevious.innerText = `Last Month - ${data[4].timeframes.monthly.previous}hrs`;
  selfCareHours.innerText = data[5].timeframes.monthly.current + "hrs";
  selfCarePrevious.innerText = `Last Month - ${data[5].timeframes.monthly.previous}hrs`;
}