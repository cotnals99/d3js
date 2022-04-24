
const canvas = d3.select('.canva')

// var dataArray = [4, 15, 34, 23];
// var dataArray = [
//     {width: 25, height: 4, fill: 'pink'},
//     {width: 25, height: 14, fill: 'purple'},
//     {width: 25, height: 44, fill: 'orange'},
//     {width: 25, height: 124, fill: 'green'},
//     {width: 25, height: 12, fill: 'grey'}
// ]

const svg = canvas.append('svg')
                    .attr('width', 960)
                    .attr('height', 500);

// const svg = canvas.select('svg')

// const rect = svg.append('rect');
const rect = svg.selectAll('rect')

d3.json('text.json').then(data=>{
    console.log(data);
    rect.data(data)
    .enter().append('rect')
    .attr('width', (d)=>{return d.width})
    .attr('height', (d)=>{return d.height*2})
    .attr('fill', (d)=>{return d.fill})
    .attr('x', (d, i)=>{return i*(d.width+1);})
    .attr('y', (d, i)=>{return 100-(d.height*2)})
})



