var canva=document.getElementById("myCanvas");
var can=canva.getContext("2d");

can.lineWidth=3;//border koto toko mota hbe
can.strokeStyle="black";//border color
can.strokeRect(10,10,382,282);//border ta kothay hbe

can.fillStyle="green";// vitorer ki color diye fill hbe
can.fillRect(11,11,380,280);// rectangle tar size kmn hbe

var centerX=canva.width / 2;//x axis ar middle point ber kora 
var centerY=canva.height / 2;//y axis ar middle point ber kora 

can.beginPath();// kotha theke soro hbe
can.arc(centerX,centerY,100,0,2*Math.PI,false);
//false diye bujano hoyece anti clock nki clock wise
// 0 diye bujano hyece middle point theke soro korte
can.fillStyle="red";// circle ar color ki hbe
can.fill(); // fill korte bola hoyece red color diye
can.stroke(); // circle ar sobdike border dite bola hyece..oporer stroke diclare kora ace
