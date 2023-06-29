function sendWebhookMessage(message) {
    const webhookUrl = 'https://derjacklive.github.io/SongRaten/game/webhook';
  
    // Daten für den POST-Request
    const payload = {
      number: localStorage.getItem('gameid'), // Spiel-ID aus dem Local Storage
      message: localStorage.getItem('gameid') + ': ' + message // Spiel-ID + Nachricht
    };
  
    // Konfiguration für den POST-Request
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    };
  
    // POST-Request senden
    fetch(webhookUrl, requestOptions)
      .then(response => {
        if (response.ok) {
          console.log('Webhook-Nachricht erfolgreich gesendet');
        } else {
          console.error('Fehler beim Senden der Webhook-Nachricht');
        }
      })
      .catch(error => {
        console.error('Fehler beim Senden der Webhook-Nachricht:', error);
      });
  }  