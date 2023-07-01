function getfromapi() {
  const channelId = "1124778142272331897"; // Channel-ID
  const obftoken = "MTEyNDc3ODYwNjI1ODgzMTQxMA.GACTl7.HOyIAFEMrk48XcI95NV9A_578tT623IWeAAo8g0"; // Bot-Token mit + 0
  const botToken = obftoken.replace(/0\?$/, ""); // Bot-Token

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
