function handleBuzzerClick() {
    // Überprüfen, ob bereits ein Zeitstempel vorhanden ist
    if (!localStorage.getItem('timestamp')) {
      // Sound abspielen
      playSound();
  
      // Zeitstempel speichern
      var timestamp = Date.now();
      localStorage.setItem('timestamp', timestamp);
    } else {
      // Bereits ein Zeitstempel vorhanden, keine weitere Aktion ausführen
      console.log('Buzzer bereits gedrückt');
    }
  }
  
  function playSound() {
    // Hier kannst du den Code einfügen, um den Sound abzuspielen
    console.log('Sound wird abgespielt');
  }
  