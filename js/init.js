// Temp data
var  data_two_days = ["PiPs", -43.9, 50],
    two_days = ["days", "2014-08-22", "2014-08-23"],
    week = ["days", "2014-08-17", "2014-08-18", "2014-08-19" , "2014-08-20",  "2014-08-21", "2014-08-22", "2014-08-23"],
    data_week = ["PiPs", 40, 30, 10, -23, -5,-43.9, 50];

// Initialiation

// var data_url_part = "js/data/";

var id = "#chart";

var data = {
	x: "days",

	data: [two_days, data_two_days],

	type: "bar",

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

    onclick: {
    	data: [week, data_week],

    	type: "line",

    	navigation: {
    		id: "#chart",

			container :".container",

			label: "Latest PiPs",
		}
    }

    
};

generateChart(id, data);