// const arr = [6, 7, 88, 5, 35, 75];
// const res = arr.reduce((a, c)=>{
//  if(c % 5 == 0 && c % 7 !== 0){
//    a.sum += c;
//    a.number++
//  }
//  return a
// }, {sum:0, number:0});
// console.log("Кількість: %i, сума: %i", res.sum, res.number)


const n = 100;
 
let sum = 0;
let total = 0;
for (let i = 0; i <= n; i += 5) {
  if (i % 7 !== 0) {
    sum += i;
    total++;
  }
}
console.log(total, sum);