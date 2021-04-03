var observer = new IntersectionObserver(function(entries){
    if(entries[0].isIntersecting === true){
    document.getElementById("menu").style.visibility = "hidden";
    document.getElementById("menu").style.opacity = "0";
    document.getElementById("menu").style.transition = "opacity 500ms linear";
    document.getElementById("menu").style.transition = "visibility 0 s linear 500 ms";
}else{
    document.getElementById("menu").style.visibility = "visible";
    document.getElementById("menu").style.opacity = "0.8";
    document.getElementById("menu").style.transition = "opacity 500ms linear";
    document.getElementById("menu").style.transition = "visibility 0 s linear";
}
}, {threshold: [0.9]});

observer.observe(document.querySelector("#banner-wrapper"));