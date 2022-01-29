const arr = [6, 7, 88, 5, 35, 75];
const res = arr.reduce((a, c)=>{
  if(c % 5 == 0 && c % 7 !== 0){
    a.sum += c;
    a.number++
  }
  return a
}, {sum:0, number:0});
console.log("Кількість: %i, сума: %i", res.sum, res.number)
