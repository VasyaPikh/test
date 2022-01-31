// math1

function zadacha1 () { 
const n = 100;
 

let sum = 0;
let total = 0;
for (let i = 0; i <= n; i += 5) {
  if (i % 7 !== 0) {
    sum += i;
    total++;
    
  } 
  
}
let result = console.log(sum,total) 
    return result
}
zadacha1()

module.exports = {zadacha1}


// math2

// let n = 625;
// let y;
// (x = 0), x <= Math.floor(Math.sqrt(n/2)); x++; {
//  let y = Math.sqrt(n - x ** 2);
//  if (y - Math.floor(y) == 0) console.log(x, y);
// }