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

window.onload = function () {
    activateSettings();
}



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

    function flickrAPI() {
        var apiKey = "d77ba6c50acac4e12b8c60c42772eac3";
        var gallery_id = "72157704831299001";
        var user_id = "98083080@N00";
        var urlGallery = "https://api.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=" + apiKey + "&gallery_id=" + gallery_id + "&format=json&nojsoncallback=1";
        var urlSearch = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=" + apiKey + "&text=Nature+Landscape&format=json&nojsoncallback=1";
        var randPage = [];

        function getPage() {
            var XMLHttpPage = new XMLHttpRequest();
            XMLHttpPage.open("GET", urlSearch, true);

            XMLHttpPage.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    var results = JSON.parse(this.responseText);
                    randPage = results.photos.pages; //store resources globally  
                    /*try to pass as OBJECT */
                }
            }
            XMLHttpPage.send();
        }
        getPage();

        function getFinalUrl() {
            randPage += Math.floor(Math.floor() * randPage);
            var urlRandPage = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=" + apiKey + "&text=Nature+Landscape&page=" + randPage + "&format=json&nojsoncallback=1";

            var XMLHttp = new XMLHttpRequest();
            XMLHttp.open("GET", urlRandPage, true);
            XMLHttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    var results = JSON.parse(this.responseText);
                    flickrList = results.photos.photo; //store resources globally
                    console.log(results, results.photos.page);
                }
            }
            XMLHttp.send();
        }
        getFinalUrl();
    }


flickrAPI(); //load resources



var pexelsList = [];

function pexelsAPI() {
    var apiKey = "563492ad6f917000010000010f1bfbd230064102918116227730ba4a";
    var urlSearch = "https://api.pexels.com/v1/search?query=landscape+nature&per_page=15&page=1";

    var XMLHttp = new XMLHttpRequest();
    XMLHttp.open("GET", urlSearch, true);
    XMLHttp.setRequestHeader("Authorization", apiKey);

    XMLHttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var results = JSON.parse(this.responseText);
            pexelsList = results.photos;
        }
    }
    XMLHttp.send();
}
pexelsAPI();



var rand = Math.floor(Math.random() * backgroundList.length); //rand * ( max - min ) + min;
document.body.style.backgroundImage = "url(src/img/" + backgroundList[rand] + ")"; // first run: random load


var option = "local"; //first load
var selectedArray = backgroundList; //first load

var input = document.querySelectorAll("#background-options input");

input.forEach(function (index) {
    index.addEventListener("click", function () { //listener for toggle options
        option = index.value;
        var isChecked = index.checked;
        if (isChecked) {
            switch (option) { //verify the value
                case "local":
                    selectedArray = backgroundList;
                    break;

                case "flickr":
                    selectedArray = flickrList;
                    break;

                case "pexels":
                    selectedArray = pexelsList;
                    break;

                default:
                    document.body.style.backgroundImage = "/src/img/bg-beach-bird.jpg"; //if all 3 fail
                    break;
            }
        }
    });
});


var path = "";
var i = j = k = 0; //for unique position in the selectedArrayay

var prev = document.querySelector(".prev");
var next = document.querySelector(".next");


next.addEventListener("click", function () {
    if (option == "local" && selectedArray.length > 0 && i < selectedArray.length - 1) { //verify lower and upper limits
        i++;
        path = "src/img/" + selectedArray[i];
        document.body.style.backgroundImage = "url(" + path + ")";
    }

    if (option == "flickr" && selectedArray.length > 0 && j < selectedArray.length - 1) {
        j++;
        path = "https://farm" + selectedArray[j].farm + ".staticflickr.com/" + selectedArray[j].server + "/" + selectedArray[j].id + "_" + selectedArray[j].secret + ".jpg";
        document.body.style.backgroundImage = "url(" + path + ")";
    }

    k = Math.floor(Math.random() * selectedArray.length);
    if (option == "pexels" && selectedArray.length > 0 && k < selectedArray.length - 1) {
        path = selectedArray[k].src.large; //large for 1920x1...
        document.body.style.backgroundImage = "url(" + path + ")";
    }
});

prev.addEventListener("click", function () {
    if (option == "local" && selectedArray.length > 0 && i > 0) { //verify lower and upper limits
        i--;
        path = "src/img/" + selectedArray[i];
        document.body.style.backgroundImage = "url(" + path + ")";
    }

    if (option == "flickr" && selectedArray.length > 0 && j > 0) {
        j--;
        path = "https://farm" + selectedArray[j].farm + ".staticflickr.com/" + selectedArray[j].server + "/" + selectedArray[j].id + "_" + selectedArray[j].secret + ".jpg";
        document.body.style.backgroundImage = "url(" + path + ")";
    }

    k = Math.floor(Math.random() * selectedArray.length);
    if (option == "pexels" && selectedArray.length > 0 && k > 0) {
        path = selectedArray[k].src.large; //large for 1920x1...
        document.body.style.backgroundImage = "url(" + path + ")";
    }

});

document.cookie = option;
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