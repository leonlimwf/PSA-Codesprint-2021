
var ctx = document.getElementById('myChartx').getContext('2d');
var graphData = {
    type: 'line',
    data: {
        labels: [0,1,2,3,4,5],
        datasets: [{
            label: 'Energy Consumption',
            data: [12, 19, 3, 5, 2, 3],
            lineTension: 0.3,
            borderWidth: 3,
			borderColor: '#875cff'
        }]
    },
    options: {}
}

var myChart = new Chart(ctx, graphData);
var ws_scheme = window.location.protocol == "https:" ? "wss" : "ws";
var socket = new WebSocket(ws_scheme + '://' + window.location.host+'/ws/PSA/1');

let sum = 0;
let totalSum = 0;
let average = 0
socket.onmessage = function (e) {
    var djangoData = JSON.parse(e.data);
    var newGraphData = graphData.data.datasets[0].data;
    newGraphData.shift()
    newGraphData.push(djangoData.value)

    graphData.data.datasets[0].data = newGraphData;

    myChart.update(); 

}