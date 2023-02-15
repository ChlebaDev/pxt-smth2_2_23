/*
 Cíl: měření sprintu na kratší trati.
 S:   tlačítkem spustit odpočet do startu - 5, 4, 3, 2, 1, teď, různé tóny
 => po odpočtu START
 S:   -> zaznamenat skutečný start
 C:   -> zaznamenat doběhnutí, nějaká oslava "Budu pochválen"
 S + C -> na obou branách zobrazení výsledků
*/

radio.setGroup(45)
radio.setFrequencyBand(55)
radio.setTransmitPower(7)
radio.setTransmitSerialNumber(true)
let mySerial = control.deviceSerialNumber()

let s = input.lightLevel()

input.onButtonPressed(Button.B, function () {
    music.playTone(Note.CSharp3, music.beat(BeatFraction.Whole))
    basic.showNumber(3)
    
    music.playTone(Note.GSharp3, music.beat(BeatFraction.Whole))
    basic.showNumber(2)

    music.playTone(Note.CSharp, music.beat(BeatFraction.Whole))
    basic.showNumber(1)
    basic.clearScreen()

    music.playTone(Note.GSharp4, music.beat(7500)) // start
    basic.showString("start")
})

while (s > 180) { // jakmile závodník vyběhne, light level bude větší a pošle signál druhému mc:b který začne počítat čas, nejsem si jist přesnou hodnotou světla v osvícené místnosti
    radio.sendNumber(11)
}

radio.onReceivedValue(function (name: string, value: number) {
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.happy), SoundExpressionPlayMode.UntilDone)
    whaleysans.showNumber(value)
})