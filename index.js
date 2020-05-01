document.getElementById("saturn").addEventListener("click", showSaturn);

document.getElementById("whibut").addEventListener("click", showWhibut);

document.getElementById("take-hike").addEventListener("click", showTakeAHike);

document.getElementById("quiz").addEventListener("click", showQuiz);

document.getElementById("about-me").addEventListener("mouseover", showMe);

function showSaturn() {
  console.log("clicked");
  document.getElementById("project").innerHTML = saturn;
}

function showWhibut() {
  console.log("clicked");
  document.getElementById("project").innerHTML = whibut;
}

function showTakeAHike() {
  console.log("clicked");
  document.getElementById("project").innerHTML = takeAHike;
}
function showQuiz() {
  console.log("clicked");
  document.getElementById("project").innerHTML = quiz;
}

// function showMe() {
//   document.getElementById("profile-pic").innerHTML = currentMe;
// }
