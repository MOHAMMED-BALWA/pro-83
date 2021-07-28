canvas = document.getElementById("mycanvas");
color = "black";
lineWidth = 2;

ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = wol;
ctx.arc(200, 200, 40, 0, 2 * Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e)
{
    color = document.getElementById("color").value;
    console.log(color);

    wol = document.getElementById("wol").value;
    console.log(wol);

   


    mousex = e.clientX - canvas.offsetLeft;
    mousey = e.clientY - canvas.offsetTop;

    console.log("X = " + mousex + " ,Y = " + mousey);
    circle(mousex , mousey);
}


canvas.addEventListener("touchmove" , my_touchmove);
function my_touchmove(e)
{
    mousex = e.touches[0].clientX - canvas.offsetLeft;
    mousey = e.touches[0].clientY - canvas.offsetTop;

        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = wol;


        console.log("X = " + mousex + " ,Y = " + mousey);
        circle(mousex , mousey);
}


function circle(mousex , mousey)
{
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = wol;
    ctx.arc(mousex, mousey, 40, 0, 2 * Math.PI);
    ctx.stroke();   
}


