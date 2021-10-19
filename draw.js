var canvas = document.createElement('canvas');
var color = document.getElementById('colordropdown');
document.body.appendChild(canvas);
document.body.style.margin = 0;
//canvas.style.position = 'fixed';
var ctx = canvas.getContext('2d');
ctx.canvas.style.background = "white";
ctx.canvas.style.paddingRight = 0;
ctx.canvas.style.paddingLeft = 0;
ctx.canvas.style.marginRight = 'auto';
ctx.canvas.style.marginLeft = 'auto';
ctx.canvas.style.display = 'block';
ctx.canvas.id = 'canvas';
resize();
var pos = { x:0, y:0}
window.addEventListener('resize', resize);
ctx.canvas.addEventListener('mousemove', draw);
ctx.canvas.addEventListener('mousedown', setPosition);
ctx.canvas.addEventListener('mouseenter', setPosition);
color.style.marginLeft = ctx.canvas.offsetLeft;
function setPosition(e)
{
    pos.x = e.clientX - ctx.canvas.offsetLeft;
    pos.y = e.clientY - ctx.canvas.offsetTop;
}
function resize(e)
{
    ctx.canvas.width = 600;
    ctx.canvas.height = 400;
}
function draw(e)
{
    if (e.buttons != 1) return;
    
    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.lineCap = 'round';
    ctx.strokeStyle = color.value;
    
    ctx.moveTo(pos.x , pos.y);
    setPosition(e);
    console.log(pos.x,pos.y);
    ctx.lineTo(pos.x , pos.y);
    ctx.stroke();
}