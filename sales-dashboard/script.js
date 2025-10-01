const September = [
    53301,
    2300,
    3462,
    103430
]

const August = [
    41280,
    1907,
    4254,
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

const graph5Data = [
    { name: "Alex Nowak", projects: 23, follower: 1589201, avatar: "https://i.pravatar.cc/150?img=1" },
    { name: "Marta Lew", projects: 34, follower: 1242820, avatar: "https://i.pravatar.cc/150?img=2" },
    { name: "Jan Kowal", projects: 12, follower: 1012034, avatar: "https://i.pravatar.cc/150?img=3" },
    { name: "Ola Zawadzka", projects: 8, follower: 827420, avatar: "https://i.pravatar.cc/150?img=4" },
    { name: "Piotr Ziel", projects: 10, follower: 752813, avatar: "https://i.pravatar.cc/150?img=5" }
];

const graph5Body = document.querySelector('.graph5-body');

graph5Data.forEach(item => {
    const row = document.createElement('div');
    row.className = 'graph5-row';
    row.innerHTML = `
      <div class="graph5-col graph5-name">
        <img src="${item.avatar}" alt="avatar" class="graph5-avatar">
        ${item.name}
      </div>
      <div class="graph5-col graph5-projects">${item.projects}</div>
      <div class="graph5-col graph5-follower">${item.follower.toLocaleString()}</div>
    `;
    graph5Body.appendChild(row);
});




//aside js

const menuItems = document.querySelectorAll('.menu-item');

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        const activeItem = document.querySelector('.menu-item.active');
        if (activeItem) {
            activeItem.classList.remove('active');
        }

        item.classList.add('active');
    });
});


//reponsive aside

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        const activeItem = document.querySelector('.menu-item.active');
        if (activeItem) activeItem.classList.remove('active');
        item.classList.add('active');

        if (window.innerWidth <= 768) {
            sidebar.classList.remove('open');
        }
    });
});

const burger = document.querySelector('.burger-menu');
const sidebar = document.querySelector('.sidebar');

burger.addEventListener('click', () => {
    sidebar.classList.toggle('open');
});



//chart9 js

const data = {
    users: 32984,
    clicks: 2420000,
    sales: 2400,
    items: 320,
    bars: [320, 250, 100, 290, 470, 330, 260, 120, 430]
}


const chart = document.getElementById("barChart");
const max = Math.max(...data.bars);

data.bars.forEach(value => {
    const bar = document.createElement("div");
    bar.className = "graph9-bar";
    bar.style.height = `${(value / max) * 100}%`;
    chart.appendChild(bar);

});




const graph6Data = [
    { label: "Styczeń", value: 120 },
    { label: "Luty", value: 180 },
    { label: "Marzec", value: 100 },
    { label: "Kwiecień", value: 150 },
    { label: "Maj", value: 90 }
];

const graph6MaxValue = Math.max(...graph6Data.map(d => d.value));

const graph6Chart = document.getElementById('graph6-chart');

graph6Data.forEach(d => {
    const bar = document.createElement('div');
    bar.className = 'graph6-bar';

    const label = document.createElement('div');
    label.className = 'graph6-bar-label';
    label.textContent = d.label;

    const fill = document.createElement('div');
    fill.className = 'graph6-bar-fill';
    fill.style.width = (d.value / graph6MaxValue * 100) + '%';

    bar.appendChild(label);
    bar.appendChild(fill);
    graph6Chart.appendChild(bar);
});




const ageGroups = ['15-24', '25-34', '35-44', '45-54', '55-64', '+64'];

const menData = [85000, 90000, 60000, 30000, 10000, 5000];
const womenData = [80000, 95000, 50000, 20000, 7000, 3000];

const maxVal = Math.max(...menData, ...womenData);

const menContainer = document.getElementById('men');
const womenContainer = document.getElementById('women');
const dataContainer = document.getElementById('data');

ageGroups.forEach((group, index) => {
    const menBar = document.createElement('div');
    menBar.classList.add('bar');
    menBar.style.width = `${(menData[index] / maxVal) * 100}%`;

    const womenBar = document.createElement('div');
    womenBar.classList.add('bar');
    womenBar.style.width = `${(womenData[index] / maxVal) * 100}%`;

    const label = document.createElement('div');
    label.classList.add('label');
    label.textContent = group;

    menContainer.appendChild(menBar);
    womenContainer.appendChild(womenBar);
    dataContainer.appendChild(label);
});



// kalendarz


