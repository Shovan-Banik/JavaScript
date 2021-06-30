// Creating html and add html using DOM
var msg2=document.getElementsByTagName("h1")[1];//find method
msg2.innerHTML="Work hard";

var head1=document.createElement("h1");//creating method
var msg3=document.createTextNode("Successful");
head1.appendChild(msg3);// adding method

var div1=document.getElementById("first_div");
div1.appendChild(head1);//adding method

 var msg1=document.getElementsByTagName("h1")[0];
 div1.removeChild(msg1);//removing method

var head0=document.createElement("h1");
msg0=document.createTextNode("Starting");
head0.appendChild(msg0);

div1.insertBefore(head0,msg2);// for adding before position

