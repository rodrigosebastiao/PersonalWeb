var info = document.querySelector(".info");

var backgroundList = ["bg-sky.png", "bg-sky.png", "bg-wavetube.jpg", "bg-tree.jpg", "bg-wave.jpg", "bg-alone-beach.jpg",
    "bg-alpine-alps-autumn.jpg", "bg-beach-bird.jpg", "bg-beach-bora-bora.jpg", "bg-beach-calm.jpg",
    "bg-beautiful-daylight-environment.jpg", "bg-bird-s-eye-view.jpg", "bg-bridge-clouds-cloudy.jpg",
    "bg-clouds-daylight-environment.jpg", "bg-clouds-daylight.jpg", "bg-daylight-environment-forest.jpg",
    "bg-tree.jpg", "bg-wave.jpg", "bg-wavetube.jpg"
];



function openClose(btn, el) {
    var button = document.querySelector(btn);
    var element = document.querySelector(el);
    button.onclick = function () {
        if (element.style.display == "block") {
            element.style.display = "none";
        } else {
            element.style.display = "block";
        }
    };
}

openClose(".start", ".start-menu");
openClose(".projects", ".projects-modal");

function clickModalClose(el){
    var element = document.querySelector(el);
}

/* html2canvas(document.body).then(function(canvas) {
    document.body.appendChild(canvas);
}); */


function clock() {
    var hour = document.querySelector("#hour");
    var date = document.querySelector("#date");
    var time = new Date();
    var mm = time.getMinutes();
    var hh = time.getHours();//time.toLocaleTimeString() hh/mm/ss;
    var ss = time.getSeconds();
    var DD = time.getDate();
    var MM = time.getMonth() + 1;
    var YYYY = time.getFullYear();
    
    if (DD < 10) {
        DD = '0' + DD;
    }

    if (MM < 10) {
        MM = '0' + MM;
    }

    hour.innerHTML = hh+":"+mm;
    date.innerHTML = DD + "/" + MM + "/" + YYYY;
}

setInterval(clock, 1000);


window.takeScreenShot = function () {
    html2canvas(document.body).then(function (canvas) {
        document.body.appendChild(canvas);
        //width: 320;
        //height: 220;
    });
}