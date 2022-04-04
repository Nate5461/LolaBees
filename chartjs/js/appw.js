$(document).ready(function() {
    $.ajax({
        url: "http://lolahives.com/dataw.php",
        type: "GET",
        success: function(data) {
            console.log(data);
            var date = [];
            var weight = [];

            for (var i in data) {
                date.push("" + data[i].date);
                weight.push(data[i].weight);
            }

            var chartdata = {
                labels: date,
                datasets: [{
                    lineTension: 0.2,
                    label: "Weight",
                    borderColor: "#3498DB",
                    borderDash: [5, 5],
                    pointBackgroundColor: "#FFFF53",
                    backgroundColor: "#CCFFFF",
                    data: weight,

                }]
            };

            var ctx = $("#myChart");


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