let width = 600;
let height = 40;

let linearScale = d3.scaleLinear().domain([-50, 50]).range([0, width]).nice()

let clickArea = d3.select('.click-area').node()


function doClick(e){
    let pos = d3.pointer(e, clickArea);
    let xPos = pos[0];
    // let yPos = pos[1];
    let xValue = linearScale.invert(xPos)
    // let yValue = linearScale.invert(yPos)
    d3.select('.info')
        .text('X Value: ' + xValue.toFixed(2));
        // .text('X Value: ' + xValue.toFixed(2) +'   |   '+ ' Y Value:' + yValue.toFixed(2));
}


//construct x Axis
let axis = d3.axisBottom(linearScale);
d3.select('.axis').call(axis)


//Update Click Area Size
d3.select('.click-area')
    .attr('width', width)
    .attr('height', height)
    .on('click', doClick)

