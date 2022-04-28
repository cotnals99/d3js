let dataSet = [80, 100, 56, 120, 180, 30, 40, 120, 160, 190];
// let dataSet = [1, 3, 2, 5, 4];

let svgWidth = 500, svgHeight = 300, barPadding = 5;
let barWidth = (svgWidth / dataSet.length);


let svg = d3.select('body').append('svg')

svg.attr('width', svgWidth).attr('height', svgHeight)

let xScale = d3.scaleLinear()
    .domain([0, d3.max(dataSet)])
    .range([0, svgWidth])

let yScale = d3.scaleLinear()
    .domain([0, d3.max(dataSet)])
    .range([svgHeight, 0])


let x_axis = d3.axisBottom().scale(xScale)
let y_axis = d3.axisRight().scale(yScale)

svg.append('g').attr('transform', 'translate(50, 10').call(y_axis)

let xAxisTranslate = svgHeight - 20;

svg.append('g').attr('transform', 'translate(50,'+xAxisTranslate+')').call(x_axis)

let barChart = svg.selectAll('rect')
    .data(dataSet)
    .enter()
    .append('rect')
    .attr('y', (d)=>{return svgHeight - yScale(d)})
    .attr('height', (d)=>{return yScale(d)})
    .attr('width', (d)=>{return barWidth-barPadding})
    .attr('transform', (d, i)=>{
        let translate = [barWidth * i, 0];
        return 'translate('+translate+')'
    })


let text = svg.selectAll('text')
    .data(dataSet)
    .enter()
    .append('text')
    .text((d)=>{return d})
    .attr('x', (d, i)=>{return barWidth * i})
    .attr('y', (d, i)=>{return svgHeight - yScale(d) -2})
    .attr('fill', 'red')