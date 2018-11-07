
document.getElementById("color").onkeydown = function() {myFunction()};

function myFunction() {
    document.getElementById("color").style.backgroundColor = "darkseagreen";
}

 function startanimation() {
   let key =  document.querySelector("#slide")
   if (900 <= window.scrollY && 1400 >= window.scrollY){
     key.className = "animated slider";
   } else {
     key.className = "";
   }

 }
 window.addEventListener("scroll", startanimation);
