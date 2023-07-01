function getfromapi() {
  const channelId = "1124778142272331897"; // Channel-ID
  const botToken = "MTEyNDc3ODYwNjI1ODgzMTQxMA.GSrpc3.lDF3fWJW4FBxuuYd-4Pu6qQcEfjbz0IDLVPKfM"; // Bot-Token

  // Konfiguration für den GET-Request
  const requestOptions = {
    method: 'GET',
    headers: {
      'Authorization': `Bot ${botToken}`,
      'Content-Type': 'application/json'
    }
  };

  // GET-Request senden, um die neueste Nachricht abzurufen
  fetch(`https://discord.com/api/v10/channels/${channelId}/messages?limit=1`, requestOptions)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      const latestMessage = data[0];
      const gameid = localStorage.getItem("gameid");

      // Überprüfen, ob die empfangene Nachricht mit der Spiel-ID übereinstimmt
      if (latestMessage.content.startsWith(gameid)) {
        const messageContent = latestMessage.content.substring(gameid.length);
        console.log("Neueste Nachricht im Kanal:", messageContent);

        // Weitere Verarbeitung der Nachricht
        localStorage.setItem("ltsmessage", messageContent);

      } else {
        console.log("Die empfangene Nachricht stimmt nicht mit der Spiel-ID überein.");
      }
    })
    .catch(error => {
      console.error('Fehler beim Abrufen der neuesten Nachricht:', error);
    });
}
