/* Translate DOM */

var languageList = 
        {
        "eng": {
            start: "Start",
            profileTitle: "Main Strengths",
            settings: "Settings"
        },
        "port": {
            start: "Iniciar",
            profileTitle: "Habilidades",
            settings: "Configurações"
        },
        "es": {
            start: "Comecio",
            profileTitle: "Competencias",
            settings: "Opciones"
        },
        "pyc": {
            start: "Начало",
            profileTitle: "Основные навыки",
            settings: "настройки"
        }
    }
    
window.langActive = "eng";

function translateLanguage(){
    document.querySelector(".start").innerHTML = languageList[langActive].start || null;
    document.querySelector(".profile-title").innerHTML =  languageList[langActive].profileTitle || null;
    document.querySelector(".settings-background-tab").innerHTML =  languageList[langActive].settings || null;
}

// window.onload = translateLanguage();