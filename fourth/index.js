const api= 'https://api.coindesk.com/v1/bpi/historical/close.json?start=2017-12-31&end-2017-12-31'

// loading data from API when DOM content has been loaded

document.addEventListener("DOMContentLoaded", (event)=>{
    fetch(api)
        .then((response)=>{return response.json();})
        .then((data)=>{
            var parsedData = parseData(data);
            drawChart(parsedData);
            console.log(parsedData)
        })
        .catch((err)=>{console.log(err)})
})

// Parse data into key-value pairs
// @param {object} data Object containing historical data of BPI

function parseData(data) {
    var arr = [];
    for (var i in data.bpi){
        arr.push({
            date: new Date(i), //date
            value: +data.bpi[i] //convert string to number
        });
    }
    console.log(arr)
    return arr;
}

//Creates a chart using D3
function drawChart(data){
    var svgWidth = 600, svgHeight = 400;
    var margin = {top: 20, right: 20, bottom: 30, left:50};
    var width = svgWidth - margin.left - margin.right;
    var height = svgHeight - margin.top - margin.bottom;

    var svg = d3.select('svg')
        .attr("width", svgWidth)
        .attr("height", svgHeight);

    var g = svg.append('g')
        .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

    var x = d3.scaleTime()
        .rangeRound([0, width]);
    
    var y = d3.scaleTime()
        .rangeRound([height, 0]);

    var line = d3.line()
        .x((d)=>{return x(d.date)})
        .y((d)=>{return y(d.value)})
        x.domain(d3.extent(data, (d)=>{return d.date}))
        y.domain(d3.extent(data, (d)=>{return d.value}))

    g.append('g')
        .attr('transform', 'translate(0,'+height+')')
        .call(d3.axisBottom(x))
        .select('.domain')
        .remove();
        
    g.append('g')
        .call(d3.axisLeft(y))
        .append('text')
        .attr('fill', '#000')
        .attr('transform', 'rotate(-90)')
        .attr('y', 6)
        .attr('dy', '0.71em')
        .attr('text-anchor', 'end')
        .text('Price ($');

    g.append('path')
        .datum(data)
        .attr('fill', 'none')
        .attr('stroke', 'steelblue')
        .attr('stroke-linejoin', 'round')
        .attr('stroke-linecap', 'round')
        .attr('stroke-width', 1)
        .attr('d', line)

}