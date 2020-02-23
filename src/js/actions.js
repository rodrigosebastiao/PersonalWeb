/*Global Functions */
window.activateElement = activateElement;
window.openAndClose = openAndClose;


function activateElement(elm) { //elements that should activate at first
    elm = document.querySelectorAll(elm);
    elm.forEach(function (item) {
        item.classList.toggle("active");
    });
}

function openAndClose(button, element) {
    var button = document.querySelector(button);
    var element = document.querySelector(element);
    button.onclick = function () {
        element.classList.toggle("active");
        button.classList.toggle("active");
    };
}

/* -- */


activateElement(".start, .start-menu");

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


(function clock () { //clock
    /*Set clock based on UTC time zone, independent of system
    Full zone lists: https://en.wikipedia.org/wiki/List_of_tz_database_time_zones or https://www.zeitverschiebung.net/en/all-countries.html*/
    var clock = document.querySelector(".clock");
    var time_zone = document.createElement("UL");
    time_zone.setAttribute("id", "time-zone");
    time_zone.setAttribute("class", "drop-down-option");

    //Double dimension array: Array[x][] = time zone, Array[][1] = friendly name
    var zoneList = [["America/Sao_Paulo", "São Paulo"], ["Europe/Amsterdam"], ["Africa/Johannesburg", "South Africa"], "Europe/Berlin", ["Asia/Tokyo", "Japan"]];

    for (var i = 0; i <= zoneList.length - 1; i++) {
        var zoneName = typeof zoneList[i] == "object" && zoneList[i].length > 1 && zoneList[i][1].length > 1 ? zoneList[i][1] : zoneList[i];
        var zoneString = typeof zoneList[i] == "object" && zoneList[i].length > 1 ? zoneList[i][0] : zoneList[i];
        
        time_zone.innerHTML += "<li class='zone' id='zone_"+i+"' data-zone='"+zoneString+"'>" +zoneName+ "</li>"
    }

    clock.appendChild(time_zone);

    var zone = document.querySelectorAll(".zone");

    var opt = 0;
    zone[opt].classList.add("active"); //first load

    clock.onclick = function () {//main button
        time_zone.classList.toggle("active");
    };


    var defined_zone;

    function checkActiveZone(set_zone){
        for (i = 0; i <= zone.length - 1; i++) {
            zone[i].classList.remove("active");//clear active
            if( set_zone == zone[i].getAttribute("data-zone")){
                zone[i].classList.add("active")
            }
        }
    }

    zone.forEach(function (item, index) {
        item.onclick = function (event) {
            set_zone = item.getAttribute("data-zone");//clock zones setted from here / conditional position
            checkActiveZone();
            setCookie("set_zone", set_zone);
            clockTimer(set_zone);
        }
    });    

    function clockTimer(set_zone) {
        var hour = document.querySelector("#hour");
        var date = document.querySelector("#date");
        set_zone = getCookie("set_zone") || set_zone
        defined_zone = new Date().toLocaleString("en-US", {
            timeZone: getCookie("set_zone") || set_zone
        });
        checkActiveZone(set_zone);

        var time = new Date(defined_zone);
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

        var clockInterval = setTimeout(clockTimer, 60000); //update every minute
    };    
    clockTimer("America/Sao_Paulo");
})();



