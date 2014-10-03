// Initialiation EA History

var bar_chart_id = "#bar_chart";
var line_chart_id = "#line_chart";

var barChartData = {
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
        }
    }
};

var lineGraphData = {
    x: "days",

    url: "js/data/ea_hist_2_w.json",

    mimeType: "json",

    type: "line",

    axis: {
        x: {
            label: "Timeline",
            type: "timeseries",
            format: "%Y-%m-%d"
        },

        y: {
            label: "PiPs"
        }
    }
};

generateChart(bar_chart_id, barChartData);
generateChart(line_chart_id, lineGraphData);

// Initialiation Currency Correlation

var currencies_bar_id = "#currencies_chart";
var currency_pairs_id = "#currency_pairs_chart";

var currenciesBarData = {
    x: "Symbols",

    url: "js/data/cc_1_1.json",

    mimeType: "json",

    type: "bar",

    color: function(color, d){
        return !!d.value ? (d.value > 0 ? "#1bc45b" : "#ec3232") : color;
    },

    refresh_interval: 2000,

    axis: {
        x: {
            type: "category",
            label: "Currency"
        },

        y: {
            label: "PiPs",
            tick: {
                format : function(d){ return Math.floor(d);} 
            }
        }
    }
};

var currencyPairsData = {
    x: "Pairs",

    url: "js/data/cc_2_EUR_1.json",

    mimeType: "json",

    type: "bar",

    color: function(color, d){
        return !!d.value ? (d.value > 0 ? "#1bc45b" : "#ec3232") : color;
    },

    refresh_interval: 2000,

    axis: {
        x: {
            type: "category",
            label: "Currency"
        },

        y: {
            label: "PiPs",
            tick: {
                format : function(d){ return Math.floor(d);} 
            }
        }
    }
};

generateChart(currencies_bar_id, currenciesBarData);
var pairs = generateChart(currency_pairs_id, currencyPairsData);

// Events Sections
d3.select("#currency_selector")
    .on("change", function(event){
        var url = "js/data/cc_2_" + d3.event.target.value +
            "_" + document.getElementById("time_period_selector").value + ".json";
        
        pairs.redrawChart(url);
});

d3.select("#time_period_selector")
    .on("change", function(event){
        var url = "js/data/cc_2_" + document.getElementById("currency_selector").value +
            "_" + d3.event.target.value + ".json";
        
        pairs.redrawChart(url);
});