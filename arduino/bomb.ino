



void loop() {
  updateRemainingTime();
  
  if (remainingTime == 0) {
    setRedBG();
    lcd.clear();
    lcd.write("*** BOOM ***");
    while (true);
  }

  displayTimer();