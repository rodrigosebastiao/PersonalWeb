// document.documentElement.style.setProperty("--mainColorFB", "#222");
// document.documentElement.style.setProperty("--mainColor, rgba(0, 0, 0, 0.6)");
// document.documentElement.style.setProperty("--hovers, rgba(255, 255, 255, 0.3)");
// document.documentElement.style.setProperty("--mainColorFB_Chill, #222");
// document.documentElement.style.setProperty("--mainColor_Chill, rgba(0, 0, 0, 0.6)");
// document.documentElement.style.setProperty("--hovers_Chill, rgba(255, 255, 255, 0.3)");
// document.documentElement.style.setProperty("--secondaryColor, rgba(0, 0, 0, 0.6)");

// var themeList = [
//     {
//         basic2: [{
//             "default_theme": function () {
//                 document.documentElement.style.setProperty("--mainColorFB", "#222");
//                 document.documentElement.style.setProperty("--mainColor", "rgba(0, 0, 0, 0.6)");
//                 document.documentElement.style.setProperty("--hovers", "rgba(255, 255, 255, 0.3)");
//                 document.documentElement.style.setProperty("--mainColorFB_Chill", "#222");
//                 document.documentElement.style.setProperty("--mainColor_Chill", "rgba(0, 0, 0, 0.6)");
//                 document.documentElement.style.setProperty("--hovers_Chill", "rgba(255, 255, 255, 0.3)");
//                 document.documentElement.style.setProperty("--secondaryColor", "rgba(0, 0, 0, 0.6)");
//                 document.documentElement.style.setProperty("--mainColorBGSolid", "#000");
//             },
//             "dark": function () {
//                 document.documentElement.style.setProperty("--mainColorFB", "#111");
//                 document.documentElement.style.setProperty("--mainColor", "rgba(0, 0, 0, 0.8)");
//                 document.documentElement.style.setProperty("--hovers", "rgba(255, 255, 255, 0.6)");
//                 document.documentElement.style.setProperty("--mainColorFB_Chill", "#111");
//                 document.documentElement.style.setProperty("--mainColor_Chill", "rgba(0, 0, 0, 0.8)");
//                 document.documentElement.style.setProperty("--hovers_Chill", "rgba(200, 200, 200, 0.6)");
//                 document.documentElement.style.setProperty("--secondaryColor", "rgba(0, 0, 0, 0.8)");
//                 document.documentElement.style.setProperty("--mainColorBGSolid", "#000");
//             },
//             "light": function () {
//                 document.documentElement.style.setProperty("--mainColorFB", "#999");
//                 document.documentElement.style.setProperty("--mainColor", "rgba(90, 90, 90, 0.3)");
//                 document.documentElement.style.setProperty("--hovers", "rgba(255, 255, 255, 0.1)");
//                 document.documentElement.style.setProperty("--mainColorFB_Chill", "#999");
//                 document.documentElement.style.setProperty("--mainColor_Chill", "rgba(0, 0, 0, 0.5)");
//                 document.documentElement.style.setProperty("--hovers_Chill", "rgba(255, 255, 255, 0.3)");
//                 document.documentElement.style.setProperty("--secondaryColor", "rgba(0, 0, 0, 0.5)");
//                 document.documentElement.style.setProperty("--mainColorBGSolid", "#454545");
//             }
//         }]
//     },

// ];



