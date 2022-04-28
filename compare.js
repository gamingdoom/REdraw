( function (){
    var div = document.getElementById('maindiv');
    var yourImg = div.appendChild(document.createElement('h1'));
    yourImg.className = 'text';
    var currCode = window.location.search.split('&')[0].split('=')[1];
    var prevCode = window.location.search.split('&')[1].split('=')[1];
    var br = document.createElement('br');
    yourImg.innerHTML = "Que tu dibujaba:"
    div.appendChild(br);
    $.ajax({
        type: "POST",
        url: "get.php",
        data: {
            id: currCode,
            boolGetImage: "true"
        },
        async: false,
        success: function(data){
            var img1 = document.createElement('img');
            img1.src = data;
            div.appendChild(img1);
            div.appendChild(br);
        }
    });
    var theirImage = div.appendChild(document.createElement('h1'));
    theirImage.className = 'text';
    theirImage.innerHTML = "Que tu amigo dibujaba:"
    $.ajax({
        type: "POST",
        url: "get.php",
        data: {
            id: prevCode,
            boolGetImage: "true"
        },
        async: false,
        success: function(data){
            var img2 = document.createElement('img');
            img2.src = data;
            div.appendChild(img2);
        }
    });
}) ();

