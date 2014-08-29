var  data_two_days = ["PiPs", -43.9, 50],
    two_days = ["days", "2014-08-22", "2014-08-23"],
    week = ["days", "2014-08-17", "2014-08-18", "2014-08-19" , "2014-08-20",  "2014-08-21", "2014-08-22", "2014-08-23"],
    data_week = ["PiPs", 40, 30, 10, -23, -5,-43.9, 50];

var chart = c3.generate({
    bindto: "#chart",
    
    data: {
        x: "days",
        
        columns: [
            two_days,
            data_two_days
        ],
        
        type: 'bar',
        
        labels: true,
        
        color: function (color, d) {            
            return d3.rgb(color).darker(d.value / 150);
        },
        
        onclick: function(data){
            this.load({
                columns: [
                    week,
                    data_week
                ],
                
                type: "line"
            });
        }
    },

    axis: {
        x: {
            label: "Timeline",
            type: "timeseries",
            format: "%Y-%m-%d"
        },
        
        y: {
            label: "PiPs"
        },
    },
    
    grid: {
        y: {
            lines: [{value: 0}]
        }
    }
});