const imageContainer = d3.select("#image-container");
const zoomableImage = d3.select("#zoomable-image");

const zoom = d3.zoom()
    .scaleExtent([1, 4]) // Set the minimum and maximum scale levels
    .on("zoom", zoomed);

imageContainer.call(zoom);

function zoomed(event) {
    const { transform } = event;
    zoomableImage.style("transform", transform);
}

// Handle scroll events for zooming
window.addEventListener("scroll", function () {
    const scrollTop = window.scrollY;
    const scale = 1 + scrollTop * 0.001; // Adjust the scaling factor as needed
    zoomableImage.transition().duration(100).call(zoom.scaleTo, scale);
});