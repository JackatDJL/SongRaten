function sendToDiscord(messageContent) {
    const channelId = "1124778142272331897"; // ID des Zielkanals
    const obftoken = "MTEyNDc3ODYwNjI1ODgzMTQxMA.GACTl7.HOyIAFEMrk48XcI95NV9A_578tT623IWeAAo8g0"; // Bot-Token
    const botToken = obftoken.replace(/0\?$/, ""); // Bot-Token
  
    // Konfiguration für den POST-Request
    const requestOptions = {
      method: 'POST',
      headers: {
        'Authorization': `Bot ${botToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        content: messageContent,
      }),
    };
  
    // POST-Request senden, um die Nachricht zu versenden
    fetch(`https://discord.com/api/v10/channels/${channelId}/messages`, requestOptions)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        console.log("Nachricht erfolgreich gesendet!");
      })
      .catch(error => {
        console.error('Fehler beim Senden der Nachricht:', error);
      });
  }
  
  // Beispielaufruf der Funktion zum Senden einer Nachricht
  sendToDiscord("Hallo Discord!"); // Hier kannst du den gewünschten Inhalt der Nachricht angeben
  