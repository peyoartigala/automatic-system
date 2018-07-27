let rectangle2= document.querySelector(".rectangle2")
let projectname= document.querySelector(".projectname")


projectname.addEventListener(
  'click',
  function(){
    rectangle2.style.display="block"  }
)


function myFunction() {
    var x = document.getElementById("rectangle2");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
