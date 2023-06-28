// Aktuelle URL erfassen
var currentURL = new URL(window.location.href);

// URL-Parameter erfassen
var urlParams = new URLSearchParams(currentURL.search);

// Wert des "code"-Parameters abrufen und als Variable speichern
var code = urlParams.get("code");

console.log(code); // Ausgabe: 123456