// Tablica z nazwami miesięcy
var aMonths = new Array('styczeń','luty','marzec','kwiecień','maj','czerwiec','lipiec','sierpień','wrzesień','październik','listopad','grudzien');

// Inicjalizacja daty na bieżący moment
var date = new Date();

// Wywołanie funkcji do rysowania kalendarza
Calendar();

// Dodanie nasłuchiwaczy do przycisków
document.querySelector('#prev').addEventListener('click', PrevMonth);
document.querySelector('#next').addEventListener('click', NextMonth);

// Funkcja do przechodzenia do poprzedniego miesiąca
function PrevMonth() {
    // Ustawienie daty na poprzedni miesiąc
    date = new Date(date.getFullYear(), date.getMonth() - 1, 1);
    Calendar(); // Aktualizacja kalendarza
}

// Funkcja do przechodzenia do następnego miesiąca
function NextMonth() {
    // Ustawienie daty na następny miesiąc
    date = new Date(date.getFullYear(), date.getMonth() + 1, 1);
    Calendar(); // Aktualizacja kalendarza
}

// Funkcja rysująca kalendarz
function Calendar() {
    let  td = document.querySelectorAll('#calendar tbody td'); // Pobranie komórek kalendarza
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1); // Pierwszy dzień miesiąca
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0); // Ostatni dzień miesiąca
    const day = firstDay.getDay() ? firstDay.getDay() - 1 : 6; // Dzień tygodnia dla pierwszego dnia

    // Ustawienie nagłówka kalendarza
    document.querySelector('#calendar_top').innerHTML = aMonths[date.getMonth()] + ' ' + date.getFullYear();

    let dzien = 1; // Inicjalizacja zmiennej do dni
    for (let i = 0; i < td.length; i++) {
        // Wypełnienie komórek dniami lub pustymi wartościami
        td[i].innerHTML = (i >= day && dzien <= lastDay.getDate()) ? dzien++ : '';
        // Ukrycie niepotrzebnych komórek
        if (i >= 35) td[i].style.display = (day + dzien - 1 < 36) ? 'none' : '';
    }
    

};





// zegar

const hour = document.getElementById('hour')
const minute = document.getElementById('minute')
const second = document.getElementById('second')
const day = document.getElementById('day')

var monthName = [
    'Styczeń',
    'Luty',
    'Marzec',
    'Kwiecień',
    'Maj',
    'Czerwiec',
    'Lipiec',
    'Sierpień',
    'Wrzesień',
    'Październik',
    'Listopad',
    'Grudzień'
]
const clock = setInterval(function time(){
    let today = new Date()
    let d = today.getDate()
    let m = today.getMonth()    
    let y = today.getFullYear()
    let h = today.getHours()
    let min = today.getMinutes()
    let sec = today.getSeconds()

    

    day.innerHTML = `${d} ${monthName[m]} ${y}`
    hour.textContent = h

    if(hour.textContent < 10){
        hour.textContent = '0' + hour.textContent
    }

    minute.innerText = min
    if(minute.textContent < 10){
        minute.textContent = '0' + minute.textContent
    }
    second.innerText = sec
    if(second.textContent < 10){
        second.textContent = '0' + second.textContent
    }


})
const styleSheets = document.styleSheets;

function Highliting() {
    let today = new Date();
    let d = today.getDate();
    let td = document.querySelectorAll('#calendar tbody td');
    console.log(td);

    td.forEach(element => {
        if (element.textContent == d) {
            element.style.background = 'rgba(253, 29, 156, 0.5)';
        }

        else if(element.textContent == ''){
            element.id = "pusty"
             document.querySelector('style').innerHTML = `#pusty{outline: none; cursor: default;} tbody td:hover {outline: 1px solid black;
        cursor: pointer;} `;
            }

       document.querySelector('#next').addEventListener('click', function(){
         if(element.textContent == ''){
            element.id = "pusty"
             document.querySelector('style').innerHTML = `#pusty{outline: none; cursor: default;} tbody td:hover {outline: 1px solid black;
        cursor: pointer;} `;
            }
        else if(element.textContent != ''){
            element.id = ""
        }
       });
       document.querySelector('#prev').addEventListener('click', function(){
        if(element.textContent == ''){
           element.id = "pusty"
            document.querySelector('style').innerHTML = `#pusty{outline: none; cursor: default;} tbody td:hover {outline: 1px solid black;
       cursor: pointer;} `;
           }
       else if(element.textContent != ''){
           element.id = ""
       }
      })
        
    });
}
Highliting();













































