document.getElementById("saturn").addEventListener("click", showSaturn);

document.getElementById("whibut").addEventListener("click", showWhibut);

document.getElementById("take-hike").addEventListener("click", showTakeAHike);

document.getElementById("quiz").addEventListener("click", showQuiz);
let whibutElement = document.getElementById("whibut");
let takeElement = document.getElementById("take-hike");
let saturnElement = document.getElementById("saturn");
let quizElement = document.getElementById("quiz");
document.getElementById("about-me").addEventListener("mouseover", showMe);
document.getElementById("profile-pic").addEventListener("mouseover", showNewMe);
document.getElementById("profile-pic").addEventListener("mouseleave", showMe);

function showSaturn() {
  document.getElementById("project").innerHTML = saturn;
  saturnElement.classList.toggle("active");
  takeElement.classList.remove("active");
  quizElement.classList.remove("active");
  whibutElement.classList.remove("active");
}

function showWhibut() {
  document.getElementById("project").innerHTML = whibut;
  whibutElement.classList.toggle("active");
  saturnElement.classList.remove("active");
  takeElement.classList.remove("active");
  quizElement.classList.remove("active");
}

function showTakeAHike() {
  document.getElementById("project").innerHTML = takeAHike;
  takeElement.classList.toggle("active");
  quizElement.classList.remove("active");
  saturnElement.classList.remove("active");
  whibutElement.classList.remove("active");
}
function showQuiz() {
  document.getElementById("project").innerHTML = quiz;
  quizElement.classList.toggle("active");
  saturnElement.classList.remove("active");
  whibutElement.classList.remove("active");
  takeElement.classList.remove("active");
}

function showMe() {
  document.getElementById("profile-pic").innerHTML = currentMe;
}

function showNewMe() {
  document.getElementById("profile-pic").innerHTML = youngMe;
}
