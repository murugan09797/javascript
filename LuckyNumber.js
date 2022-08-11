


// https://jsfiddle.net/selva3murugan_R/ux1jwL3n/1/

let prom = prompt(" Enter your name and get your lucky number");

function luckyNumber(val) {

    let opt = []
    const alpha = [...Array(26)].map((e, i) => (i + 10).toString(36));
    let arr = val.toLowerCase().split("");
    if (arr.lenght !== 0) {
        for (let i = 0; i < arr.length; i++) {
            let aa = alpha.findIndex((e, ii) => e == arr[i])
            if (aa !== -1) {
                opt.push(aa + 1)
            }
        }
    }
    opt = (opt.join(""))
    let cd = Number(opt[Math.round(opt.length / 2)]) + 1
    alert("Your Luckiest Number is:  " + cd)

    return Number(opt[Math.round(opt.length / 2)]) + 1;

}
console.log("Your Luckiest Number is:   ", luckyNumber(prom))