let data = [0, 2, 3, 5, 7.5, 9, 10 ]

let myScale = d3.scaleLinear()
    // .domain([data[0], data[length.data]])
    .domain([data[0], data[6]])
    .range([0, 600])


d3.select(' .inner')
    .selectAll('circle')
    .data(data)
    .join('circle')
    .attr('r', 3)
    .attr('cx', (d)=>{return myScale(d)})

d3.select(' .inner')
    .selectAll('text')
    .data(data)
    .join('text')
    .attr('r', 3)
    .attr('x', (d)=>{return myScale(d)})
    .attr('y', -8)
	.text(function(d) {
		return d;
	});
