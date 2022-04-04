$(document).ready(function() {
    $.ajax({
        url: "http://lolahives.com/datat.php",
        type: "GET",
        success: function(data) {
            console.log(data);
            var date = [];
            var temp = [];

            for (var i in data) {
                date.push("" + data[i].date);
                temp.push(data[i].temp);
            }

            var chartdata = {
                labels: date,
                datasets: [{
                    lineTension: 0.2,
                    label: "Temperature",
                    borderColor: "#3498DB",
                    borderDash: [5, 5],
                    pointBackgroundColor: "#FFFF53",
                    backgroundColor: "#CCFFFF",
                    data: temp,

                }]
            };

            var ctx = $("#myChart2");


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