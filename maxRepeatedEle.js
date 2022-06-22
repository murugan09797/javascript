

// this below code is made myself
const arr = [2, 1, 2, 2, 1];  // output ===> 2 bcz 2 is maximum number of elements in the array
let comp = 0;  // compare obj below and get that maximum property 
let result;   // this variable need to get perticular values of the objects

function fun(arr) {

    var obj = {}
    // looping over the array and get object 
    for (let i = 0; i < arr.length; i++) {
        if (obj[arr[i]]) {
            obj[arr[i]] = obj[arr[i]] + 1
        } else {
            obj[arr[i]] = 1;
        }
    }
    // looping obj and get keys and values

    for (let [key, val] of Object.entries(obj)) {
        if (val > comp) {
            comp = val;
            result = key
        }
    }
    return result
}

console.log("arr", fun(arr));

// this another ex to get google

function occurence(val) {
    return val.sort((a, b) => val.filter(c => c === a).length - val.filter(c => c === b).length).pop();
}

console.log("coo", occurence([2, 1, 1, 2, 1, 2]))