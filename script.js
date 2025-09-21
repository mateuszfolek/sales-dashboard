const September = [
    53301,
    2300,
    3462,
    103430
]

const August = [
    41280,
    1907,
    2554,
    88083
]





document.getElementById("revenue").innerHTML = "$" + September[0];
if ((((September[0] - August[0]) / August[0]) * 100).toFixed(2) > 0) {
    document.getElementById("growth-revenue").innerHTML = "+" + (((September[0] - August[0]) / August[0]) * 100).toFixed(2) + "%";
}
else {
    document.getElementById("growth-revenue").innerHTML = (((September[0] - August[0]) / August[0]) * 100).toFixed(2) + "%";
    document.getElementById("growth-revenue").style.color = "#c93030";
}


document.getElementById("users").innerHTML = September[1];
if ((((September[1] - August[1]) / August[1]) * 100).toFixed(2) > 0) {
    document.getElementById("growth-users").innerHTML = "+" + (((September[1] - August[1]) / August[1]) * 100).toFixed(2) + "%";
}
else {
    document.getElementById("growth-users").innerHTML = (((September[1] - August[1]) / August[1]) * 100).toFixed(2) + "%";
    document.getElementById("growth-users").style.color = "#c93030";
}


document.getElementById("clients").innerHTML = September[2];
if ((((September[2] - August[2]) / August[2]) * 100).toFixed(2) > 0) {
    document.getElementById("decrease-clients").innerHTML = "+" + (((September[2] - August[2]) / August[2]) * 100).toFixed(2) + "%";
}
else {
    document.getElementById("decrease-clients").innerHTML = (((September[2] - August[2]) / August[2]) * 100).toFixed(2) + "%";
    document.getElementById("decrease-clients").style.color = "#c93030";
}


document.getElementById("sales").innerHTML = "$" + September[3];
if ((((September[3] - August[3]) / August[3]) * 100).toFixed(2) > 0) {
    document.getElementById("growth-sales").innerHTML = "+" + (((September[3] - August[3]) / August[3]) * 100).toFixed(2) + "%";
}
else {
    document.getElementById("growth-sales").innerHTML = (((September[3] - August[3]) / August[3]) * 100).toFixed(2) + "%";
    document.getElementById("growth-sales").style.color = "#c93030";
}


