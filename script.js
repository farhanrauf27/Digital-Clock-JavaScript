// Function to start a Clock

function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();

    m = checkTime(m);
    s = checkTime(s);

    am_pm = "AM";
    if (h >= 12) {
        if (h > 12) h -= 12;
        am_pm = "PM";
    } else if (h == 0) {
        hr = 12;
        am_pm = "AM";
    }
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    document.getElementById('hr').innerHTML = h
    document.getElementById('min').innerHTML = m
    document.getElementById('sec').innerHTML = s
    document.getElementById('am').innerHTML = am_pm
    setTimeout(startTime, 1000);

    let hrs = document.getElementById("hr").style
    let mins = document.getElementById("min").style
    let secs = document.getElementById("sec").style
    let am = document.getElementById("am").style

    hrs.fontSize = "150px"
    mins.fontSize = "150px"
    secs.fontSize = "150px"
    am.fontSize = "150px"
    hrs.justifyContent = "center"
    mins.justifyContent = "center"
    secs.justifyContent = "center"
    am.justifyContent = "center"


}

function checkTime(i) {
    if (i < 10) { i = + i };  // add zero in front of numbers < 10
    return i;
}

let a = document.getElementById("hr")
let b = document.getElementById("min")
let c = document.getElementById("sec")
let d = document.getElementById("am")
function blue() {
    a.classList.toggle("blue")
    b.classList.toggle("blue")
    c.classList.toggle("blue")
    d.classList.toggle("blue")
}
function green() {
    a.classList.toggle("green")
    b.classList.toggle("green")
    c.classList.toggle("green")
    d.classList.toggle("green")
}
function red() {
    a.classList.toggle("red")
    b.classList.toggle("red")
    c.classList.toggle("red")
    d.classList.toggle("red")
}
function yellow() {
    a.classList.toggle("yellow")
    b.classList.toggle("yellow")
    c.classList.toggle("yellow")
    d.classList.toggle("yellow")
}

function dark() {
    let a = document.getElementById("flexSwitchCheckDefault")
    a.addEventListener('click', function (e) {
        a.classList.toggle("light")
        console.log("CLicked")
    })

}

