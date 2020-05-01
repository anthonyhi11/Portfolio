document.getElementById("saturn").addEventListener("click", showSaturn);

document.getElementById("whibut").addEventListener("click", showWhibut);

document.getElementById("take-hike").addEventListener("click", showTakeAHike);

document.getElementById("quiz").addEventListener("click", showQuiz);

document.getElementById("about-me").addEventListener("mouseover", showMe);

function showSaturn() {
  document.getElementById("project").innerHTML = saturn;
}

function showWhibut() {
  document.getElementById("project").innerHTML = whibut;
}

function showTakeAHike() {
  document.getElementById("project").innerHTML = takeAHike;
}
function showQuiz() {
  document.getElementById("project").innerHTML = quiz;
}

// function showMe() {
//   document.getElementById("profile-pic").innerHTML = currentMe;
// }
