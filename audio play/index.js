for(var i=0; i<3; i++){
    document.querySelectorAll(".my_button")[i].addEventListener("click",function(){
        var text=this.innerHTML;// by using 'this' we get the text from the buttun
        audioPlay(text);
    });  
}
function audioPlay(text){
    switch(text){
        case "Music_1":
            var audio= new Audio("gan/music-1.mp3");//creating object
                audio.play();
            break;

            case "Music_2":
                var audio= new Audio("gan/music-2.mp3");
                audio.play();
                break;
                
                case "Music_3":
                    var audio= new Audio("gan/music-3.mp3");
                    audio.play();
                    break;
    }
}
