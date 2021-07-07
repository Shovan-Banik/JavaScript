document.getElementById("checkButton").addEventListener("click",function(){
    var num=document.getElementById("box").value;
     try{
         if(num<10){
             throw"Your value is to low. Insert the apropriate value" // throw use kora hoy error create korar jonno
         }
         else if(num>20){
             throw"Your value is to big. Insert the apropriate value"
         }   
     }catch(err){   // throw ar value err pera meter a ase sbsmy
         console.log(err);
     }finally{ 
         document.write(num);
     }
})