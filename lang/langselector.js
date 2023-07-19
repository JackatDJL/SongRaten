var currentLanguageIndex = 1; // Index der aktuellen Sprache
var languages = ["de-DE", "en-US", "lat-UNI"]; // Liste der Sprachen
var flagElements = document.getElementsByClassName("flag-icon"); // Alle Flaggen-Elemente

function updateLanguage(language) {
    var lang = language;
    localStorage.setItem("lang", lang);

}

function getFlagEmoji(language) {
    // Funktion zum Abrufen des Flaggen-Emojis basierend auf der Sprache
    if (language === "de-DE") {
        return "🇩🇪";
    } else if (language === "en-US") {
        return "🇺🇸";
    } else if (language === "lat-UNI") {
        return "🇱🇮🇳🇬🇺🇦"; // 🇱🇮🇳🇬🇺🇦 oder 🇱🇦🇹
    }
}

function changeLanguage() {
    currentLanguageIndex = (currentLanguageIndex + 1) % languages.length; // Nächsten Sprachindex ermitteln
    var currentLanguage = languages[currentLanguageIndex]; // Aktuelle Sprache abrufen
    setLanguageCookie(currentLanguage); // Sprach-Cookie setzen
    updateLanguage(currentLanguage); // Sprache aktualisieren
    // Flaggen-Emoji für alle Flaggen-Elemente aktualisieren
    for (var i = 0; i < flagElements.length; i++) {
        var flagElement = flagElements[i];
        flagElement.innerText = getFlagEmoji(currentLanguage);
    }
}

function reloadtext() {
    for (var key in data) {
        if (data.hasOwnProperty(key)) {
        var element = document.getElementById(key);
        if (element) {
            element.innerText = data[key];
        }
        }
    }
}

changeLanguage(); // Direkt Auf Englisch setzen