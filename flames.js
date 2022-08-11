
// https://jsfiddle.net/selva3murugan_R/g5zt4erb/3/

// Info : in this task not yet completed . to need to write half of the task pending


let nameOne = "aadas";
let nameTwo = "sadaa";

function fun(nameOne,nameTwo){

let name1 = nameOne.split("");
let name2 = nameTwo.split("");

let getName = name1.length < name2.length ? name1 : name2;

for(let i=0;i<getName.length;i++){
if(getName.length === name1.length){
let ind = name2.findIndex((e,ii)=>e==name1[i])
if(ind !== -1){
name1[i]=0;
name2[ind] =0;
}
}
}
let count = name1.filter(e=>e).length + name2.filter(e=>e).length;
 console.log("count",name1.filter(e=>e),name2.filter(e=>e))
 //so sar i did compare two numbers and getting unique values
 
 return count
}

console.log("fun",fun(nameOne,nameTwo))