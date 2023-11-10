var elem = document.querySelectorAll(".elem" );
// var elemimg = document.querySelector("#elem1 img");

// elem1.addEventListener("mousemove", function(dets){
//     elemimg.style.left = dets.x + "px";
//     elemimg.style.top = dets.y + "px";
// })
// elem1.addEventListener("mouseenter", function(){
//     elemimg.style.opacity = 1;
// })
// elem1.addEventListener("mouseleave", function(){
//     elemimg.style.opacity = 0;
// })
elem.forEach(function(val){
    
    val.addEventListener("mouseenter", function(){
        val.childNodes[2].style.opacity= 1;
    });
    val.addEventListener("mouseleave", function(){
        val.childNodes[2].style.opacity= 0;
    });
    val.addEventListener("mousemove", function(dets){
        val.childNodes[2].style.left = dets.x + "px";
        //val.childNodes[2].style.top = dets.y + "px";
    });
});