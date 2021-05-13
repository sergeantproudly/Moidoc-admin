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

Chart.defaults.font.family = "Helvetica Neue";

var myChartNode1 = document.getElementById('myChart1').getContext('2d');
var myChart1 = new Chart(myChartNode1, {
    type: 'line',
    data: {
        labels: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
        datasets: [
            
            {
                label: ' Онлайн приемы',
                data: [120000, 19000, 30000, 50000, 20000, 30000, 30000],
                lineTension: 0.3,   
                borderColor: '#FFB84E',
                backgroundColor: [
                    'rgba(255,255,255,0)',
                ],
                borderWidth: 3
            },
            {
                label: ' Очные приемы',
                data: [190000, 30000, 50000, 20000, 30000, 30000, 120000],
                lineTension: 0.3,   
                borderColor: '#A86E9E',
                backgroundColor: [
                    'rgba(255,255,255,0)',
                ],
                borderWidth: 3
            },
            {
                label: ' Вызов на дом',
                data: [190000, 30000, 30000, 50000, 20000, 30000, 120000],
                lineTension: 0.3,   
                borderColor: '#59BAD9',
                backgroundColor: [
                    'rgba(255,255,255,0)',
                ],
                borderWidth: 3
            }
        ]
    },
    options: {
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                // backgroundColor: "#fff",
                // titleColor: "#98A2A7",
                // titleMarginBottom: 8,
                // bodyColor: "#3D5055",
                // padding: 15,
                // borderColor: "#70c9b9",
                // bodySpacing: 10,
                // titleSpacing: 10,
                // usePointStyle: true,
                // borderWidth: 1,
                // bodyFont: {
                //     size: 16
                // },

                enabled: false,

                external: function(context) {
                    // Tooltip Element
                    var tooltipEl = document.getElementById('chartjs-tooltip');

                    // Create element on first render
                    if (!tooltipEl) {
                        tooltipEl = document.createElement('div');
                        tooltipEl.classList.add('tooltip-custom')
                        tooltipEl.id = 'chartjs-tooltip';
                        tooltipEl.innerHTML = '<table></table>';
                        document.body.appendChild(tooltipEl);
                    }

                    // Hide if no tooltip
                    var tooltipModel = context.tooltip;
                    if (tooltipModel.opacity === 0) {
                        tooltipEl.style.opacity = 0;
                        return;
                    }

                    // Set caret Position
                    tooltipEl.classList.remove('above', 'below', 'no-transform');
                    if (tooltipModel.yAlign) {
                        tooltipEl.classList.add(tooltipModel.yAlign);
                    } else {
                        tooltipEl.classList.add('no-transform');
                    }

                    function getBody(bodyItem) {
                        return bodyItem.lines;
                    }

                    // Set Text
                    if (tooltipModel.body) {
                        var titleLines = tooltipModel.title || [];
                        var bodyLines = tooltipModel.body.map(getBody);

                        var innerHtml = '<thead>';

                        titleLines.forEach(function(title) {
                            innerHtml += '<tr><th class="tooltip-custom__title">' + title + '</th></tr>';
                        });
                        innerHtml += '</thead><tbody>';

                        bodyLines.forEach(function(body, i) {
                            var colors = tooltipModel.labelColors[i];
                            var style = 'background:' + colors.backgroundColor;
                            style += '; border-color:' + colors.borderColor;
                            style += '; border-width: 2px';
                            var span = '<span style="' + style + '"></span>';
                            innerHtml += '<tr><td class="tooltip-custom__line">' + span + body + '</td></tr>';
                        });
                        innerHtml += '</tbody>';

                        var tableRoot = tooltipEl.querySelector('table');
                        tableRoot.innerHTML = innerHtml;
                    }

                    var position = context.chart.canvas.getBoundingClientRect();
                    var bodyFont = Chart.helpers.toFont(tooltipModel.options.bodyFont);

                    // Display, position, and set styles for font
                    tooltipEl.style.opacity = 1;
                    tooltipEl.style.position = 'absolute';
                    tooltipEl.style.left = position.left + window.pageXOffset + tooltipModel.caretX + 'px';
                    tooltipEl.style.top = position.top + window.pageYOffset + tooltipModel.caretY + 'px';
                    tooltipEl.style.font = bodyFont.string;
                    tooltipEl.style.padding = tooltipModel.padding + 'px ' + tooltipModel.padding + 'px';
                    tooltipEl.style.pointerEvents = 'none';
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    color: "#E8ECEB"
                },
                ticks: {
                    color: "#98A2A7"
                }
            },
            x: {
                beginAtZero: true,
                grid: {
                    drawOnChartArea: false
                },
                ticks: {
                    color: "#98A2A7"
                }
            },
        },
    },
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
                '#FFB84E',
                '#59BAD9',
                '#A86E9E',
            ],
        }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'bottom',
          display: false
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
                    '#70C9B9',
                ],
                borderColor: [
                    '#70C9B9',
                ],
                borderWidth: 1,
                borderRadius: 20,
                borderSkipped: false
            },
            {
                label: 'смартфон',
                data: [19, 3, 5, 2, 3, 3, 12],
                backgroundColor: [
                    'rgba(112, 201, 185, 0.6)',
                ],
                borderColor: [
                    'rgba(112, 201, 185, 0.6)',
                ],
                borderWidth: 1,
                borderRadius: 20,
                borderSkipped: false
            },
        ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    drawOnChartArea: false,
                    drawBorder: false,
                    drawTicks: false
                },  
            },
            x: {
                grid: {
                    drawOnChartArea: false,
                    drawBorder: false,
                    drawTicks: false
                },
            },
        },
        plugins: {
            legend: {
                display: false
            }
        },
    }
});