// 첫 번째 질문
var info_rep_1 = document.getElementById('info_rep1').innerHTML;
var info_ad_1 = document.getElementById('info_adverb1').innerHTML;

rep = JSON.parse(info_rep_1)
ad = JSON.parse(info_ad_1)

var rep_count = [];
for (key in rep) {
	rep_count.push(rep[key]);
}

var ad_count = [];
for (key in ad) {
	ad_count.push(ad[key]);
}


var ctx = document.getElementById('repetition1').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        // 반복어
        labels: Object.keys(rep),
        datasets: [{
            label: '반복어 빈도',
            // 빈도
            data: rep_count,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
            display: false,
        },
        tooltips: {
            enabled: false
        },
        hover: {
            mode: null
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    stepSize : 2,
					max: 10
                }
            }]
        },
        title: {
            display: true,
            text: '반복어 빈도'
        }
    }
});

var ctx = document.getElementById('adverb1').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        // 감탄사
        labels: Object.keys(ad),
        datasets: [{
            label: '감탄사 빈도',
            // 빈도
            data: ad_count,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
            display: false,
        },
        tooltips: {
            enabled: false
        },
        hover: {
            mode: null
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    stepSize : 2,
                    max: 10
                }
            }]
        },
        title: {
            display: true,
            text: '감탄사 빈도'
        }
    }
});


var track1 = document.getElementById('info_eye_tracking1').innerHTML;
var eye_tracking_1 = track1.split(',')
eye_tracking_1=JSON.parse(eye_tracking_1)

var ctx = document.getElementById('eye_tracking_img_1').getContext('2d');

var myChart = new Chart(ctx, {
    type: 'scatter',
    data: {
        datasets: [{
            data: eye_tracking_1, 
            borderColor: '#2196f3',           
            backgroundColor: '#2196f3', 
            fill: false,
            showLine: false,
        }]
    },
    options: {
        legend: {
            display: false
        },
        tooltips: {
            enabled: false
        },
        hover: {
            mode: null
        },
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            xAxes: [{
                display: false,
                ticks: {
                        min: -100,
                        max: 700
                    }
            }],
            yAxes: [{
                display: false,
                    ticks: {
                        min: -100,
                        max: 700
                    }
            }]
        },
    }
});


// 두 번째 질문
var info_rep_2 = document.getElementById('info_rep2').innerHTML;
var info_ad_2 = document.getElementById('info_adverb2').innerHTML;

rep = JSON.parse(info_rep_2)
ad = JSON.parse(info_ad_2)

var rep_count = [];
for (key in rep) {
	rep_count.push(rep[key]);
}

var ad_count = [];
for (key in ad) {
	ad_count.push(ad[key]);
}

var ctx = document.getElementById('repetition2').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        // 반복어
        labels: Object.keys(rep),
        datasets: [{
            label: '반복어 빈도',
            // 빈도
            data: rep_count,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
            display: false,
        },
        tooltips: {
            enabled: false
        },
        hover: {
            mode: null
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    stepSize : 2,
					max: 10
                }
            }]
        },
        title: {
            display: true,
            text: '반복어 빈도'
        }
    }
});

var ctx = document.getElementById('adverb2').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        // 감탄사
        labels: Object.keys(ad),
        datasets: [{
            label: '감탄사 빈도',
            // 빈도
            data: ad_count,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
            display: false,
        },
        tooltips: {
            enabled: false
        },
        hover: {
            mode: null
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    stepSize : 2,
                    max: 10
                }
            }]
        },
        title: {
            display: true,
            text: '감탄사 빈도'
        }
    }
});

var track2 = document.getElementById('info_eye_tracking2').innerHTML;
var eye_tracking_2 = track2.split(',')
eye_tracking_2=JSON.parse(eye_tracking_2)
var ctx = document.getElementById('eye_tracking_img_2').getContext('2d');

var myChart = new Chart(ctx, {
    type: 'scatter',
    data: {
        datasets: [{
            data: eye_tracking_2, 
            borderColor: '#2196f3',           
            backgroundColor: '#2196f3', 
            fill: false,
            showLine: false,
        }]
    },
    options: {
        legend: {
            display: false
        },
        tooltips: {
            enabled: false
        },
        hover: {
            mode: null
        },
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            xAxes: [{
                display: false,
                ticks: {
                        min: -100,
                        max: 700
                    }
            }],
            yAxes: [{
                display: false,
                    ticks: {
                        min: -100,
                        max: 700
                    }
            }]
        },
    }
});

// 세 번째 질문
var info_rep_3 = document.getElementById('info_rep3').innerHTML;
var info_ad_3 = document.getElementById('info_adverb3').innerHTML;

rep = JSON.parse(info_rep_3)
ad = JSON.parse(info_ad_3)

var rep_count = [];
for (key in rep) {
	rep_count.push(rep[key]);
}

var ad_count = [];
for (key in ad) {
	ad_count.push(ad[key]);
}

var ctx = document.getElementById('repetition3').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        // 반복어
        labels: Object.keys(rep),
        datasets: [{
            label: '반복어 빈도',
            // 빈도
            data: rep_count,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
            display: false,
        },
        tooltips: {
            enabled: false
        },
        hover: {
            mode: null
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    stepSize : 2,
					max: 10
                }
            }]
        },
        title: {
            display: true,
            text: '반복어 빈도'
        }
    }
});

var ctx = document.getElementById('adverb3').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        // 감탄사
        labels: Object.keys(ad),
        datasets: [{
            label: '감탄사 빈도',
            // 빈도
            data: ad_count,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
            display: false,
        },
        tooltips: {
            enabled: false
        },
        hover: {
            mode: null
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    stepSize : 2,
                    max: 10
                }
            }]
        },
        title: {
            display: true,
            text: '감탄사 빈도'
        }
    }
});

var track3 = document.getElementById('info_eye_tracking3').innerHTML;
var eye_tracking_3 = track3.split(',')
eye_tracking_3=JSON.parse(eye_tracking_3)
var ctx = document.getElementById('eye_tracking_img_3').getContext('2d');

var myChart = new Chart(ctx, {
    type: 'scatter',
    data: {
        datasets: [{
            data: eye_tracking_3, 
            borderColor: '#2196f3',           
            backgroundColor: '#2196f3', 
            fill: false,
            showLine: false,
        }]
    },
    options: {
        legend: {
            display: false
        },
        tooltips: {
            enabled: false
        },
        hover: {
            mode: null
        },
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            xAxes: [{
                display: false,
                ticks: {
                        min: -100,
                        max: 700
                    }
            }],
            yAxes: [{
                display: false,
                    ticks: {
                        min: -100,
                        max: 700
                    }
            }]
        },
    }
});