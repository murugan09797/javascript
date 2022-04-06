
// Program to Find the Factorial Number

const value = 12

const output = []
function factorial (arg){
 
for (let i = 1; i<= value; i++){
    if(value % i == 0)
      output.push(i)
}

    return output

}
console.log("factorial",factorial(value))