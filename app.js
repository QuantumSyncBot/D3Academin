console.log(d3);
d3.select('#root')
    .selectAll('p')
    .data([1,2,3])
    .enter()
    .append('p')
    .text(dta => `Zeile: ${dta}`);