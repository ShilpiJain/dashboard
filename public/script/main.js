var ctx = document.getElementById('yahoo').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['1D', '5D', '1M', '5M', '1Y', '5Y'],
        datasets: [{
            label: '# of Votes',
            data: [9, 10, 11, 8, 9, 7],
            backgroundColor: [
                'rgba(255, 99, 132, 0)',
                'rgba(54, 162, 235, 0)',
                'rgba(255, 206, 86, 0)',
                'rgba(75, 192, 192, 0)',
                'rgba(153, 102, 255, 0)',
                'rgba(255, 159, 64, 0)'
            ],
            borderColor: [
                'rgba(34, 57, 117, 1)',
                'rgba(34, 57, 117, 1)',
                'rgba(34, 57, 117, 1)',
                'rgba(34, 57, 117, 1)',
                'rgba(34, 57, 117, 1)',
                'rgba(34, 57, 117, 1)',
                ],
            borderWidth: 3
        }]
    },
    options: {
        layout: {
            padding: {
                left: 0,
                right: 4,
                top: 10,
                bottom: 0
            }
        },
        legend: {
            display: false
        },
        elements: {
            point:{
                radius: 0
            }
        },
        scales: {
            xAxes: [{
                display: false
            }],
            yAxes: [{
                display: false
            }],
        }
    }
});
var ctx = document.getElementById('lg').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['1D', '5D', '1M', '5M', '1Y', '5Y'],
        datasets: [{
            label: '# of Votes',
            data: [3, 2, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0)',
                'rgba(54, 162, 235, 0)',
                'rgba(255, 206, 86, 0)',
                'rgba(75, 192, 192, 0)',
                'rgba(153, 102, 255, 0)',
                'rgba(255, 159, 64, 0)'
            ],
            borderColor: [
                'rgba(200, 19, 92, 1)',
                'rgba(200, 19, 92, 1)',
                'rgba(200, 19, 92, 1)',
                'rgba(200, 19, 92, 1)',
                'rgba(200, 19, 92, 1)',
                'rgba(200, 19, 92, 1)',
                ],
            borderWidth: 3
        }]
    },
    options: {
        layout: {
            padding: {
                left: 0,
                right: 4,
                top: 10,
                bottom: 10
            }
        },
        legend: {
            display: false
        },
        elements: {
            point:{
                radius: 0
            }
        },
        scales: {
            xAxes: [{
                display: false
            }],
            yAxes: [{
                display: false
            }],
        }
    }
});

var ctx = document.getElementById('twitter').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['1D', '5D', '1M', '5M', '1Y', '5Y'],
        datasets: [{
            label: '# of Votes',
            data: [3, 3, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0)',
                'rgba(54, 162, 235, 0)',
                'rgba(255, 206, 86, 0)',
                'rgba(75, 192, 192, 0)',
                'rgba(153, 102, 255, 0)',
                'rgba(255, 159, 64, 0)'
            ],
            borderColor: [
                'rgba(0, 172, 237, 1)',
                'rgba(0, 172, 237, 1)',
                'rgba(0, 172, 237, 1)',
                'rgba(0, 172, 237, 1)',
                'rgba(0, 172, 237, 1)',
                'rgba(0, 172, 237, 1)',
                ],
            borderWidth: 3
        }]
    },
    options: {
        layout: {
            padding: {
                left: 0,
                right: 4,
                top: 10,
                bottom: 10
            }
        },
        elements: {
            point:{
                radius: 0
            }
        },
        legend: {
            display: false
        },
        scales: {
            xAxes: [{
                display: false
            }],
            yAxes: [{
                display: false
            }],
        }
    }
});

// Toggle CSS
let setDarkPath = `public/css/dark.css`;
let setLightPath = `public/css/main.css`;
var pageStyle = document.getElementById('pagestyle');
const toggleStyle = () => {
    var theme = (pageStyle.getAttribute("href") === setLightPath) ? setDarkPath : setLightPath;
    pageStyle.setAttribute("href", theme)
}

//active class and counter on click of menu
let getNavIndex = (event) => {
    let liNodes = document.getElementsByClassName("main-listing");
    for(i =0; i < liNodes.length; i++){
        liNodes[i].setAttribute("class", "main-listing");
    }
    event.currentTarget.setAttribute("class", "main-listing active");
    let countVal = event.currentTarget.dataset.count;
    let counter = document.getElementById("counter");
    counter.innerText = countVal;
}

window.onload = function (){
    rippleEffet();  
}

// ripple effect first time for user
let rippleEffet = () =>{
    if(localStorage.getItem('animation') == null){
        setRippleEffect = document.getElementsByClassName("switch");
        localStorage.setItem('animation', "aniamted");
        setRippleEffect[0].setAttribute("class", "switch rippleEffect");
        setTimeout(() => {
            setRippleEffect[0].setAttribute("class", "switch");
        }, 4000);  
    }   
}
// let slideMenu = () =>{
//     let menu = document.getElementsByClassName("subnavigation");
//     let main = document.getElementsByClassName("main");
//     for(i =0; i < menu.length; i++){
//         var menuSlide = menu[i].style.left = "-150%"
//     }
//     main[0].style.marginLeft = "64px"
//     main[0].style.flexBasis = "100%"
// }
