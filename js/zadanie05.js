document.addEventListener("DOMContentLoaded",function(){
    var container = document.getElementById("container");
    this.addEventListener('click',function(event){
        if(event.target.tagName == "BUTTON"){
            clickMe(event);
        }
    } );
    function clickMe(x){
        container.innerHTML = x.path[0].dataset.text;
    }
});