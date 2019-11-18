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
        "Basic": {
            "default theme": function () {
                document.documentElement.style.setProperty("--mainColorFB", "#222");
                document.documentElement.style.setProperty("--mainColor", "rgba(0, 0, 0, 0.6)");
                document.documentElement.style.setProperty("--hovers", "rgba(255, 255, 255, 0.3)");
                document.documentElement.style.setProperty("--mainColorFB_Chill", "#222");
                document.documentElement.style.setProperty("--mainColor_Chill", "rgba(0, 0, 0, 0.6)");
                document.documentElement.style.setProperty("--hovers_Chill", "rgba(255, 255, 255, 0.3)");
                document.documentElement.style.setProperty("--secondaryColor", "rgba(0, 0, 0, 0.6)");
                document.documentElement.style.setProperty("--mainColorBGSolid", "#000");
            },
            "Night Sky": function () {
                document.documentElement.style.setProperty("--mainColorFB", "#111");
                document.documentElement.style.setProperty("--mainColor", "rgba(0, 0, 0, 0.8)");
                document.documentElement.style.setProperty("--hovers", "rgba(255, 255, 255, 0.6)");
                document.documentElement.style.setProperty("--mainColorFB_Chill", "#111");
                document.documentElement.style.setProperty("--mainColor_Chill", "rgba(0, 0, 0, 0.8)");
                document.documentElement.style.setProperty("--hovers_Chill", "rgba(200, 200, 200, 0.6)");
                document.documentElement.style.setProperty("--secondaryColor", "rgba(0, 0, 0, 0.8)");
                document.documentElement.style.setProperty("--mainColorBGSolid", "#000");
            },
            "Clear Water": function () {
                document.documentElement.style.setProperty("--mainColorFB", "#999");
                document.documentElement.style.setProperty("--mainColor", "rgba(90, 90, 90, 0.3)");
                document.documentElement.style.setProperty("--hovers", "rgba(255, 255, 255, 0.1)");
                document.documentElement.style.setProperty("--mainColorFB_Chill", "#999");
                document.documentElement.style.setProperty("--mainColor_Chill", "rgba(0, 0, 0, 0.5)");
                document.documentElement.style.setProperty("--hovers_Chill", "rgba(255, 255, 255, 0.3)");
                document.documentElement.style.setProperty("--secondaryColor", "rgba(0, 0, 0, 0.5)");
                document.documentElement.style.setProperty("--mainColorBGSolid", "#454545");
            }
        },

        "Colorful": {
            "Green": function () {
                document.documentElement.style.setProperty("--mainColorFB", "#222");
                document.documentElement.style.setProperty("--mainColor", "rgba(5, 61, 9, 0.7)");
                document.documentElement.style.setProperty("--hovers", "rgba(255, 255, 255, 0.3)");
                document.documentElement.style.setProperty("--mainColorFB_Chill", "#222");
                document.documentElement.style.setProperty("--mainColor_Chill", "rgba(0, 0, 0, 0.6)");
                document.documentElement.style.setProperty("--hovers_Chill", "rgba(255, 255, 255, 0.3)");
                document.documentElement.style.setProperty("--secondaryColor", "rgba(0, 0, 0, 0.6)");
                document.documentElement.style.setProperty("--mainColorBGSolid", "#000");
            },
            "Red": function () {
                document.documentElement.style.setProperty("--mainColorFB", "#111");
                document.documentElement.style.setProperty("--mainColor", "rgba(61, 5, 9, 0.7)");
                document.documentElement.style.setProperty("--hovers", "rgba(255, 255, 255, 0.6)");
                document.documentElement.style.setProperty("--mainColorFB_Chill", "#111");
                document.documentElement.style.setProperty("--mainColor_Chill", "rgba(0, 0, 0, 0.8)");
                document.documentElement.style.setProperty("--hovers_Chill", "rgba(200, 200, 200, 0.6)");
                document.documentElement.style.setProperty("--secondaryColor", "rgba(0, 0, 0, 0.8)");
                document.documentElement.style.setProperty("--mainColorBGSolid", "#000");
            },
            "Blue": function () {
                document.documentElement.style.setProperty("--mainColorFB", "#999");
                document.documentElement.style.setProperty("--mainColor", "rgba(5, 9, 61, 0.6)");
                document.documentElement.style.setProperty("--hovers", "rgba(255, 255, 255, 0.1)");
                document.documentElement.style.setProperty("--mainColorFB_Chill", "#999");
                document.documentElement.style.setProperty("--mainColor_Chill", "rgba(0, 0, 0, 0.5)");
                document.documentElement.style.setProperty("--hovers_Chill", "rgba(255, 255, 255, 0.3)");
                document.documentElement.style.setProperty("--secondaryColor", "rgba(0, 0, 0, 0.5)");
                document.documentElement.style.setProperty("--mainColorBGSolid", "#454545");
            }
        },

        "Solid": {
            "Green": function () {
                document.documentElement.style.setProperty("--mainColorFB", "#222");
                document.documentElement.style.setProperty("--mainColor", "rgba(5, 61, 9, 1)");
                document.documentElement.style.setProperty("--hovers", "rgba(255, 255, 255, 1)");
                document.documentElement.style.setProperty("--mainColorFB_Chill", "#222");
                document.documentElement.style.setProperty("--mainColor_Chill", "rgba(0, 0, 0, 1)");
                document.documentElement.style.setProperty("--hovers_Chill", "rgba(255, 255, 255, 1)");
                document.documentElement.style.setProperty("--secondaryColor", "rgba(0, 0, 0, 1)");
                document.documentElement.style.setProperty("--mainColorBGSolid", "#000");
            },
            "Red": function () {
                document.documentElement.style.setProperty("--mainColorFB", "#111");
                document.documentElement.style.setProperty("--mainColor", "rgba(61, 5, 9, 1)");
                document.documentElement.style.setProperty("--hovers", "rgba(255, 255, 255,1)");
                document.documentElement.style.setProperty("--mainColorFB_Chill", "#111");
                document.documentElement.style.setProperty("--mainColor_Chill", "rgba(0, 0, 0,1)");
                document.documentElement.style.setProperty("--hovers_Chill", "rgba(200, 200, 200,1)");
                document.documentElement.style.setProperty("--secondaryColor", "rgba(0, 0, 0, 1)");
                document.documentElement.style.setProperty("--mainColorBGSolid", "#000");
            },
            "Blue": function () {
                document.documentElement.style.setProperty("--mainColorFB", "#999");
                document.documentElement.style.setProperty("--mainColor", "rgba(5, 9, 61, 1)");
                document.documentElement.style.setProperty("--hovers", "rgba(255, 255, 255, 1)");
                document.documentElement.style.setProperty("--mainColorFB_Chill", "#999");
                document.documentElement.style.setProperty("--mainColor_Chill", "rgba(0, 0, 0, 1)");
                document.documentElement.style.setProperty("--hovers_Chill", "rgba(255, 255, 255, 1)");
                document.documentElement.style.setProperty("--secondaryColor", "rgba(0, 0, 0, 1)");
                document.documentElement.style.setProperty("--mainColorBGSolid", "#454545");
            }
        },

        "Shinny": {
            "Green": function () {
                document.documentElement.style.setProperty("--mainColorFB", "#222");
                document.documentElement.style.setProperty("--mainColor", "rgba(5, 200, 9, 0.7)");
                document.documentElement.style.setProperty("--hovers", "rgba(255, 255, 255, 0.3)");
                document.documentElement.style.setProperty("--mainColorFB_Chill", "#222");
                document.documentElement.style.setProperty("--mainColor_Chill", "rgba(0, 0, 0, 0.6)");
                document.documentElement.style.setProperty("--hovers_Chill", "rgba(255, 255, 255, 0.3)");
                document.documentElement.style.setProperty("--secondaryColor", "rgba(0, 0, 0, 0.6)");
                document.documentElement.style.setProperty("--mainColorBGSolid", "#000");
            },
            "Red": function () {
                document.documentElement.style.setProperty("--mainColorFB", "#111");
                document.documentElement.style.setProperty("--mainColor", "rgba(200, 5, 9, 0.7)");
                document.documentElement.style.setProperty("--hovers", "rgba(255, 255, 255, 0.6)");
                document.documentElement.style.setProperty("--mainColorFB_Chill", "#111");
                document.documentElement.style.setProperty("--mainColor_Chill", "rgba(0, 0, 0, 0.8)");
                document.documentElement.style.setProperty("--hovers_Chill", "rgba(200, 200, 200, 0.6)");
                document.documentElement.style.setProperty("--secondaryColor", "rgba(0, 0, 0, 0.8)");
                document.documentElement.style.setProperty("--mainColorBGSolid", "#000");
            },
            "Blue": function () {
                document.documentElement.style.setProperty("--mainColorFB", "#999");
                document.documentElement.style.setProperty("--mainColor", "rgba(5, 9, 200, 0.6)");
                document.documentElement.style.setProperty("--hovers", "rgba(255, 255, 255, 0.1)");
                document.documentElement.style.setProperty("--mainColorFB_Chill", "#999");
                document.documentElement.style.setProperty("--mainColor_Chill", "rgba(0, 0, 0, 0.5)");
                document.documentElement.style.setProperty("--hovers_Chill", "rgba(255, 255, 255, 0.3)");
                document.documentElement.style.setProperty("--secondaryColor", "rgba(0, 0, 0, 0.5)");
                document.documentElement.style.setProperty("--mainColorBGSolid", "#454545");
            }
        },

        "Psychodelic": {
            "Green": function () {
                document.documentElement.style.setProperty("--mainColorFB", "#222");
                document.documentElement.style.setProperty("--mainColor", "rgba(5, 200, 9, 0.7)");
                document.documentElement.style.setProperty("--hovers", "rgba(255, 255, 255, 0.3)");
                document.documentElement.style.setProperty("--mainColorFB_Chill", "#222");
                document.documentElement.style.setProperty("--mainColor_Chill", "rgba(0, 0, 0, 0.6)");
                document.documentElement.style.setProperty("--hovers_Chill", "rgba(255, 255, 255, 0.3)");
                document.documentElement.style.setProperty("--secondaryColor", "rgba(0, 0, 0, 0.6)");
                document.documentElement.style.setProperty("--mainColorBGSolid", "#000");
            },
            "Red": function () {
                document.documentElement.style.setProperty("--mainColorFB", "#111");
                document.documentElement.style.setProperty("--mainColor", "rgba(200, 5, 9, 0.7)");
                document.documentElement.style.setProperty("--hovers", "rgba(255, 255, 255, 0.6)");
                document.documentElement.style.setProperty("--mainColorFB_Chill", "#111");
                document.documentElement.style.setProperty("--mainColor_Chill", "rgba(0, 0, 0, 0.8)");
                document.documentElement.style.setProperty("--hovers_Chill", "rgba(200, 200, 200, 0.6)");
                document.documentElement.style.setProperty("--secondaryColor", "rgba(0, 0, 0, 0.8)");
                document.documentElement.style.setProperty("--mainColorBGSolid", "#000");
            },
            "Blue": function () {
                document.documentElement.style.setProperty("--mainColorFB", "#999");
                document.documentElement.style.setProperty("--mainColor", "rgba(5, 9, 200, 0.6)");
                document.documentElement.style.setProperty("--hovers", "rgba(255, 255, 255, 0.1)");
                document.documentElement.style.setProperty("--mainColorFB_Chill", "#999");
                document.documentElement.style.setProperty("--mainColor_Chill", "rgba(0, 0, 0, 0.5)");
                document.documentElement.style.setProperty("--hovers_Chill", "rgba(255, 255, 255, 0.3)");
                document.documentElement.style.setProperty("--secondaryColor", "rgba(0, 0, 0, 0.5)");
                document.documentElement.style.setProperty("--mainColorBGSolid", "#454545");
            }
        },

        "Effects": {
            "Green": function () {
                document.documentElement.style.setProperty("--mainColorFB", "#222");
                document.documentElement.style.setProperty("--mainColor", "rgba(5, 200, 9, 0.7)");
                document.documentElement.style.setProperty("--hovers", "rgba(255, 255, 255, 0.3)");
                document.documentElement.style.setProperty("--mainColorFB_Chill", "#222");
                document.documentElement.style.setProperty("--mainColor_Chill", "rgba(0, 0, 0, 0.6)");
                document.documentElement.style.setProperty("--hovers_Chill", "rgba(255, 255, 255, 0.3)");
                document.documentElement.style.setProperty("--secondaryColor", "rgba(0, 0, 0, 0.6)");
                document.documentElement.style.setProperty("--mainColorBGSolid", "#000");
            },
            "Red": function () {
                document.documentElement.style.setProperty("--mainColorFB", "#111");
                document.documentElement.style.setProperty("--mainColor", "rgba(200, 5, 9, 0.7)");
                document.documentElement.style.setProperty("--hovers", "rgba(255, 255, 255, 0.6)");
                document.documentElement.style.setProperty("--mainColorFB_Chill", "#111");
                document.documentElement.style.setProperty("--mainColor_Chill", "rgba(0, 0, 0, 0.8)");
                document.documentElement.style.setProperty("--hovers_Chill", "rgba(200, 200, 200, 0.6)");
                document.documentElement.style.setProperty("--secondaryColor", "rgba(0, 0, 0, 0.8)");
                document.documentElement.style.setProperty("--mainColorBGSolid", "#000");
            },
            "Blue": function () {
                document.documentElement.style.setProperty("--mainColorFB", "#999");
                document.documentElement.style.setProperty("--mainColor", "rgba(5, 9, 200, 0.6)");
                document.documentElement.style.setProperty("--hovers", "rgba(255, 255, 255, 0.1)");
                document.documentElement.style.setProperty("--mainColorFB_Chill", "#999");
                document.documentElement.style.setProperty("--mainColor_Chill", "rgba(0, 0, 0, 0.5)");
                document.documentElement.style.setProperty("--hovers_Chill", "rgba(255, 255, 255, 0.3)");
                document.documentElement.style.setProperty("--secondaryColor", "rgba(0, 0, 0, 0.5)");
                document.documentElement.style.setProperty("--mainColorBGSolid", "#454545");
            }
        },

        "Animation": {
            "Green": function () {
                document.documentElement.style.setProperty("--mainColorFB", "#222");
                document.documentElement.style.setProperty("--mainColor", "rgba(5, 200, 9, 0.7)");
                document.documentElement.style.setProperty("--hovers", "rgba(255, 255, 255, 0.3)");
                document.documentElement.style.setProperty("--mainColorFB_Chill", "#222");
                document.documentElement.style.setProperty("--mainColor_Chill", "rgba(0, 0, 0, 0.6)");
                document.documentElement.style.setProperty("--hovers_Chill", "rgba(255, 255, 255, 0.3)");
                document.documentElement.style.setProperty("--secondaryColor", "rgba(0, 0, 0, 0.6)");
                document.documentElement.style.setProperty("--mainColorBGSolid", "#000");
                document.documentElement.style.setProperty("@keyframes AnimationName",
                "0%{background-position:91% 0%} 50%{background-position:10% 100%} 100%{background-position:91% 0%}", );
            },
            "Red": function () {
                document.documentElement.style.setProperty("--mainColorFB", "#111");
                document.documentElement.style.setProperty("--mainColor", "rgba(200, 5, 9, 0.7)");
                document.documentElement.style.setProperty("--hovers", "rgba(255, 255, 255, 0.6)");
                document.documentElement.style.setProperty("--mainColorFB_Chill", "#111");
                document.documentElement.style.setProperty("--mainColor_Chill", "rgba(0, 0, 0, 0.8)");
                document.documentElement.style.setProperty("--hovers_Chill", "rgba(200, 200, 200, 0.6)");
                document.documentElement.style.setProperty("--secondaryColor", "rgba(0, 0, 0, 0.8)");
                document.documentElement.style.setProperty("--mainColorBGSolid", "#000");
            },
            "Blue": function () {
                document.documentElement.style.setProperty("--mainColorFB", "#999");
                document.documentElement.style.setProperty("--mainColor", "rgba(5, 9, 200, 0.6)");
                document.documentElement.style.setProperty("--hovers", "rgba(255, 255, 255, 0.1)");
                document.documentElement.style.setProperty("--mainColorFB_Chill", "#999");
                document.documentElement.style.setProperty("--mainColor_Chill", "rgba(0, 0, 0, 0.5)");
                document.documentElement.style.setProperty("--hovers_Chill", "rgba(255, 255, 255, 0.3)");
                document.documentElement.style.setProperty("--secondaryColor", "rgba(0, 0, 0, 0.5)");
                document.documentElement.style.setProperty("--mainColorBGSolid", "#454545");
            }
        },
    };
