function MissionA3 () {
    Point = 0
    while (!(Point >= 4)) {
        if (iBIT.ReadADC(ibitReadADC.ADC1) < SenLeft && iBIT.ReadADC(ibitReadADC.ADC2) < SenRight && Point == 0) {
            Pass()
            Point += 1
        }
        if (iBIT.ReadADC(ibitReadADC.ADC1) < SenLeft && iBIT.ReadADC(ibitReadADC.ADC2) < SenRight && Point == 1) {
            Pass()
            TurnLeft()
            Point += 1
        }
        if (iBIT.ReadADC(ibitReadADC.ADC1) < SenLeft && iBIT.ReadADC(ibitReadADC.ADC2) < SenRight && Point == 2) {
            Pass()
            TurnRight()
            Point += 1
        }
        if (iBIT.ReadADC(ibitReadADC.ADC1) < SenLeft && iBIT.ReadADC(ibitReadADC.ADC2) < SenRight && Point == 3) {
            Point += 1
        }
        Run()
    }
    iBIT.MotorStop()
}
function MissionA5 () {
    Point = 0
    while (!(Point >= 8)) {
        if (iBIT.ReadADC(ibitReadADC.ADC1) < SenLeft && iBIT.ReadADC(ibitReadADC.ADC2) < SenRight && Point == 0) {
            Pass()
            Point += 1
        }
        if (iBIT.ReadADC(ibitReadADC.ADC1) < SenLeft && iBIT.ReadADC(ibitReadADC.ADC2) < SenRight && Point == 1) {
            Pass()
            Point += 1
        }
        if (iBIT.ReadADC(ibitReadADC.ADC1) < SenLeft && iBIT.ReadADC(ibitReadADC.ADC2) < SenRight && Point == 2) {
            Pass()
            TurnLeft()
            Point += 1
        }
        if (iBIT.ReadADC(ibitReadADC.ADC1) < SenLeft && iBIT.ReadADC(ibitReadADC.ADC2) < SenRight && Point == 3) {
            Pass()
            Point += 1
        }
        if (iBIT.ReadADC(ibitReadADC.ADC1) < SenLeft && iBIT.ReadADC(ibitReadADC.ADC2) < SenRight && Point == 4) {
            Pass()
            TurnLeft()
            Point += 1
        }
        if (iBIT.ReadADC(ibitReadADC.ADC1) < SenLeft && iBIT.ReadADC(ibitReadADC.ADC2) < SenRight && Point == 5) {
            Pass()
            TurnRight()
            Point += 1
        }
        if (iBIT.ReadADC(ibitReadADC.ADC1) < SenLeft && iBIT.ReadADC(ibitReadADC.ADC2) < SenRight && Point == 6) {
            Pass()
            Point += 1
        }
        if (iBIT.ReadADC(ibitReadADC.ADC1) < SenLeft && iBIT.ReadADC(ibitReadADC.ADC2) < SenRight && Point == 7) {
            Point += 1
        }
        Run()
    }
    iBIT.MotorStop()
}
function TurnLeft () {
    iBIT.setMotor(ibitMotorCH.M1, ibitMotor.Backward, 50)
    iBIT.setMotor(ibitMotorCH.M2, ibitMotor.Forward, 50)
    basic.pause(Turn)
    iBIT.MotorStop()
}
input.onButtonPressed(Button.A, function () {
    if (Mission == 0) {
    	
    } else if (Mission == 1) {
        MissionA1()
    } else if (Mission == 2) {
        MissionA2()
    } else if (Mission == 3) {
        MissionA3()
    } else if (Mission == 4) {
        MissionA4()
    } else if (Mission == 5) {
        MissionA5()
    } else if (Mission == 6) {
        MissionA6()
    } else {
    	
    }
})
function Pass () {
    iBIT.Motor2(ibitMotor.Forward, 50, 50)
    basic.pause(pass)
    iBIT.MotorStop()
}
function MissionA4 () {
    Point = 0
    while (!(Point >= 5)) {
        if (iBIT.ReadADC(ibitReadADC.ADC1) < SenLeft && iBIT.ReadADC(ibitReadADC.ADC2) < SenRight && Point == 0) {
            Pass()
            Point += 1
        }
        if (iBIT.ReadADC(ibitReadADC.ADC1) < SenLeft && iBIT.ReadADC(ibitReadADC.ADC2) < SenRight && Point == 1) {
            Pass()
            TurnLeft()
            Point += 1
        }
        if (iBIT.ReadADC(ibitReadADC.ADC1) < SenLeft && iBIT.ReadADC(ibitReadADC.ADC2) < SenRight && Point == 2) {
            Pass()
            Point += 1
        }
        if (iBIT.ReadADC(ibitReadADC.ADC1) < SenLeft && iBIT.ReadADC(ibitReadADC.ADC2) < SenRight && Point == 3) {
            Pass()
            TurnLeft()
            Point += 1
        }
        if (iBIT.ReadADC(ibitReadADC.ADC1) < SenLeft && iBIT.ReadADC(ibitReadADC.ADC2) < SenRight && Point == 4) {
            Point += 1
        }
        Run()
    }
    iBIT.MotorStop()
}
// ลองทำดู
function MissionA6 () {
    Point = 0
    while (!(Point >= 8)) {
        if (iBIT.ReadADC(ibitReadADC.ADC1) < SenLeft && iBIT.ReadADC(ibitReadADC.ADC2) < SenRight && Point == 0) {
            Pass()
            Point += 1
        }
        if (iBIT.ReadADC(ibitReadADC.ADC1) < SenLeft && iBIT.ReadADC(ibitReadADC.ADC2) < SenRight && Point == 0) {
            Point += 1
        }
        Run()
    }
    iBIT.MotorStop()
}
input.onButtonPressed(Button.B, function () {
    if (Mission == 6) {
        Mission = 0
    } else {
        Mission += 1
    }
    basic.showNumber(Mission)
})
function RunBack () {
    while (!(iBIT.ReadADC(ibitReadADC.ADC1) < SenLeft && iBIT.ReadADC(ibitReadADC.ADC2) < SenRight)) {
        if (iBIT.ReadADC(ibitReadADC.ADC2) < SenRight) {
            iBIT.Motor2(ibitMotor.Backward, 0, 50)
        } else {
            if (iBIT.ReadADC(ibitReadADC.ADC1) < SenLeft) {
                iBIT.Motor2(ibitMotor.Backward, 50, 0)
            } else {
                iBIT.Motor2(ibitMotor.Backward, 50, 50)
            }
        }
    }
    iBIT.MotorStop()
}
function Run () {
    if (iBIT.ReadADC(ibitReadADC.ADC2) < SenRight) {
        iBIT.Motor2(ibitMotor.Forward, 50, 0)
    } else {
        if (iBIT.ReadADC(ibitReadADC.ADC1) < SenLeft) {
            iBIT.Motor2(ibitMotor.Forward, 0, 50)
        } else {
            iBIT.Motor2(ibitMotor.Forward, 50, 50)
        }
    }
}
function MissionA1 () {
    Point = 0
    while (!(Point >= 1)) {
        if (iBIT.ReadADC(ibitReadADC.ADC1) < SenLeft && iBIT.ReadADC(ibitReadADC.ADC2) < SenRight && Point == 0) {
            Point += 1
        }
        Run()
    }
    iBIT.MotorStop()
}
function TurnRight () {
    iBIT.setMotor(ibitMotorCH.M1, ibitMotor.Forward, 50)
    iBIT.setMotor(ibitMotorCH.M2, ibitMotor.Backward, 50)
    basic.pause(Turn)
    iBIT.MotorStop()
}
function MissionA2 () {
    Point = 0
    while (!(Point >= 3)) {
        if (iBIT.ReadADC(ibitReadADC.ADC1) < SenLeft && iBIT.ReadADC(ibitReadADC.ADC2) < SenRight && Point == 0) {
            Pass()
            Point += 1
        }
        if (iBIT.ReadADC(ibitReadADC.ADC1) < SenLeft && iBIT.ReadADC(ibitReadADC.ADC2) < SenRight && Point == 1) {
            Pass()
            TurnLeft()
            Point += 1
        }
        if (iBIT.ReadADC(ibitReadADC.ADC1) < SenLeft && iBIT.ReadADC(ibitReadADC.ADC2) < SenRight && Point == 2) {
            Point += 1
        }
        Run()
    }
    iBIT.MotorStop()
}
let Point = 0
let pass = 0
let Turn = 0
let SenRight = 0
let SenLeft = 0
let Mission = 0
Mission = 0
basic.showNumber(Mission)
SenLeft = 2000
SenRight = 2000
Turn = 490
pass = 200
