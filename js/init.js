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

    url: "js/data/cc_1_all_1.json",

    mimeType: "json",

    type: "bar",

    refresh_interval: 2000,

    axis: {
        x: {
            type: "category",
            label: "Currency"
        },

        y: {
            label: "PiPs"
        }
    }
};

var currencyPairsData = {
    x: "Symbols",

    url: "js/data/cc_1_all_5.json",

    mimeType: "json",

    type: "bar",

    refresh_interval: 2000,

    axis: {
        x: {
            type: "category",
            label: "Currency"
        },

        y: {
            label: "PiPs"
        }
    }
};

generateChart(currencies_bar_id, currenciesBarData);
generateChart(currency_pairs_id, currencyPairsData);