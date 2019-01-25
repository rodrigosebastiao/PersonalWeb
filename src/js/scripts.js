var startBtn = document.querySelector(".start");
var startMenu = document.querySelector(".start-menu");
var projectsModal = document.querySelector(".projects");

var backgroundList = ["bg-sky.png", "bg-sky.png", "bg-wavetube.jpg", "bg-tree.jpg", "bg-wave.jpg"];


startBtn.onclick = function () {
    if (startMenu.style.display == "block") {
        startMenu.style.display = "none";
    } else {
        startMenu.style.display = "block";
    }
};