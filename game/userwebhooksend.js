function sendtoapi(message) {

  const channelId = "1124778142272331897"; // Channel-ID
  const botToken = "MTEyNDc3ODYwNjI1ODgzMTQxMA.GnKpXA.TAqPes4SFh3b3gX12V5HqdFHX186Mj-803JwT0"; // Bot-Token

  // Daten für den POST-Request
    const payload = {
      message: localStorage.getItem('gameid') + message // Spiel-ID + Nachricht
    };
  
    // Konfiguration für den POST-Request
  const requestOptions = {
    method: 'POST',
    headers: {
      'Authorization': `Bot ${botToken}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  };
  
  // POST-Request senden
  fetch(`https://discord.com/api/v10/channels/${channelId}/messages`, requestOptions)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      console.log('Nachricht gesendet!');
    })
    .catch(error => {
      console.error('Fehler beim Senden der Nachricht:', error);
    });

}  