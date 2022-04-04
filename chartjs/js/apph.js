$(document).ready(function() {
    $.ajax({
        url: "http://lolahives.com/datah.php",
        type: "GET",
        success: function(data) {
            console.log(data);
            var date = [];
            var hum = [];

            for (var i in data) {
                date.push("" + data[i].date);
                hum.push(data[i].hum);
            }

            var chartdata = {
                labels: date,
                datasets: [{
                    lineTension: 0.2,
                    label: "Humidity",
                    borderColor: "#3498DB",
                    borderDash: [5, 5],
                    pointBackgroundColor: "#FFFF53",
                    backgroundColor: "#CCFFFF",
                    data: hum,

                }]
            };

            var ctx = $("#myChart3");


            var LineGraph = new Chart(ctx, {
                type: 'line',
                data: chartdata,
                options: {
                    responsive: true,
                    Plugin: {
                        legend: {
                            display: false,
                        },
                    }
                }
            });

        },
        error: function(data) {
            console.log(data);
        }
    });
});