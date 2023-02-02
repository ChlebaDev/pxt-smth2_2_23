// Cíl: měření sprintu na kratší trati.
// S:   tlačítkem spustit odpočet do startu - 5, 4, 3, 2, 1, teď, různé tóny
//      => po odpočtu START
// S:   -> zaznamenat skutečný start 
// C:   -> zaznamenat doběhnutí, nějaká oslava "Budu pochválen"
// S + C -> na obou branách zobrazení výsledků

radio.setGroup(64)
radio.setFrequencyBand(33)
radio.setTransmitPower(7)

radio.setTransmitSerialNumber(true);

const mySerial = control.deviceSerialNumber();

input.onButtonPressed(Button.B, function() {
    music.playTone(Note.CSharp3, music.beat(BeatFraction.Whole))

    music.rest(music.beat(1000))

    music.playTone(Note.GSharp3, music.beat(BeatFraction.Whole))

    music.rest(music.beat(1000))

    music.playTone(Note.CSharp, music.beat(BeatFraction.Whole))

    music.rest(music.beat(1000))

    music.playTone(Note.GSharp4, music.beat(5000))
})

let s = input.lightLevel();
    
if (s > 180) {
//    console.logValue("Toto je light level", s + "\n\r");
    radio.sendNumber(11);
}








