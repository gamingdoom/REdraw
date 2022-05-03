var canvas = document.createElement('canvas');
var color = document.getElementById('colordropdown');
var clearbtn = document.getElementById('clear');
var timer = document.getElementById('timer');
var suggest = document.getElementById('suggest');
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
ctx.canvas.style["touch-action"] = 'none';
var isDrawing = false;
resize();
starttimer(timer);
var pos = { x:0, y:0};
window.addEventListener('resize', resize);
ctx.canvas.addEventListener('touchmove', draw);
ctx.canvas.addEventListener('touchstart', setPosition);
ctx.canvas.addEventListener('touchend', stopDraw); 
ctx.canvas.addEventListener('mousemove', draw);
ctx.canvas.addEventListener('mousedown', setPosition);
ctx.canvas.addEventListener('mouseup', stopDraw);

clearbtn.addEventListener('click', clear);
color.style.marginLeft = ctx.canvas.offsetLeft;

getWord();

async function getWord(){
    // Get list of things
    $.getJSON('https://raw.githubusercontent.com/dariusk/corpora/master/data/objects/objects.json').done(function(data){
        var object = data.objects[Math.floor(Math.random() * data.objects.length)];
        // Check if it starts with a vowel
        var vowel = (function(object){switch (object.slice(0,1)) {case 'a': case 'e': case 'i': case 'o': case 'u': return "an"; default: return "a"}})(object);
        suggest.innerHTML = "I suggest " + vowel + " " + object;
    });

}

function setPosition(e)
{
    isDrawing = true;
    var source = e.touches ? e.touches[0] : e;

    pos.x = source.clientX - ctx.canvas.offsetLeft;
    pos.y = source.clientY - ctx.canvas.offsetTop + window.scrollY;
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
}
function stopDraw(e){
    isDrawing = false;
}
function draw(e)
{
    if (isDrawing == false) return;

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