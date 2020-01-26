document.addEventListener("DOMContentLoaded",function(){
    var ul = document.getElementById("shopping-list");
    this.addEventListener('click',function(event){
        if(event.target.tagName == "BUTTON"){
            clickMe(event);
        }
    } );
    function clickMe(x){
        switch(x.path[0].id){
            case "button-1":
                var li = document.createElement("li");
                li.innerHTML = "chleb";
                ul.appendChild(li);
                break;
            case "button-2":
                ul.removeChild(ul.children[ul.children.length-1]);
                break;
            case "button-3":
                var cln = ul.children[1].cloneNode(true);
                ul.appendChild(cln);
                break;
        }
    }
});