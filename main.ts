radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber > 10) {
        cuteBot.motors(receivedNumber, 10)
    } else if (receivedNumber < -10) {
        cuteBot.motors(10, Math.abs(receivedNumber))
    } else {
        cuteBot.motors(50, 50)
    }
})
radio.setGroup(1)
