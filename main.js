var lastX, lastY;

canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

color = "black";
width_of_line = 2;

var width = screen.width;
var newWidth = screen.width - 110;
var newHeight = screen.height - 110;

if (width < 992) {
    document.getElementById("myCanvas").width = newWidth;
    document.getElementById("myCanvas").height = newHeight;

    document.body.style.overflow = "hidden";
}

canvas.addEventListener("touchstart", MyTouchStart);

function MyTouchStart(e) {

    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value;


    lastX = e.touches[0].clientX - canvas.offsetLeft;
    lastY = e.touches[0].clientY - canvas.offsetTop;
}

canvas.addEventListener("touchmove", MyTouchMove);

function MyTouchMove(e) {

    current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
    current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;

    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_line;

    console.log("Last position of x and y coordinates = ");
    console.log("x = " + lastX + "y = " + lastY);
    ctx.moveTo(lastX, lastY);

    console.log("Current position of x and y coordinates = ");
    console.log("x  = " + current_position_of_touch_x + "y = " + current_position_of_touch_y);
    ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
    ctx.stroke();

    lastX = current_position_of_touch_x;
    lastY = current_position_of_touch_y;
}