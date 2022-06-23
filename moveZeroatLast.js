

// that task getting array 
// insilde array move zero at last elements

let arr = [1, 0, 2, 0];
let len = arr.length;

function moveZero(arr) {

    let fullNumber = arr.sort((a, b) => { return a - b }).filter((e, i) => e)
    // fullNumber retun except zero  
 
    return fullNumber.concat([...Array(len - fullNumber.length).keys()].fill(0))
    // above code 
}

console.log("fun", moveZero(arr))