var canvas = document.getElementById('canvas');
var outvar = "";

function getWants(out)
{   
    outvar = out;
    var dlcheck = document.getElementById('dl');
    if (dlcheck.checked)
    {   
        copy();
        upimg(out);
    }
    else
    {
        upimg(out);
    }
}
function upimg(out)
{
    var imageData = canvas.toDataURL("image/png")
    $.ajax({
        type: "POST",
        url: "upimg.php",
        data: { 
           image: imageData
        },
        dataType: "text",
        success:function(data) {
            console.log(data); 
            window.location.href = out.concat("?code=" + data + "&prevCode=" + window.location.search.split('=')[1]);
          }
      });
}
function copy()
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
}