var themeList = {
        basic1: [{
            "default_theme": function () {
                document.documentElement.style.setProperty("--mainColorFB", "#222");
                document.documentElement.style.setProperty("--mainColor", "rgba(0, 0, 0, 0.6)");
                document.documentElement.style.setProperty("--hovers", "rgba(255, 255, 255, 0.3)");
                document.documentElement.style.setProperty("--mainColorFB_Chill", "#222");
                document.documentElement.style.setProperty("--mainColor_Chill", "rgba(0, 0, 0, 0.6)");
                document.documentElement.style.setProperty("--hovers_Chill", "rgba(255, 255, 255, 0.3)");
                document.documentElement.style.setProperty("--secondaryColor", "rgba(0, 0, 0, 0.6)");
                document.documentElement.style.setProperty("--mainColorBGSolid", "#000");
            },
            "dark": function () {
                document.documentElement.style.setProperty("--mainColorFB", "#111");
                document.documentElement.style.setProperty("--mainColor", "rgba(0, 0, 0, 0.8)");
                document.documentElement.style.setProperty("--hovers", "rgba(255, 255, 255, 0.6)");
                document.documentElement.style.setProperty("--mainColorFB_Chill", "#111");
                document.documentElement.style.setProperty("--mainColor_Chill", "rgba(0, 0, 0, 0.8)");
                document.documentElement.style.setProperty("--hovers_Chill", "rgba(200, 200, 200, 0.6)");
                document.documentElement.style.setProperty("--secondaryColor", "rgba(0, 0, 0, 0.8)");
                document.documentElement.style.setProperty("--mainColorBGSolid", "#000");
            },
            "light": function () {
                document.documentElement.style.setProperty("--mainColorFB", "#999");
                document.documentElement.style.setProperty("--mainColor", "rgba(90, 90, 90, 0.3)");
                document.documentElement.style.setProperty("--hovers", "rgba(255, 255, 255, 0.1)");
                document.documentElement.style.setProperty("--mainColorFB_Chill", "#999");
                document.documentElement.style.setProperty("--mainColor_Chill", "rgba(0, 0, 0, 0.5)");
                document.documentElement.style.setProperty("--hovers_Chill", "rgba(255, 255, 255, 0.3)");
                document.documentElement.style.setProperty("--secondaryColor", "rgba(0, 0, 0, 0.5)");
                document.documentElement.style.setProperty("--mainColorBGSolid", "#454545");
            }
        }],


        basic2: {
            "default_theme": function () {
                document.documentElement.style.setProperty("--mainColorFB", "#222");
                document.documentElement.style.setProperty("--mainColor", "rgba(0, 0, 0, 0.6)");
                document.documentElement.style.setProperty("--hovers", "rgba(255, 255, 255, 0.3)");
                document.documentElement.style.setProperty("--mainColorFB_Chill", "#222");
                document.documentElement.style.setProperty("--mainColor_Chill", "rgba(0, 0, 0, 0.6)");
                document.documentElement.style.setProperty("--hovers_Chill", "rgba(255, 255, 255, 0.3)");
                document.documentElement.style.setProperty("--secondaryColor", "rgba(0, 0, 0, 0.6)");
                document.documentElement.style.setProperty("--mainColorBGSolid", "#000");
            },
            "dark": function () {
                document.documentElement.style.setProperty("--mainColorFB", "#111");
                document.documentElement.style.setProperty("--mainColor", "rgba(0, 0, 0, 0.8)");
                document.documentElement.style.setProperty("--hovers", "rgba(255, 255, 255, 0.6)");
                document.documentElement.style.setProperty("--mainColorFB_Chill", "#111");
                document.documentElement.style.setProperty("--mainColor_Chill", "rgba(0, 0, 0, 0.8)");
                document.documentElement.style.setProperty("--hovers_Chill", "rgba(200, 200, 200, 0.6)");
                document.documentElement.style.setProperty("--secondaryColor", "rgba(0, 0, 0, 0.8)");
                document.documentElement.style.setProperty("--mainColorBGSolid", "#000");
            },
            "light": function () {
                document.documentElement.style.setProperty("--mainColorFB", "#999");
                document.documentElement.style.setProperty("--mainColor", "rgba(90, 90, 90, 0.3)");
                document.documentElement.style.setProperty("--hovers", "rgba(255, 255, 255, 0.1)");
                document.documentElement.style.setProperty("--mainColorFB_Chill", "#999");
                document.documentElement.style.setProperty("--mainColor_Chill", "rgba(0, 0, 0, 0.5)");
                document.documentElement.style.setProperty("--hovers_Chill", "rgba(255, 255, 255, 0.3)");
                document.documentElement.style.setProperty("--secondaryColor", "rgba(0, 0, 0, 0.5)");
                document.documentElement.style.setProperty("--mainColorBGSolid", "#454545");
            }
        }
    };
