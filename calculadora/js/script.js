function calc() {
    var sizeOpt = document.getElementById("sizeOpt").value;
    var speedOpt = document.getElementById("speedOpt").value;
    var size = toByte(document.getElementById("size").value, sizeOpt);
    var speed = toByte(document.getElementById("speed").value, speedOpt);
    document.getElementById("result").value = format(size/speed);
}

function toByte(e, opt) {
    if(opt == "kb") {
        return e;
    } else if(opt == "mb") {
        return e * 1024;
    } else {
        return (e * 1024) * 1024;
    }
}

function format(secs) {
    if(secs < 60) {
        var e = Math.round(secs) + " seconds";
    } else if(secs < 3600) {
        var e = (Math.floor(secs/60)) + " minutes and " + (Math.floor(secs%60)) + " seconds";
    } else {
        var e = (Math.floor(secs/3600)) + " hours, " + (Math.floor((secs%3600)/60)) + " minutes and " + (Math.floor((secs%3600)%60)) + " seconds";
    }
    return e;
}

function reset() {
    document.getElementById("size").value = "";
    document.getElementById("speed").value = "";
    document.getElementById("result").value = "";
}