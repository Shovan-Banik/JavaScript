var num = prompt("Enter a number: ");

if(num>0 && num%2 == 0){
    document.write("Positive and even");
} else if(num<0 && num%2 == 0){
    document.write("Negative and even");
}
else if(num<0 && num%2 != 0){
    document.write("Negative and Odd");
}
else{
    document.write("Error");
}


