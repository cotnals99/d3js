let letter = 'abcdefghijklmnopqustuvwxyz'
let upperCase = letter.toUpperCase()
let i = upperCase.length -1



function doInsert(){
    if(i<0)
        return;
    let myData = upperCase.slice(i).split('');
    i--;
    updateAll(myData);
}

function updateAll(data){
    d3.select('#content')
        .selectAll('div')
        .data(data)
        .join('div')
        .style('left', (d,i)=>{
            return i * 32 +'px'
        })
        .text((d)=>{return d})
}


doInsert();

d3.select('#menu').on('click', doInsert);

