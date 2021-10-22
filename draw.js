var mobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
var canvas = document.createElement('canvas');
var color = document.getElementById('colordropdown');
var clearbtn = document.getElementById('clear');
var timer = document.getElementById('timer');
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
starttimer(timer);
var pos = { x:0, y:0}
window.addEventListener('resize', resize);
if (mobile)
{
    ctx.canvas.addEventListener('touchmove', draw);
    ctx.canvas.addEventListener('touchstart', setPosition);
    ctx.canvas.addEventListener('touchend', setPosition); 
    ctx.canvas.preventDefault();
}
else
{
    ctx.canvas.addEventListener('mousemove', draw);
    ctx.canvas.addEventListener('mousedown', setPosition);
    ctx.canvas.addEventListener('mouseenter', setPosition);
}
clearbtn.addEventListener('click', clear);
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
function sleep(ms)
{
  return new Promise(resolve => setTimeout(resolve, ms));
}
async function starttimer(e)
{
    var i = 60;
    while (i > 0)
    {
        i--;
        if (i<10)
        {
            e.textContent = "00:0" + i;
            e.style.color = "red";
        }
        else
        {
            e.textContent = "00:" + i;
        }
        await sleep(1000);
    }
    if (mobile)
    {
        ctx.canvas.removeEventListener('touchmove', draw);
        ctx.canvas.removeEventListener('touchstart', setPosition);
        ctx.canvas.removeEventListener('touchend', setPosition); 
    }
    else
    {
        ctx.canvas.removeEventListener('mousemove', draw);
        ctx.canvas.removeEventListener('mousedown', setPosition);
        ctx.canvas.removeEventListener('mouseenter', setPosition);
    }
}
function draw(e)
{
    if (e.buttons != 1) return;
    if (mobile)
    {
        if (e.touches != 1) return;
        e.preventDefault();
    }
    
    console.log(pos.x,pos.y);

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
function clear(e)
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}