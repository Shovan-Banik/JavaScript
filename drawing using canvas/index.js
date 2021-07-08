var canva=document.getElementById("myCanvas");
var can=canva.getContext("2d");

can.lineWidth=3;
can.strokeStyle="black";
can.strokeRect(10,10,382,282);

can.fillStyle="green";
can.fillRect(11,11,380,280);

var centerX=canva.width / 2;
var centerY=canva.height / 2;

can.beginPath();
can.arc(centerX,centerY,100,0,2*Math.PI,false);
can.fillStyle="red";
can.fill();
can.stroke();
