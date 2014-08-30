var generateChart = function(id, data){

    var c3Options = {
        bindto: id,

        data: {
            columns: data.data,

            type: data.type,

            label: true
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
                columns: onclickOptions.data,
                
                type: onclickOptions.type
            });

            if(!!onclickOptions.navigation){
                var legend = d3.select(onclickOptions.navigation.container).insert("div", onclickOptions.navigation.id).attr("class", "navigation-legend");

                legend.append("span").attr("class", "navigation-legend-label").html(onclickOptions.navigation.label);
            };
        };

        c3Options.data.onclick = callback;
    };

    var chart = c3.generate(c3Options);

    if(!!data.onclick.navigation){
        d3.select(data.onclick.navigation.container)[0][0].
        addEventListener("click", function(event){
            if(event.target && (event.target.className === "navigation-legend" || 
                event.target.className === "navigation-legend-label")){
                chart.load(c3Options.data);

                event.target.className === "navigation-legend-label" ? event.target.remove() :
                    event.target.parentNode.remove();
            }
        });
    };
};