String.prototype.captalize = function () {
    var splited = this.split(" ");
    var word = '';
    for (var i = 0; i < splited.length; i++) {
        var captalized = splited[i].charAt(0).toUpperCase() + splited[i].slice(1);
        word += captalized + " ";
    }
    return word
}

var createCookie = setCookie = function (cname, cvalue, cNumDays) {
    var d = new Date();
    d.setTime(d.getTime() + (cNumDays * 24 * 60 * 60 * 1000));
    var expires = cNumDays ? "; expires=" + d.toUTCString() : "";
    document.cookie = cname + "=" + cvalue + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function deleteCoookie(cname) {
    //document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = cname + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
};