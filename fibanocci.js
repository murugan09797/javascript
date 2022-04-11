var val1=0;
var val2 = 1;
var val3 ;

function fun (arg){
for(let i =0; i <= arg; i++){
console.log("val1",val1)
val3 = val1 + val2;
val1 =  val2;
val2 = val3
}

return val3;
}

 console.log("cc",fun(7))
