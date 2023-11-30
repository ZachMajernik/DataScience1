// JavaScript source code

const texts = [
    "McDonalds",
    "Burger King",
    "Chick-Fil-A",
    "Dairy Queen",
    "Subway",
    "Sonic",
    "Arby's",
    "Taco Bell"
];
window.onload = function () {
    document.getElementById('cycleText').textContent = texts[7];

    var back = document.getElementById("animBackground");
    back.style.width = 0;
}

let currentIndex = 0;
function cycleText() {
    document.getElementById('cycleText').textContent = texts[currentIndex];
    currentIndex = (currentIndex + 1) % texts.length; // Move to the next text, and loop back to the first one if needed
}
setInterval(cycleText, 400);

const data = [
    { name: "mcd", num: 13430 },
    { name: "bk", num: 6960 },
    { name: "cfa", num: 2980 },
    { name: "dq", num: 4300 },
    { name: "sbw", num: 20570 },
    { name: "snc", num: 3550 },
    { name: "arb", num: 3340 },
    { name: "tb", num: 7200 }];

const width = 800;
const height = 400;
const margin = { top: 50, bottom: 50, left: 50, right: 50 };

const svg = d3.select('#d3-container')
    .append('svg')
    .attr('height', height - margin.top - margin.bottom)
    .attr('width', width - margin.left - margin.right)
    .attr('viewBox', [0, 0, width, height]);

const x = d3.scaleBand()
    .domain(d3.range(data.length))
    .range([margin.left, width - margin.right])
    .padding(0.1);

const y = d3.scaleLinear()
    .domain([0, 21000])
    .range([height - margin.bottom, margin.top]);

const tooltip = svg.append("text")
    .attr("class", "tooltip")
    .style("opacity", 0);

svg.append("g")
    .attr('fill', 'red')
    .selectAll('rect')
    .data(data.sort((a, b) => d3.descending(a.num, b.num)))
    .join('rect')
    .attr('x', (d, i) => x(i))
    .attr('y', (d) => y(d.num))
    .attr('height', d => y(0) - y(d.num))
    .attr('width', x.bandwidth())
    .attr('class', 'rectangle');

function xAxis(g) {
    g.attr('transform', `translate(0, ${height - margin.bottom})`)
        .call(d3.axisBottom(x).tickFormat(i => data[i].name))
        .attr('font-size', '20px');
}
function yAxis(g) {
    g.attr('transform', `translate(${margin.left},0)`)
        .call(d3.axisLeft(y).ticks(null, data.format))
        .attr('font-size', '20px');
}

svg.append('g').call(yAxis);
svg.append('g').call(xAxis);
svg.node();