(function languageSetting () { //language
    var language = document.querySelector(".language");
    var languageGroup = document.createElement("UL");
    languageGroup.setAttribute("id", "language-list");
    languageGroup.setAttribute("class", "drop-down-option");

    // var languageList = ["ENG", "PORT"];
    var languageKeys = Object.keys(languageList);
    
    for (var i = 0; i <= languageKeys.length - 1; i++) {
        languageGroup.innerHTML += "<li class='language-item' id='lang_"+i+"' data-language='"+languageKeys[i]+"'>" +languageKeys[i]+ "</li>"
    }
    
    language.appendChild(languageGroup);
    
    var languageItems = document.querySelectorAll(".language-item");
    
    var optLang = 0;
    languageItems[optLang].classList.add("active"); //first load
    
    language.onclick = function () {//main button drop down
        languageGroup.classList.toggle("active");
    };
    
    
    function checkActiveLanguage(set_language){
        for (var i = 0; i <= languageItems.length - 1; i++) {
            languageItems[i].classList.remove("active");//clear active
            if( set_language == languageItems[i].getAttribute("data-language")){
                languageItems[i].classList.add("active");
                var langActive = document.querySelector("#language-list .language-item.active")
                                            .getAttribute("data-language");
                document.querySelector(".language .current").innerHTML = langActive;

                window.langActive = langActive;
                translateLanguage();//external function
                setCookie("language", langActive)
            }
        }
    }

    var current = elementCreate("SPAN", "current");
    document.querySelector("#language > a").insertAdjacentElement("afterbegin", current);

    languageItems.forEach(function (item, index) {
        item.onclick = function (event) {
            var langActive = item.getAttribute("data-language");
            checkActiveLanguage(langActive);
        }
    });

    var firstLoad = getCookie("language") || "eng"
    checkActiveLanguage(firstLoad); //first activation
    
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
                feedBack.style.zIndex = "100";
                feedBack.style.display = "block";
                feedBack.style.fontSize = "12px";
                feedBack.style.color = "#fff";
                feedBack.style.background = "#222";
                feedBack.style.background = "rgba(0, 0, 0, 0.6)";
                feedBack.style.padding = "15px 30px";
                feedBack.style.left = event.clientX + "px"; //show close to element position clicked
                feedBack.style.top = 30 + event.clientY + "px"; //show close to element position clicked
                feedBack.style.opacity = "1";
                feedBack.style.animation = "5s";
                feedBack.innerHTML = "Copied to Clipboard!";
                document.body.appendChild(feedBack);
                var timer = 2500;
                var op = 1;
                setTimeout(function () {
                    var fadeOut = setInterval(function () {
                        feedBack.style.opacity = op;
                        op-=0.01;
                        if(op <= 0){
                            clearInterval(fadeOut);
                            document.body.removeChild(feedBack);
                        }
                    }, 10);
                }, timer)
            }
        });
    });
}

copyInfo(".right li a.copy");


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


    var option = "local";
    var selectedArray = backgroundList; //first load

    var input = document.querySelectorAll("#background-options input");

    input.forEach(function (item) {
        item.addEventListener("click", function () { //listener for toggle options
            option = item.value;
            var isChecked = item.checked;
            setCookie("option", item.value);
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
    var area = document.querySelector("MAIN");
    var infoBG = document.querySelector("#info-background");
    var infoBGFurther = document.querySelector("#info-bg-further");

    changeBackground(0);

    next.addEventListener("click", function () {
        changeBackground(1);
    });

    prev.addEventListener("click", function () {
        changeBackground(-1);
    });    

    area.addEventListener("dblclick", function () {
        changeBackground(0);
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
    var themeFormItems = document.querySelector("#theme-items");
    
    var option = "";
    var i = j = k = 0;

    // var pickTheme = {
    //     basic: ["default_theme", "dark", "light"],
    //     color: ["green", "yellow", "red"],
    //     shiny: ["sun_shiny_in_bright", "black_tarantula", "vs_code_default"],
    //     psycho: ["go_with_flow"],
    // };

    
    var themeGroupKeys = Object.keys(themeList);
    
    for(var i = 0; i < themeGroupKeys.length; i++){
        themeFormItems.innerHTML += 
        "<input type='radio' name='tm-choice' value='"+themeGroupKeys[i]+"' id='"+themeGroupKeys[i]+"' class='"+themeGroupKeys[i]+" option'>"+
        "<label for='"+themeGroupKeys[i]+"'>"+themeGroupKeys[i]+"</label>";
    }

    var input = document.querySelectorAll("#theme-options input");
    input[0].checked = true

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
                if (i < Object.keys(themeList[option]).length - 1) {
                    i++;
                    break;
                }
        }

        var themeNameKeys = Object.keys(themeList[option]);

        setCookie("themeOptionPos", i);
        //themeList.option.themeNameKeys[i]();//Run as function
        //themeList[option]["dark"]()
        themeList[option][themeNameKeys[i]]();
        document.body.className = themeNameKeys[i];//change body class [UNUSED]
        infoTheme.innerHTML = themeNameKeys[i];//Print info //.split("_").join(" ").captalize();
    }

    next.addEventListener("click", function () {
        changeItem(1);
    });

    prev.addEventListener("click", function () {
        changeItem(-1);
    });
}
themeControl();


function spotifyAPI(){
    /* window.onSpotifyWebPlaybackSDKReady = () => {
        // const url = "https://api.spotify.com/v1/playlists/7eowpl0Ta8ZXz7fkBCMgeS/tracks/";

        const token = "4fcaf58575a84c60bbaf5b0a4977572a";
        const webPlayback = new Spotify.Player({
            name: "Spotify Web Playback SDK",
            getOAuthToken: callback => { callback(token)}
        });
        webPlayback.connect();
    } */
}
// spotifyAPI();


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