var link = document.querySelector(".button_write");
var popup = document.querySelector(".write_us");
var close = document.querySelector(".close");

link.addEventListener("click", function(evt){
    evt.preventDefault();
    popup.classList.add("modal_show");                    
})

close.addEventListener("click", function(evt){
    evt.preventDefault();
    popup.classList.remove("modal_show");
})