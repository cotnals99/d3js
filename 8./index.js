
let xScale = d3.scaleLinear()
.domain([-10, 10])
.range([0, 600]);


let linearScale = d3.scaleLinear()
.domain([-10, 0, 10])
.range(['red', 'yellow', 'blue']);

var myData = [-10, -8, -6, -4, -2, 0, 2, 4, 6, 8, 10];

d3.select('#wrapper')
    .selectAll('circle')
    .data(myData)
    .enter()
    .append('circle')
    .attr('r', 10)
    .attr('cx', (d)=>{return xScale(d)})
    .style('fill', (d)=>{return linearScale(d)})
