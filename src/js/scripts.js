function activateElement(elm) { //elements that should activate at first
    elm = document.querySelectorAll(elm);
    elm.forEach(function (item) {
        item.classList.toggle("active");
    });
}

activateElement(".start, .start-menu");

function openAndClose(button, element) {
    var button = document.querySelector(button);
    var element = document.querySelector(element);
    button.onclick = function () {
        element.classList.toggle("active");
        button.classList.toggle("active");
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


function choseClearAllItems() {
    var homeButton = document.querySelector(".home");
    homeButton.onclick = function () {
        var allOpenedElements = document.querySelectorAll(".start-menu, .projects-modal, .right-click-menu, .start, .projects, .settings-background-wrap");

        allOpenedElements.forEach(function (item) {
            item.classList.remove("active");
        });
    }
}
choseClearAllItems();


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


(function () { //clock
    var clock = document.querySelector(".clock");
    var time_zones = document.createElement("UL");
    time_zones.setAttribute("id", "time-zone");
    time_zones.innerHTML =
        "<li class='zone' id='zone_0'>São Paulo/Brasil</li>" +
        "<li class='zone' id='zone_1'>Amsterdam/Netherlands</li>" +
        "<li class='zone' id='zone_2'>Berlin/Germany</li>" +
        "<li class='zone' id='zone_3'>Tokyo/Japan</li>";

    clock.appendChild(time_zones);

    var zone = document.querySelectorAll(".zone");
    var zoneList = ["America/Sao_Paulo", "Europe/Amsterdam", "Europe/Berlin", "Asia/Tokyo"];
    var i = 0;
    zone[i].classList.add("active"); //first load

    clock.onclick = function () {
        time_zones.classList.toggle("active");
    };

    zone.forEach(function (item, index) {
        item.onclick = function (event) {
            for (i = 0; i <= zone.length - 1; i++) {
                zone[i].classList.remove("active");
            }
            item.classList.add("active"); //visual style only

            set_zone = getCookie("set_zone") || item.id; //clock zones setted from here
            switch (set_zone) {
                case "zone_0":
                    set_zone = zoneList[0]
                    break;
                case "zone_1":
                    set_zone = zoneList[1]
                    break;
                case "zone_2":
                    set_zone = zoneList[2]
                    break;
                case "zone_3":
                    set_zone = zoneList[3]
                    break;
            }
            clockTimer(set_zone);
        }
    });

    function clockTimer(set_zone) {
        setCookie("set_zone", set_zone);
        var hour = document.querySelector("#hour");
        var date = document.querySelector("#date");
        var set_zone = new Date().toLocaleString("en-US", {
            timeZone: set_zone
        });

        var time = new Date(set_zone);
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

        var clockInterval = setTimeout(clockTimer, 60000); //update every minute instead of second
    };
    clockTimer("America/Sao_Paulo");
})();



function expand(element) {
    var element = document.querySelectorAll(element);

    element.forEach(function (item) {
        item.addEventListener("mouseenter", function () {
            item.classList.add("active");
        }, true);
        item.addEventListener("mouseleave", function () {
            setTimeout(function () {
                item.classList.remove("active");
            }, 1000);
        }, true);
    });
}

expand(".set li");



function copyInfo(copyText) {
    var copyText = document.querySelectorAll(copyText);

    copyText.forEach(function (item) {
        item.addEventListener("click", function (event) {
            event.preventDefault();
            var allowCopy = document.createElement("TEXTAREA");
            allowCopy.value = item.getAttribute("data-title");
            document.documentElement.appendChild(allowCopy);
            allowCopy.select();
            document.execCommand("copy");
            document.documentElement.removeChild(allowCopy);

            if (allowCopy && !item.classList.contains("clock") && !item.classList.contains("eng")) { //Feedback for copied string, except a few elements
                console.log("allow copy");
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
                var timer = 1500;
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
    var tab = document.querySelector(".settings-background-tab");
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
        "bg-pool-beach.jpg",
        "bg-clouds-conifer-daylight.jpg",
        "bg-stone-river.jpg",
    ]


    var flickrList = [];

    var rnd = function (val) {
        return Math.floor(Math.random() * val);
    }

    function flickrAPI() {
        var apiKey = "d77ba6c50acac4e12b8c60c42772eac3";
        var gallery_id = "72157704831299001";
        var user_id = "98083080@N00";
        var urlGallery = "https://api.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=" + apiKey + "&gallery_id=" + gallery_id + "&format=json&nojsoncallback=1";
        var urlSearch = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=" + apiKey + "&text=landscape+water&page=&format=json&nojsoncallback=1";
        var randPage = [];

        function getAllPages(getRandomPage) {
            var XMLHttpPage = new XMLHttpRequest();
            XMLHttpPage.open("GET", urlSearch, true);

            XMLHttpPage.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    var results = JSON.parse(this.responseText);
                    hasRandomPage = results.photos.pages; //store resources globally  
                    /*try to pass as OBJECT */
                    getRandomPage(hasRandomPage); //callback when finished
                }
            }
            XMLHttpPage.send();

        }

        function getFinalURL(hasRandomPage) {
            hasRandomPage = rnd(hasRandomPage); //choose random page with return of random function

            var urlRandPage = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=" + apiKey + "&text=landscape+water&page=" + hasRandomPage + "&format=json&nojsoncallback=1";
            var XMLHttp = new XMLHttpRequest();
            XMLHttp.open("GET", urlRandPage, true);
            XMLHttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    var results = JSON.parse(this.responseText);
                    flickrList = results.photos.photo; //store resources globally
                    // console.log(results);
                }
            }
            XMLHttp.send();
        }
        getAllPages(getFinalURL);
    }
    flickrAPI(); //load resources



    var pexelsList = [];

    function pexelsAPI() {
        var apiKey = "563492ad6f917000010000010f1bfbd230064102918116227730ba4a"; // used for AUTH header
        var randomPage = rnd(100); //chosee random page of total size
        var urlSearch = "https://api.pexels.com/v1/search?query=landscape+water&per_page=80&page=" + randomPage;

        var XMLHttp = new XMLHttpRequest();
        XMLHttp.open("GET", urlSearch, true);
        XMLHttp.setRequestHeader("Authorization", apiKey); //API KEY AUTH as HEADER
        XMLHttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var results = JSON.parse(this.responseText);
                pexelsList = results.photos;
                // console.log(results);
            }
        }
        XMLHttp.send();
    }
    pexelsAPI();

    //load with page, before any click
    //document.body.style.backgroundImage = "url(src/img/" + backgroundList[rand] + ")"; // first run: random load


    var option = "local"; //first load
    var selectedArray = backgroundList; //first load

    var input = document.querySelectorAll("#background-options input");

    input.forEach(function (item) {
        item.addEventListener("click", function () { //listener for toggle options
            option = getCookie("option", option) || item.value;
            var isChecked = item.checked;
            if (isChecked) {
                switch (option) { //verify the value
                    case "local":
                        selectedArray = backgroundList;
                        changeBackground();
                        break;

                    case "flickr":
                        selectedArray = flickrList;
                        changeBackground(0);
                        break;

                    case "pexels":
                        selectedArray = pexelsList;
                        changeBackground(0);
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
    var more_pages_i = more_pages_j = more_pages_k = 0; // number of selected images     
    var once = true;

    var prev = document.querySelector(".prev");
    var next = document.querySelector(".next");
    var infoBG = document.querySelector("#info-background");
    var infoBGFurther = document.querySelector("#info-bg-further");

    changeBackground(0);
    setCookie("option", option);

    next.addEventListener("click", function () {
        changeBackground(1);
    });

    prev.addEventListener("click", function () {
        changeBackground(-1);
    });

    function changeBackground(inc) {
        if (option == "local" && selectedArray.length > 0) { //verify lower and upper limits for negative/positive numbers
            if (inc == 1 && i < selectedArray.length - 1) {
                i++;
            }

            if (inc == -1 && i > 0) { //reduce if i has size
                i--;
            }

            if (inc == 0) { //run only once
                i = rnd(selectedArray.length);
                once = false;
            }

            path = "src/img/" + selectedArray[i];
            document.body.style.backgroundImage = "url(" + path + ")";
            var imgTitle = selectedArray[i].replace(/bg-|.jpg|.png|(\-)/gi, " ").trim(); //remoev tags, dashs and extensions jpg, png etc
            infoBG.innerHTML = imgTitle;
            infoBGFurther.innerHTML = (+(i + 1)) + " / " + selectedArray.length;
        }


        if (option == "flickr" && selectedArray.length > 0) { //verify lower and upper limits for negative/positive numbers
            if (inc == 1 && j < selectedArray.length - 1) {
                j = rnd(selectedArray.length);
            }

            if (inc == -1 && j > 0) { //reduce if j has size
                j = rnd(selectedArray.length);
            }

            if (inc == 0) { //run only once
                j = rnd(selectedArray.length);
                once = false;
            }

            path = "https://farm" + selectedArray[j].farm + ".staticflickr.com/" + selectedArray[j].server + "/" + selectedArray[j].id + "_" + selectedArray[j].secret + "_c.jpg"; // _b for Large _c for medium _o for original
            document.body.style.backgroundImage = "url(" + path + ")";

            /* if(!selectedArray[j].title || selectedArray[j].title == "" || selectedArray[j].title == " "){
                selectedArray[j].title = "Untitled";
            } */
            infoBG.innerHTML = selectedArray[j].title;
            infoBGFurther.innerHTML = (+(j + 1)) + " / " + selectedArray.length //+ "<br>" + "page " + selectedArray[j].page; log(flickrList.page);

            more_pages_j++;
            if (more_pages_j == selectedArray.length) { //if the number of selected images in page end, call another page
                flickrAPI();
            }
        }


        if (option == "pexels" && selectedArray.length > 0) { //verify lower and upper limits for negative/positive numbers
            if (inc == 1 && k < selectedArray.length - 1) {
                k = rnd(selectedArray.length);
            }

            if (inc == -1 && k > 0) { //reduce if i has size
                k = rnd(selectedArray.length);
            }

            if (inc == 0) { //run only once
                k = rnd(selectedArray.length);
                once = false;
            }

            path = selectedArray[k].src.large; //large for 1920x1...
            document.body.style.backgroundImage = "url(" + path + ")";

            /* if(!selectedArray[j].url || selectedArray[j].url == "" || selectedArray[j].url == " "){
                selectedArray[j].url = "Untitled";
            } */

            var imgTitle = selectedArray[j].url.replace(/https:\/\/www.pexels.com\/photo|-|\d{3,8}$/gi, " ");
            infoBG.innerHTML = imgTitle;
            infoBGFurther.innerHTML = (+(k + 1)) + " / " + selectedArray.length //+ "<br>" + "page " + selectedArray.pages;


            more_pages_k++;
            if (more_pages_k == selectedArray.length) { //if the number of selected images in page end, call another page
                pexelsAPI();
            }
        }
    }
}
backgroundControl();



function themeControl() {
    var prev = document.querySelector(".prev.tm");
    var next = document.querySelector(".next.tm");
    var infoTheme = document.querySelector("#info-theme");
    var infoTmFurther = document.querySelector("#info-tm-further");
    var option = "";
    var i = j = k = 0;

    var themeList = {
        basic: ["default_theme", "dark", "light"],
        color: ["green", "yellow", "red"],
        shiny: ["sun_shiny_in_bright", "black_tarantula", "vs_code_default"],
        psycho: ["go_with_flow"],
    };

    var input = document.querySelectorAll("#theme-options input");

    //first run before click
    var isChecked = getCookie("themeChecked") || input[0].checked;
    option = input[0].value;
    if (isChecked) {
        changeItem(0);
    }

    input.forEach(function (item) {

        item.addEventListener("click", function () { //listener for every toggle options
            option = item.value;
            isChecked = item.checked;
            setCookie("themeChecked", option);
            if (isChecked) {
                changeItem(0);
            }
        });
    });

    function changeItem(val) {
        getCookie("themeOptionPos");
        switch (val) {
            case -1:
                if (i > 0) {
                    i--;
                    break;
                }
                case 0:
                    i = 0;
                    break;
                case 1:
                    if (i < themeList[option].length - 1) {
                        i++;
                        break;
                    }
        }
        setCookie("themeOptionPos", i);
        document.body.className = themeList[option][i];
        infoTheme.innerHTML = themeList[option][i].split("_").join(" ").captalize();
    }

    next.addEventListener("click", function () {
        changeItem(1);
    });

    prev.addEventListener("click", function () {
        changeItem(-1);
    });
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