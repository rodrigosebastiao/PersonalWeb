function openAndClose(button, element) {
    var button = document.querySelector(button);
    var element = document.querySelector(element);
    button.onclick = function () {
        element.classList.toggle("active");
        //element.classList.toggle("inactive");
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

function offerCustomMenu(event) {
    if (event.button == 2) { // ritght click = 2
        rcMenuTarget.style.top = -30 + event.clientY + "px";
        rcMenuTarget.style.left = -50 + event.clientX + "px";
        rcMenuTarget.classList.add("active");
    }
}

function customMenuChoosen(event) {
    event.preventDefault(); //for custom no default contextmenu
    if (event.target == rcMenuTarget) { //if drag on target activate Custom Menu
        righClickMenu.style.top = event.clientY + "px";
        righClickMenu.style.left = event.clientX + "px";
        righClickMenu.classList.add("active");

        /* rcMenuTarget.style.top = -40 + event.clientY + "px";
        rcMenuTarget.style.left = -40 + event.clientX + "px"; */
        rcMenuTarget.classList.remove("active");
        window.oncontextmenu = function (event) {
            event.preventDefault();
        }
    } else { //normal rick click, don't show custom menu
        righClickMenu.classList.remove("active");
        rcMenuTarget.classList.remove("active");
        //return event.type == "contextmenu";
        window.oncontextmenu = function (event) {
            return true; // remove preventDefault();
        }
    }
}


(function clock() {
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

    setTimeout(clock, 60000); //update every minute instead of second
})();



function expand(element) {
    var element = document.querySelectorAll(element);

    element.forEach(function (index, item) {
        index.addEventListener("mouseenter", function () {
            index.classList.add("active");
        }, true);
        index.addEventListener("mouseleave", function () {
            setTimeout(function () {
                index.classList.remove("active");
            }, 1000);
        }, true);
    });
}

expand(".set li");


function copyInfo(copyText) {
    var copyText = document.querySelectorAll(copyText);

    copyText.forEach(function (index) {
        index.addEventListener("click", function (event) {
            event.preventDefault();
            var allowCopy = document.createElement("TEXTAREA");
            allowCopy.value = index.getAttribute("data-title");
            document.documentElement.appendChild(allowCopy);
            allowCopy.select();
            document.execCommand("copy");
            document.documentElement.removeChild(allowCopy);
            if (allowCopy) { //Feedback for copied
                var feedBack = document.createElement("SPAN");
                feedBack.classList.add("feedback");
                feedBack.style.position = "absolute";
                feedBack.style.display = "block";
                feedBack.style.fontSize = "12px";
                feedBack.style.color = "#fff";
                feedBack.style.background = "#222";
                feedBack.style.background = "rgba(0, 0, 0, 0.6)";
                feedBack.style.padding = "15px 30px";
                feedBack.style.left = event.clientX + "px"; //show close to element position clicked
                feedBack.style.top = 30 + event.clientY + "px"; //show close to element position clicked
                feedBack.innerHTML = "Copied to Clipboard!";
                document.body.appendChild(feedBack);
                var timer = 2000;
                setTimeout(function () {
                    document.body.removeChild(feedBack);
                    timer -= 100;
                }, timer);
            }
        });
    });

}

copyInfo(".right li a");


function activateSettings() {
    var tab = document.querySelector(".settings-tab");
    tab.addEventListener("click", function () {
        this.parentElement.classList.toggle("active");
    });
}
activateSettings();



function backgroundControl() {

    var backgroundList = [
        "bg-sky.png",
        "bg-wavetube.jpg",
        "bg-alone-beach.jpg",
        "bg-alpine-alps-autumn.jpg",
        "bg-beach-bird.jpg",
        "bg-beach-bora-bora.jpg",
        "bg-beach-calm.jpg",
        "bg-beautiful-daylight-environment.jpg",
        "bg-bird-s-eye-view.jpg",
        "bg-bridge-clouds-cloudy.jpg",
        "bg-clouds-daylight-environment.jpg",
        "bg-clouds-daylight.jpg",
        "bg-daylight-environment-forest.jpg",
        "bg-stone-beach.jpg",
        "bg-tree.jpg",
        "bg-wave-jump.jpg",
        "bg-wave.jpg",
    ]

    var flickrList = [];

    function flickerJSONApi() {
        var apiKey = "d77ba6c50acac4e12b8c60c42772eac3";
        var gallery_id = "72157704831299001";
        var user_id = "98083080@N00";
        var url = "https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg";
        var flickrRes = "https://api.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=" + apiKey + "&gallery_id=" + gallery_id + "&format=json&nojsoncallback=1";

        var xmlhttp = new XMLHttpRequest();
        var result;
        xmlhttp.open("GET", flickrRes);

        result = xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var result = JSON.parse(this.responseText);
                flickrList = result.photos.photo; //store resources
            }
        }
        xmlhttp.send();
    }
    flickerJSONApi(); //load resources


    var rand = Math.floor(Math.random() * backgroundList.length); //rand * ( max - min ) + min;
    var res;
    document.body.style.backgroundImage = "url(src/img/" + backgroundList[rand] + ")"; // first run: random load

    var input = document.querySelectorAll("#background-options input");
    var option = "local"; //first time for load


    input.forEach(function (index) {
        index.addEventListener("click", function () { //listener for toggle options
            option = index.value;
            var isChecked = index.checked;
            if (isChecked) {
                switch (option) { //verify the value
                    case "local":
                        resource(option, backgroundList); //pass array
                        break;

                    case "flickr":
                        resource(option, flickrList); //pass array flickr
                        break;

                    case "pexels":
                        resource(option, "");
                        break;
                    default:
                        document.body.style.backgroundImage = "/src/img/bg-beach-bird.jpg"; //if all 3 fails
                        break;
                }
            }
        });
    });



    var path = "";
    var i = j = k = 0; //for unique position in the array

    resource(option, backgroundList); //first run to access button next/prev

    function resource(option, arr) { //arr = chosen array
        var prev = document.querySelector(".prev");
        var next = document.querySelector(".next");
        //path = "src/img/" + arr[0];

        next.addEventListener("click", function () {
            if (option == "local") { // confirm choise
                if (arr.length > 1 && i < arr.length - 1) { //verify lower and upper limits
                    i++;
                    console.log(i)
                    path = "src/img/" + arr[i];
                }
            }
            if (option == "flickr") {
                if (arr.length > 1 && j < arr.length - 1) {
                    j++;
                    path = "https://farm" + arr[i].farm + ".staticflickr.com/" + arr[i].server + "/" + arr[i].id + "_" + arr[i].secret + ".jpg";
                }
            }
            if (option == "pexel") {
                if (arr.length > 1 && k < arr.length - 1) {
                    k++;
                    path = "";
                }
            }
            document.cookie = option;
            document.body.style.backgroundImage = "url(" + path + ")";
            console.log(document.body.style.backgroundImage);
        });

        prev.addEventListener("click", function () {
            if (option == "local") { // confirm choise
                if (arr.length > 1 && i >= 1) { //verify lower and upper limits
                    i--;
                    path = "src/img/" + arr[i];
                }
            }
            if (option == "flickr") {
                if (arr.length > 1 && j >= 1) {
                    j--;
                    path = "https://farm" + arr[i].farm + ".staticflickr.com/" + arr[i].server + "/" + arr[i].id + "_" + arr[i].secret + ".jpg";
                }
            }
            if (option == "pexel") {
                if (arr.length > 1 && k >= 1) {
                    k--;
                    path = "";
                }
            }
            document.cookie = option;
            document.body.style.backgroundImage = "url(" + path + ")";
        });
    }
}
backgroundControl();



function themeControl() {

}
themeControl();


window.takeScreenShot = function () {
    html2canvas(document.body).then(function (canvas) {
        document.body.appendChild(canvas);
        //width: 320;
        //height: 220;
    });
}


/* html2canvas(document.body).then(function(canvas) {
    document.body.appendChild(canvas);
}); */