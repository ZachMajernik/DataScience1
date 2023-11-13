// JavaScript source code
window.onload = function () {

    var left = document.getElementsByClassName("left");

    for (var i = 0; i < left.length; i++) {
        left[i].style.width = 0;
    }

    var right = document.getElementsByClassName("right");

    for (var i = 0; i < right.length; i++) {
        right[i].style.width = 0;
    }
    
};