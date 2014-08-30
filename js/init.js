// Initialiation
var id = "#chart";

var data = {
	x: "days",

	url: "js/data/ea_hist_1_d.json",

	mimeType: "json",

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
    	url: "js/data/ea_hist_2_w.json",

    	mimeType: "json",

    	type: "line",

    	dropdown_selector: true,

    	navigation: {
    		id: "#chart",

			container :".container",

			label: "Latest PiPs",
		}
    }

    
};

generateChart(id, data);