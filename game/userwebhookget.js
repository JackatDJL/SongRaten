function getwebhookmesage(callback) {
  const express = require('express');
  const bodyParser = require('body-parser');

  const app = express();
  app.use(bodyParser.json());

  // Webhook-Endpunkt zum Empfangen der Nachrichten
  app.post('/webhook', (req, res) => {
    // Verarbeite die eingehende Webhook-Nachricht
    const payload = req.body; // Zugriff auf die Daten des Webhooks

    // Abrufen der Spiel-ID aus dem Local Storage
    const gameid = localStorage.getItem("gameid");

    // Überprüfe, ob die empfangene Nummer mit der Spiel-ID übereinstimmt
    if (payload.number === gameid) {
      // Die empfangene Nummer entspricht der Spiel-ID

      // Speichere die Nachricht in einer Variable (z.B. newestmessage)
      const newestmessage = payload.message;

      // Rufe die Callback-Funktion mit der empfangenen Nachricht auf
      if (callback && typeof callback === 'function') {
        callback(newestmessage);
      }
    }

    // Sende eine Antwort an den Absender des Webhooks
    res.sendStatus(200);
  });

  app.listen(3000, () => {
    console.log('Webhook-Server läuft auf Port 3000');
  });
}
