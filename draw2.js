var desc = window.location.search.replace(/^\?desc=/, '');
var descr = desc.replace(/\+/g," ");
document.getElementById('descriptor').textContent = descr;