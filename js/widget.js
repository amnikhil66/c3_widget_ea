var generateChart = function(id, data){
    var chartContainer = d3.select(data.onclick.navigation.container);

    var c3Options = {
        bindto: id,

        data: {
            url: data.url,

            mimeType: data.mimeType,

            type: data.type,

            label: true,
        },

        grid: {
            y: {
                lines: [{value: 0}]
            }
        }
    };

    for(var key in data){
        switch(key){
            case "x": {
                c3Options.data[key] = data[key];
            };
            break;
            case "axis":  {
                c3Options[key] = data[key];
            };
            break;
            default: {
                //Think of something
            }
        };
    };

    if(data.hasOwnProperty("onclick"))
    {
        var onclickOptions = data.onclick;

        var callback = function(d){

            this.load({
                url: onclickOptions.url,

                mimeType: onclickOptions.mimeType,
                
                type: onclickOptions.type
            });

            if(!!onclickOptions.navigation){
                var legend = chartContainer
                    .insert("div", onclickOptions.navigation.id)
                        .attr("class", "navigation-legend");

                legend.append("span").attr("class", "navigation-legend-label").html(onclickOptions.navigation.label);
            };

            if(!!onclickOptions.dropdown_selector){
                var dropdown = chartContainer
                    .insert("div", onclickOptions.navigation.id)
                        .attr("class", "change-timeline-container")
                        .append("select").attr("class", "change-timeline");

                dropdown.append("option").attr("selected", "selected")
                    .attr("value", "js/data/ea_hist_2_w.json").html("1 Week");
                dropdown.append("option").attr("value", "js/data/ea_hist_2_m.json").html("1 Month");
            };
        };

        c3Options.data.onclick = callback;
    };

    var chart = c3.generate(c3Options);

    if(!!data.onclick.navigation){
        chartContainer[0][0].addEventListener("click", function(event){
            if(event.target && (event.target.className === "navigation-legend" || 
                event.target.className === "navigation-legend-label")){
                chart.load(c3Options.data);

                event.target.className === "navigation-legend-label" ? event.target.remove() :
                    event.target.parentNode.remove();

                d3.select(".change-timeline-container").remove();
            }
        });
    };

    if(!!data.onclick.navigation){
        chartContainer[0][0].addEventListener("change", function(event){
            if(event.target && (event.target.className === "change-timeline")){
                chart.load({
                    url: event.target.value,

                    mimeType: "json"
                });
            }
        });
    };

    return chart;
};