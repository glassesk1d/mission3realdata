function playCraps() {
    console.log("playCraps() started");
    var die1 = Math.ceil(Math.random() * 6);
    var die2 = Math.ceil(Math.random() * 6);
    var sum = die1 + die2;
    document.getElementById("die1Res").innerHTML = die1;
    document.getElementById("die2Res").innerHTML = die2;
    document.getElementById("sum1Res").innerHTML = sum;
    if (sum == 7 || sum == 11) {
        document.getElementById("finalRes").innerHTML = "CRAPS - you lose";
    }
    else if (die1 == die2 && die1 % 2 == 0) {
        document.getElementById("finalRes").innerHTML = "DOUBLES - you win";
    }
    else {
        document.getElementById("finalRes").innerHTML = "DRAW - please try again"
    }
}
function blastOff() {
    var currtime = 50;
    document.getElementById("Timer").innerHTML = currtime;
    setTimeout(function () {
        currtime = currtime - 5;
        document.getElementById("Timer").innerHTML = currtime;
    }, 5000);
    document.getElementById("Timer").innerHTML = currtime;
    setTimeout(function () {
        currtime = currtime - 5;
        document.getElementById("Timer").innerHTML = currtime;
    }, 10000);
    document.getElementById("Timer").innerHTML = currtime;
    setTimeout(function () {
        currtime = currtime - 5;
        document.getElementById("Timer").innerHTML = currtime;
    }, 15000);
    document.getElementById("Timer").innerHTML = currtime;
    setTimeout(function () {
        currtime = currtime - 5;
        document.getElementById("Timer").innerHTML = currtime;
    }, 20000);
    document.getElementById("Timer").innerHTML = currtime;
    setTimeout(function () {
        currtime = currtime - 5;
        document.getElementById("Timer").innerHTML = currtime;
    }, 25000);
    document.getElementById("Timer").innerHTML = currtime;
    setTimeout(function () {
        currtime = currtime - 5;
        document.getElementById("Timer").innerHTML = currtime;
    }, 30000);
    document.getElementById("Timer").innerHTML = currtime;
    setTimeout(function () {
        currtime = currtime - 5;
        document.getElementById("Timer").innerHTML = currtime;
    }, 35000);
    document.getElementById("Timer").innerHTML = currtime;
    setTimeout(function () {
        currtime = currtime - 5;
        document.getElementById("Timer").innerHTML = currtime;
    }, 40000);
    document.getElementById("Timer").innerHTML = currtime;
    setTimeout(function () {
        currtime = currtime - 5;
        document.getElementById("Timer").innerHTML = currtime;
    }, 45000);
    document.getElementById("Timer").innerHTML = currtime;
    setTimeout(function () {
        currtime = currtime - 5;
        document.getElementById("Timer").innerHTML = "BLASTOFF!";
    }, 50000);
}//this function isn't being used but it's a countdown

function btrBlastOff() {
    console.log("btrBlastOff() started");
    var currtime = 50;
    for (var i = 0; i < 10; i = i + 1) {
        setTimeout(function () {
            document.getElementById("Timer").innerHTML = currtime;
            currtime = currtime - 5;

            if (currtime > 25) {
                document.getElementById("Timer").innerHTML = currtime;
            }
            else {
                document.getElementById("Timer").innerHTML = "Warning Less than 1/2 way to launch, time left = " + currtime;
            }
        }, 5000 * i);
    }
    setTimeout(function () {
        document.getElementById("Timer").innerHTML = "Blastoff!";
    }, 50000);
}//a countdown using a for loop. when the timer is less than or equal to 25 a message will pop up along with the number.

function start(){
    console.log("start() function has begun");
    document.getElementById("data").rows["seconds"].innerHTML = "Reading data...";
    index = 0;
    timer = setInterval(updateDisplay, time_interval);
    document.getElementById("startButton").disabled = true;
    document.getElementById("stopButton").disabled = false;
}//if the start button is clicked it will be disabled. the stop button is enabled.

function stop(){
    console.log("stop() function has begun");
    clearInterval(timer);
    document.getElementById("startButton").disabled = false;
    document.getElementById("stopButton").disabled = true;
}//if the stop button is clicked it will be disabled. the start button is enabled.

function getData(){
    var loadedData = loadData();
    return loadedData;
}

function dataRow(legend, value, units){
    msg = "<br>";
    msg += legend;
    msg += ": </td><td>";
    msg += value;
    msg += " " + units;
    msg += "</td>";
    return msg;
}

function playStation(){
    console.log("playStation() has begun");
    mySound = new sound("us-lab-background.mp3");
    mySound.play();
}//plays a sound after a button is pressed

function sound(srcFile){
    this.sound = document.createElement("audio");
    this.sound.src = srcFile;
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }
}

class InputData{
    constructor(
        time_seconds,
        latitude,
        longitude,
        gps_altitude,
        bmpSensor_altitude,
        bmpSensor_pressure,
        bmpSesor_temp,
        digSensor_temp,
        cssSensor_temp,
        cssSensor_eCO2,
        cssSensor_TVOC,
        UV,
        accelX,
        accelY,
        accelZ,
        magneticX,
        magneticY,
        magneticZ,
        gyroX,
        gyroY,
        gyroZ,
    ){
        this.time_seconds = time_seconds;
        this.latitude = latitude;
        this.longitude = longitude;
        this.gps_altitude = gps_altitude;
        this.bmpSensor_altitude = bmpSensor_altitude;
        this.bmpSensor_pressure = bmpSensor_pressure;
        this.bmpSesor_temp = bmpSesor_temp;
        this.digSensor_temp = digSensor_temp;
        this.cssSensor_temp = cssSensor_temp;
        this.cssSensor_eCO2 = cssSensor_eCO2;
        this.cssSensor_TVOC = cssSensor_TVOC;
        this.UV = UV;
        this.accelX = accelX;
        this.accelY = accelY;
        this.accelZ = accelZ;
        this.magneticX = magneticX;
        this.magneticY = magneticY;
        this.magneticZ = magneticZ;
        this.gyroX = gyroX;
        this.gyroY = gyroY;
        this.gyroZ = gyroZ;

    }
}