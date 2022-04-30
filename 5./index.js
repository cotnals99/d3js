//data

let data = [40, 10, 20, 60, 30]
let cities = [
    { name: 'London', population: 8674000},
    { name: 'New York', population: 8406000},
    { name: 'Sydney', population: 4293000},
    { name: 'Paris', population: 2244000},
    { name: 'Beijing', population: 11510000}
  ];
  

// Chart 1
d3.select('.chart1')
    .selectAll('circle')
    .data(data)
    .join('circle')
    .attr('cx', (d, i)=>{return i*100+100})
    .attr('cy', 50)
    .attr('r', (d)=>{return 0.5*d})
    .style('fill', (d)=>{return d>30 ? 'orange' : '#eee'})



// Chart 2
d3.select('.chart2')
  .selectAll('circle')
  .data(cities)
  .join('circle')
  .attr('cx', function(d, i) {
    return i * 100+100;
  })
  .attr('cy', 150)
  .attr('r', function(d) {
    let scaleFactor = 0.000004;
    let result = scaleFactor * d.population;
    return result;
  })
  .style('fill', (d)=>{return d.population>5000000 ? 'orange' : '#aaa'});




//Chart3
d3.select('.bars')
  .selectAll('rect')
  .data(cities)
  .join('rect')
  .attr('width', (d)=>{
      let scaleFactor = 0.00004;
      // console.log(d.population*scaleFactor);
      return d.population * scaleFactor;
  })
  .attr('height', 19)
  .attr('y', (d, i)=>{return i * 20})


//Chart3 Label
d3.select('.labels')
  .selectAll('text')
  .data(cities)
  .join('text')
  .attr('y', (d, i)=>{return i*20})
  .text((d)=>{return d.name})


//Chart3 Label
d3.select('.labels2')
  .selectAll('text')
  .data(cities)
  .join('text')
  .attr('y', (d, i)=>{return i*20})
  .attr('x', (d)=>{
    let scaleFactor = 0.00004;
    return d.population * scaleFactor + 5;
  })
  .text((d)=>{return d.population})



//chart4

function createData(){
  let data = [];
  let numIndex = Math.ceil(Math.random()*5);
  console.log(numIndex);
  for(i=0; i<numIndex; i++){
    data.push(Math.random()*100)
  }
  console.log(data)
  return data
}

function updateChart(data){
  d3.select('.chart4')
    .selectAll('circle')
    .data(data)
    .join('circle')
    .attr('cx', (d,i)=>{return i*100})
    .attr('cy', 100)
    .attr('r', (d)=>{return d*0.5})
    .style('fill', (d)=>{return d>50? 'orange' : 'grey'})
}

function updateAll(){
  let myData = createData();
  updateChart(myData);
}

updateAll();

d3.select('button').on('click', updateAll)


