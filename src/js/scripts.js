var info = document.querySelector(".info");

var backgroundList = ["bg-sky.png", "bg-sky.png", "bg-wavetube.jpg", "bg-tree.jpg", "bg-wave.jpg", "bg-alone-beach.jpg",
    "bg-alpine-alps-autumn.jpg", "bg-beach-bird.jpg", "bg-beach-bora-bora.jpg", "bg-beach-calm.jpg",
    "bg-beautiful-daylight-environment.jpg", "bg-bird-s-eye-view.jpg", "bg-bridge-clouds-cloudy.jpg",
    "bg-clouds-daylight-environment.jpg", "bg-clouds-daylight.jpg", "bg-daylight-environment-forest.jpg",
    "bg-tree.jpg", "bg-wave.jpg", "bg-wavetube.jpg"
];


function openAndClose(button, element) {
    var button = document.querySelector(button);
    var element = document.querySelector(element);
    button.onclick = function () {
        element.classList.toggle("active");
    };
}

openAndClose(".start", ".start-menu");
openAndClose(".projects", ".projects-modal");
//openAndClose(".right-click-menu", ".projects-modal");

function clickModalClose(element) {
    var element = document.querySelector(element);
    element.addEventListener("click", function (event) {
        if (event.currentTarget == element) {
            element.classList.toggle("active");
        }
    }, false);
}
clickModalClose(".projects-modal");

function clickOffElementClose(element) {
    var element = document.querySelector(element);
    element.addEventListener("click", function (event) {
        if (event.currentTarget != event.target) {
            element.classList.toggle("active");
        }
    });
}

clickOffElementClose(".right-click-menu");


function choseAllMenus() {
    var button = document.querySelector(".home");
    button.onclick = function () {
        var allOpenedElements = document.querySelectorAll(".start-menu, .projects-modal, .right-click-menu");

        allOpenedElements.forEach(function (index) {
            index.classList.remove("active");
        });
    }
}

choseAllMenus();



var rcMenuTarget = document.querySelector(".right-click-target");
var righClickMenu = document.querySelector(".right-click-menu");

document.addEventListener("mousedown", offerCustomMenu);
document.addEventListener("mouseup", customMenuChoosen);
//document.addEventListener("contextmenu", customMenuChoosen);

function offerCustomMenu(event){
    if (event.button == 2) {// ritght click = 2
        rcMenuTarget.style.top = -60 + event.clientY + "px";
        rcMenuTarget.style.left = -20 + event.clientX + "px";
        rcMenuTarget.classList.add("active");
    }
}

function customMenuChoosen(event){
    event.preventDefault();//for custom no default contextmenu
    if( event.target == rcMenuTarget ){ //if drag on target activate Custom Menu
        righClickMenu.style.top = event.clientY + "px";
        righClickMenu.style.left = event.clientX + "px";
        righClickMenu.classList.add("active");

        /* rcMenuTarget.style.top = -40 + event.clientY + "px";
        rcMenuTarget.style.left = -40 + event.clientX + "px"; */
        rcMenuTarget.classList.remove("active");
        window.oncontextmenu = function(event){
            event.preventDefault();
        }
    } else { //normal rick click, don't show custom menu
        righClickMenu.classList.remove("active");
        rcMenuTarget.classList.remove("active");
        //return event.type == "contextmenu";
        window.oncontextmenu = function(event){
            return true;// remove preventDefault();
        }
    } 
}



/* html2canvas(document.body).then(function(canvas) {
    document.body.appendChild(canvas);
}); */


function clock() {
    var hour = document.querySelector("#hour");
    var date = document.querySelector("#date");
    var time = new Date();
    var mm = time.getMinutes();
    var hh = time.getHours(); //time.toLocaleTimeString() hh/mm/ss;
    var ss = time.getSeconds();
    var DD = time.getDate();
    var MM = time.getMonth() + 1;
    var YYYY = time.getFullYear();

    if (hh < 10) {
        hh = '0' + hh;
    }
    if (mm < 10) {
        mm = '0' + mm;
    }
    if (DD < 10) {
        DD = '0' + DD;
    }
    if (MM < 10) {
        MM = '0' + MM;
    }
  
    hour.innerHTML = hh + ":" + mm;
    date.innerHTML = DD + "/" + MM + "/" + YYYY;

    setTimeout(clock, 60000);//update every minute instead of second
}
clock();


function copyInfo(element, copyThis){
    var element = document.querySelector(element);
    var copyThis = document.querySelector(copyThis);
}


window.takeScreenShot = function () {
    html2canvas(document.body).then(function (canvas) {
        document.body.appendChild(canvas);
        //width: 320;
        //height: 220;
    });
}