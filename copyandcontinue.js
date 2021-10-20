var canvas = document.getElementById('canvas');

function getWants(out)
{
    var dlcheck = document.getElementById('dl');
    if (dlcheck.checked == true)
    {
        copyandcontinue();
    }
    else
    {
        window.location.href = out;
    }
}

function copyandcontinue(out)
{
// create temporary link  
var imageData = canvas.toDataURL("image/png", 0.7);
var tmpLink = document.createElement( 'a' );  
tmpLink.download = 'image.png'; // set the name of the download file 
tmpLink.href = imageData;  
  
// temporarily add link to body and initiate the download  
document.body.appendChild( tmpLink );  
tmpLink.click();  
document.body.removeChild( tmpLink );
window.location.href = out;
}