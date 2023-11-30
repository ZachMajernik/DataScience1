// JavaScript source code

const dataPoints = [
    { x: 50, y: 100 },
    { x: 150, y: 250 },
    { x: 250, y: 50 },
    // Add more data points as needed
];

// Get the canvas and context
const canvas = document.getElementById('scatterPlotCanvas');
const ctx = canvas.getContext('2d');

// Function to draw a single data point
function drawDataPoint(point) {
    ctx.beginPath();
    ctx.arc(point.x, point.y, 5, 0, 2 * Math.PI);
    ctx.fillStyle = 'blue';
    ctx.fill();
    ctx.stroke();
}

// Function to draw all data points one by one with a delay
function drawScatterPlot() {
    let index = 0;

    function drawNextPoint() {
        drawDataPoint(dataPoints[index]);

        index++;
        if (index < dataPoints.length) {
            setTimeout(drawNextPoint, 1000); // Adjust the delay as needed (in milliseconds)
        }
    }

    drawNextPoint();
}

// Call the function to start drawing the scatter plot
drawScatterPlot();
