


const arr = [3, 2, 1, 0, -9];
let result = ""

function fun(arr) {

  let asc = [...arr].sort((a, b) => a - b);
  let desc = [...asc].reverse()

  if (arr.every((e, i) => e === asc[i])) {
    return result = "yes ascending order"
  } else if (arr.every((e, i) => e === desc[i])) {
    return result = "yes descending order"
  } else {
    return result = "Not"
  }

 }

console.log("arr", fun(arr))