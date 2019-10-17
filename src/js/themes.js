// document.documentElement.style.setProperty("--mainColorFB", "#222");
// document.documentElement.style.setProperty("--mainColor, rgba(0, 0, 0, 0.6)");
// document.documentElement.style.setProperty("--hovers, rgba(255, 255, 255, 0.3)");
// document.documentElement.style.setProperty("--mainColorFB_Chill, #222");
// document.documentElement.style.setProperty("--mainColor_Chill, rgba(0, 0, 0, 0.6)");
// document.documentElement.style.setProperty("--hovers_Chill, rgba(255, 255, 255, 0.3)");
// document.documentElement.style.setProperty("--secondaryColor, rgba(0, 0, 0, 0.6)");


pickTheme = {
   default_theme: function(){
        document.documentElement.style.setProperty("--mainColorFB", "#222");
        document.documentElement.style.setProperty("--mainColor", "rgba(0, 0, 0, 0.6)");
        document.documentElement.style.setProperty("--hovers", "rgba(255, 255, 255, 0.3)");
        document.documentElement.style.setProperty("--mainColorFB_Chill", "#222");
        document.documentElement.style.setProperty("--mainColor_Chill", "rgba(0, 0, 0, 0.6)");
        document.documentElement.style.setProperty("--hovers_Chill", "rgba(255, 255, 255, 0.3)");
        document.documentElement.style.setProperty("--secondaryColor", "rgba(0, 0, 0, 0.6)");
    },
    "dark": function(){
        document.documentElement.style.setProperty("--mainColorFB", "#222");
        document.documentElement.style.setProperty("--mainColor", "rgba(255, 0, 0, 0.6)");
        document.documentElement.style.setProperty("--hovers", "rgba(255, 255, 255, 0.3)");
        document.documentElement.style.setProperty("--mainColorFB_Chill", "#222");
        document.documentElement.style.setProperty("--mainColor_Chill", "rgba(0, 0, 0, 0.6)");
        document.documentElement.style.setProperty("--hovers_Chill", "rgba(255, 255, 255, 0.3)");
        document.documentElement.style.setProperty("--secondaryColor", "rgba(0, 0, 0, 0.6)");
    },
    light: function(){
        document.documentElement.style.setProperty("--mainColorFB", "#222");
        document.documentElement.style.setProperty("--mainColor", "rgba(255, 0, 0, 0.6)");
        document.documentElement.style.setProperty("--hovers", "rgba(255, 255, 255, 0.3)");
        document.documentElement.style.setProperty("--mainColorFB_Chill", "#222");
        document.documentElement.style.setProperty("--mainColor_Chill", "rgba(0, 0, 0, 0.6)");
        document.documentElement.style.setProperty("--hovers_Chill", "rgba(255, 255, 255, 0.3)");
        document.documentElement.style.setProperty("--secondaryColor", "rgba(0, 0, 0, 0.6)");
    }
}