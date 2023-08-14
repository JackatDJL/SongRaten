var language = "de-DE"; // Ändern auf Englisch, wenn funktioniert
var languageune1 = null;
var languageune = null;

// Funktion zum Abrufen der Sprache und Zustimmung
function getLanguageAndConsentintern() {
  var name = "language=";
  var cookies = document.cookie.split(';');
  
  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i].trim();
    
    if (cookie.indexOf(name) === 0) {
      var cookieValue = cookie.substring(name.length, cookie.length);
      var cookieData = cookieValue.split('&');
      
      var languageune = cookieData[0];
      var consent = cookieData[1].split('=')[1];

      if (languageune === null) {
        languageune1 = "de-DE"; // Ändern auf Englisch, wenn funktioniert
      }
      
      return {
        languageune1: languageune1,
        consent: consent === "true"
      };
    }
  }
  if (languageune1 === null) {
    language = "de-DE"; // Ändern auf Englisch, wenn funktioniert
  } else {
    language = languageune1;
  }
  return {
    language: language,
    consent: false // Set the default consent to false if no cookies are found
  };
}

function setLanguageCookie(language) {
  var languageAndConsent = getLanguageAndConsentintern();
  if (languageAndConsent) {
    var consent = languageAndConsent.consent; // Declare the 'consent' variable here
    if (consent) {
      var expirationDate = new Date();
      expirationDate.setFullYear(expirationDate.getFullYear() + 1);

      var cookieValue = "language=" + language + "&cookiesAccepted=true";

      document.cookie = cookieValue + "; expires=" + expirationDate.toUTCString() + "; path=/";
    }
  }
}

// Beispiel für die Verwendung:
function getlngandcons() {
  var languageAndConsent = getLanguageAndConsentintern();
  if (languageAndConsent) {
    var language = languageAndConsent.language;
    var consent = languageAndConsent.consent;
    
    console.log("Gespeicherte Sprache: " + language);
    console.log("Cookies akzeptiert: " + consent);
  } else {
    console.log("Keine gespeicherten Daten gefunden");
  }
}
