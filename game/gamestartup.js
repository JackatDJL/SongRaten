// Aktuelle URL erfassen
var currentURL = new URL(window.location.href);

// URL-Parameter erfassen
var urlParams = new URLSearchParams(currentURL.search);

// Wert des "code"-Parameters abrufen und als Variable speichern
var code = urlParams.get("code");

// Wert des "t"-Parameters abrufen und als Variable speichern
var t = urlParams.get("t");

console.log(code); // Ausgabe: 123435
console.log(t); // Ausgabe: 0 (oder den entsprechenden Wert aus der URL)

// Speichern der Werte im Local Storage
localStorage.setItem("gameid", code);
localStorage.setItem("isPresenter", t);

// Id Test
if (localStorage.getItem("gameid") === null) {
    window.location.href = "https://derjacklive.github.io/SongRaten/error.html";
}

// Join-Scipt
const message = "join";
sendWebhookMessage(message);
getwebhookmesage(callback);
if (newestmessage != "1","2","3","4"){
    if (t == "1"){
        console.log("Join As Presenter")
        localStorage.setItem("playerid", "0");
    }
}
else if (newestmessage == "1","2","3","4"){
    console.log("Join As Player")
    localStorage.setItem("playerid", newestmessage);
}
else if (newestmessage == "full"){
    console.log("Game is full")
    window.location.href = "https://derjacklive.github.io/SongRaten/game/gamefull.html";
}
else {
    console.log("Error")
    window.location.href = "https://derjacklive.github.io/SongRaten/error.html";
}