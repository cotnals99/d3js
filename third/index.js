let data = [
    {
        "platform": "Android",
        "percentage": 40.11
    },
    {
        "platform": "Windows",
        "percentage": 36.69
    },
    {
        "platform": "ios",
        "percentage": 12.06
    },
]


let svgWidth = 500, svgHeight = 300, radius = Math.min(svgWidth, svgHeight)/2;
let svg = d3.select('svg').attr('width', svgWidth).attr('height', svgHeight);

//Create group element to hold pie chart

let g = svg.append('g')
    .attr('transform', 'translate('+radius+','+radius+')');

// let color = d3.scaleOrdinal(d3.schemeCatetory10);

var color = d3.scaleOrdinal()
  .domain(data)
  .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56"])

let pie = d3.pie().value((d)=>{console.log(d); return d.percentage})

let path = d3.arc().outerRadius(radius).innerRadius(0);
let arc = g.selectAll('arc').data(pie(data)).enter().append('g')

arc.append('path')
    .attr('d', path)
    .attr('fill', (d)=>{return color(d.data.percentage)})

let label = d3.arc()
    .outerRadius(radius)
    .innerRadius(0)