var canvas = document.getElementById('canvas');

function getWants(out)
{
    var dlcheck = document.getElementById('dl');
    if (dlcheck.checked == true)
    {
        upimg();
        copyandcontinue();
    }
    else
    {
        upimg();
        window.location.href = out;
    }
}
function upimg()
{
    var imageData = canvas.toDataURL("image/png")
    $.ajax({
        type: "POST",
        url: "upimg.php",
        data: { 
           imgBase64: imageData
        }
      }).done(function(o) {
        console.log('saved'); 
        // If you want the file to be visible in the browser 
        // - please modify the callback in javascript. All you
        // need is to return the url to the file, you just saved 
        // and than put the image in your browser.
      });
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