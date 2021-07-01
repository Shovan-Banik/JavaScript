var head=document.querySelector("h1");
head.addEventListener("mouseover",function(){
      head.classList.add("design");
      head.innerHTML="Thank you bby";
});

head.addEventListener("mouseout",function(){
    head.classList.remove("design");
    head.innerHTML="Don't remove cursor from me bby"
})
