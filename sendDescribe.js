var submit = document.getElementById('submit');
var sendlink = document.getElementById('sendlink');
var code = document.getElementById('code');
var help = document.getElementById('help');
help.style.visibility = 'hidden';
sendlink.style.visibility = 'hidden';
code.style.visibility = 'hidden';
submit.style.visibility = "hidden";
var textArea = document.getElementById('description');
textArea.addEventListener('keypress', setSubmit);

function setSubmit(){
    submit.style.visibility = "visible";
}

function addDescribe(){
    var text = textArea.value;
    // Disable textarea
    textArea.disabled = true;
    // Hide submit button
    submit.style.visibility = "hidden";
    // Get query string
    var queryString = window.location.search.split('&')[0].split('?')[1].split('=')[1];
    
    // Send description to database
    $.ajax({
        type: "POST",
        url: "description.php",
        data: {
            description: text,
            id: queryString
        },
        dataType: "text",
        success:function(data) {
            sendlink.style.visibility = 'visible';
            code.style.visibility = 'visible';
            help.style.visibility = 'visible';
            code.innerHTML = data;
        }
    });
}