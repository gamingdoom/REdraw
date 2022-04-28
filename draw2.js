// var desc = window.location.search.replace(/^\?desc=/, '');
// var descr = desc.replace(/\+/g," ");
// document.getElementById('descriptor').textContent = descr;
var desc = document.getElementById('descriptor');
var code = window.location.search.split('=')[1];

(function () {
    // Get description from code
    $.ajax({
        type: "POST",
        url: "get.php",
        data: {
            id: code,
            boolGetImage: "false"
        },
        dataType: "text",
        success:function(data) {
            desc.textContent = data;
        }
    });
})();
  
