//inspired from reference: https://www.classes.cs.uchicago.edu/archive/2021/spring/11111-1/happycoding/p5js/web-dev.html
//manipulate the DOM
document.getElementById("clear").addEventListener("click",function(){
    document.getElementById("play").value="";
    document.getElementById("play").focus();
});
//get value from "play"
function get(value){
    document.getElementById("play").value+=value;
}
//get the value of result
function calculates(){
    var result;
    result=document.getElementById("play").value
    document.getElementById("play").value=eval(result)
}
function backs() {
    //backspace; using array
    var arr = document.getElementById("play");
    //extract a string
    arr.value = arr.value.substring(0, arr.value.length - 1);
  }
  //running the program-focus
  function onLoad(){
    //After loading, the cursor automatically corresponds to the input box
    document.getElementById("play").focus();
  }




  