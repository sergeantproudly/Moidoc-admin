import "../sass/main.sass";

window.toggleMobileMenu = (node) => {
    let mobileMenu = document.querySelector(".skeleton__right")
    if (node.classList.contains("skeleton__burger_active")) {
        node.classList.remove("skeleton__burger_active")
        mobileMenu.classList.remove("skeleton__right_indent")
    } else {
        node.classList.add("skeleton__burger_active")
        mobileMenu.classList.add("skeleton__right_indent")
    }
}

var myChartNode1 = document.getElementById('myChart1').getContext('2d');
var myChart1 = new Chart(myChartNode1, {
    type: 'line',
    data: {
        labels: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
        datasets: [
            
            {
                label: 'Онлайн приемы',
                data: [120000, 19000, 30000, 50000, 20000, 30000, 30000],
                lineTension: 0.3,   
                borderColor: '#FFB84E',
                borderWidth: 3
            },
            {
                label: 'Очные приемы',
                data: [190000, 30000, 50000, 20000, 30000, 30000, 120000],
                lineTension: 0.3,   
                borderColor: '#A86E9E',
                borderWidth: 3
            },
            {
                label: 'Вызов на дом',
                data: [190000, 30000, 30000, 50000, 20000, 30000, 120000],
                lineTension: 0.3,   
                borderColor: '#59BAD9',
                borderWidth: 3
            }
        ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    }
});

var myChartNode2 = document.getElementById('myChart2').getContext('2d');
var myChart2 = new Chart(myChartNode2, {
    type: 'doughnut',
    data: {
        labels: ['Онлайн прием', 'Очный прием', 'Вызов на дом'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
            ],
        }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'bottom',
        },
      }
    },
});

var myChartNode3 = document.getElementById('myChart3').getContext('2d');
var myChart3 = new Chart(myChartNode3, {
    type: 'bar',
    data: {
        labels: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
        datasets: [
            {
                label: 'компьютер',
                data: [12, 19, 3, 5, 2, 3, 3],
                backgroundColor: [
                    'rgba(54, 162, 235, 0.2)',
                ],
                borderColor: [
                    'rgba(54, 162, 235, 1)',
                ],
                borderWidth: 1
            },
            {
                label: 'смартфон',
                data: [19, 3, 5, 2, 3, 3, 12],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                ],
                borderWidth: 1
            },
        ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});