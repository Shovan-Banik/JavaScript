var photos=["images/img1.PNG","images/img2.PNG","images/img3.PNG"];
var imgtag=document.querySelector("img");
var count=0;

function next(){
    count++;
    if(count>=photos.length){
        count=0;
        imgtag.src=photos[count];
    }
    else{
        imgtag.src=photos[count];
    }    
}

function prvs(){

    count--;
    if(count<0){
        count=photos.length-1;
        imgtag.src=photos[count];
    }
    else{
        imgtag.src=photos[count];
    }    



}