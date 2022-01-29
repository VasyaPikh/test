let n = 625;
let y;
(x = 0); x <= Math.floor(Math.sqrt(n/2)); x++; {
  let y = Math.sqrt(n - x ** 2);
  if (y - Math.floor(y) == 0) console.log(x, y);
}