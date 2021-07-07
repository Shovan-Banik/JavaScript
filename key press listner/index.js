document.addEventListener("keypress",function(event){//keypress use kor getting value from keybord press
       var text= event.key;
       document.querySelector("p").innerHTML="You have entered "+text;
}) 