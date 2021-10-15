
var ctx = document.getElementById('myChart').getContext('2d');
var graphData = {
    type: 'line',
    data: {
        labels: [0,1,2,3,4,5],
        datasets: [{
            label: 'Energy Consumption per minute',
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
var socket = new WebSocket(ws_scheme + '://' + window.location.host+'/ws/PSA/');

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

    sum+=djangoData.value;

    document.getElementById('addhere').innerHTML = sum;
    document.getElementById('consumptionAmount').innerHTML = sum.toFixed(2) + ' kWh';
    document.getElementById('consumptionAmount1').innerHTML = (sum+(Math.random() * 0.001) + 1.3).toFixed(2)+ ' kWh';
    document.getElementById('consumptionAmount2').innerHTML = (sum+(Math.random() * 0.01) + 3.4).toFixed(2)+ ' kWh';
    document.getElementById('consumptionAmount3').innerHTML = (sum+(Math.random() * 1) + 0.1).toFixed(2)+ ' kWh';

    var a = parseInt(document.getElementById("consumptionAmount").innerText);
    var b = parseInt(document.getElementById("consumptionAmount1").innerText);
    var c = parseInt(document.getElementById("consumptionAmount2").innerText);
    var d = parseInt(document.getElementById("consumptionAmount3").innerText);
    totalSum = a+b+c+d+totalSum;
    average = totalSum/4
    
    document.getElementById('totalSum').innerText = totalSum;
    document.getElementById('average').innerText = average;

    if (totalSum>=100) {
        document.getElementById('warning').innerText = 'Exceeded'
        document.getElementById('warning').style.color = 'Red'
    }
    else {
        document.getElementById('warning').innerText = 'On Target'
        document.getElementById('warning').style.color = 'green'
    }
    

}