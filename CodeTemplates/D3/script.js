// JavaScript source code

var body = d3.select("body");
var body = d3.select("body");

// Create an SVG container
var svg = body.append("svg")
    .attr("width", 500)
    .attr("height", 500);

// Append an image to the SVG container
var image = svg.append("image")
    .attr("xlink:href", "image.jpg") // Set the path to your SVG image
    .attr("width", 400)
    .attr("height", 300)
    .attr("x", 100)  // Set the x-coordinate
    .attr("y", 50);  // Set the y-coordinate

d3.select(window).on("scroll", function () {
    var scrollY = window.scrollY || window.pageYOffset;
    image.attr("y", 50 + scrollY); // Update the y-coordinate based on scroll position
});