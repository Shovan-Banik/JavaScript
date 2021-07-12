let x=10;
let y=20;// variable declare ar jonno ES6 ar khtre let use korte hoy var ar poriborte
let sum=x+y;
console.log(`sum is ${sum}`);//ES6 ar khetre ""/'' ar poriborte ``(back tik) use krte hoy
//function kivabe likhte hoy ES6 a : (syntex of function)
const add=(a,b)=>{ // const means constant 
    console.log(a+b);
}
add(2,3);

let z=9;
if(true){
    let z=8;
}
console.log(z);// aikhane 9 e print korbe karon let scope ar moto kaj kore
//orthat j function ar vitor lekha hoy sudhu oitar vitore kaj korbe


var g=6;
if(true){
    var g=4;
}
console.log(g);// aikhane 4 print korbe cause var ar maddome declare kora hoyece