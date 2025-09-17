const values = [
    53301,
    2300,
    3462,
    103430
]

const procentageValues = [
    41280,
    3,
    -2,
    5
]



document.getElementById("revenue").innerHTML = "$" + values[0];   
document.getElementById("growth-revenue").innerHTML = "+" +  procentageValues[0] + "%";

document.getElementById("growth-revenue").innerHTML = ((procentageValues[0] - values[0])) / procentageValues[0] + "%";



document.getElementById("users").innerHTML =  values[1];   
document.getElementById("growth-users").innerHTML = "+" +  procentageValues[1] + "%";


document.getElementById("clients").innerHTML = "+" + values[2];   
document.getElementById("decrease-clients").innerHTML = procentageValues[2] + "%";


document.getElementById("sales").innerHTML = "$" + values[3];   
document.getElementById("growth-sales").innerHTML = "+" +  procentageValues[3] + "%";


random = ;