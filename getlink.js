var input = document.getElementById('description').value.replace(/\ /g,"+");
var linkout = "http://redraw.sanghai.org/draw2.html?desc=" + document.getElementById('description').value.replace(/\ /g,"+");
console.log(input);
var alinkout = document.getElementById('linktxt');
var tarea = document.getElementById('description');
var sendlink = document.getElementById('sendlink');
var linck = document.getElementById('linck');

sendlink.style.visibility = 'hidden';
linck.style.visibility = 'hidden';
tarea.addEventListener('keypress', getlink);


function getlink()
{
    console.log(document.getElementById('description').value);
    linkout = "http://redraw.sanghai.org/draw2.html?desc=" + document.getElementById('description').value.replace(/\ /g,"+");
    console.log(linkout);
    alinkout.textContent = linkout;
    sendlink.style.visibility = 'visible';
    linck.style.visibility = 'visible';
}

function copylink()
{
    linkout = "http://redraw.sanghai.org/draw2.html?desc=" + document.getElementById('description').value.replace(/\ /g,"+");
    alinkout.textContent = linkout;
    navigator.clipboard.writeText(linkout);
}