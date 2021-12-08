var infoTitle = document.querySelectorAll('.info-title');
infoTitle.forEach(function(e) {
    var w = e.offsetWidth + 10;
    var ml = w/2;
    e.parentElement.style.top = "82px";
    e.parentElement.style.left = "50%";
    e.parentElement.style.marginLeft = -ml+"px";
    e.parentElement.style.width = w+"px";
    e.parentElement.style.background = "unset"
    e.parentElement.previousSibling.style.display = "none";
    e.parentElement.parentElement.style.border = "0px";
    e.parentElement.parentElement.style.background = "transparent";
    e.parentElement.parentElement.parentElement.style.background = "transparent";
});
