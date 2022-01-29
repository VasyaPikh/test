alert ('hey');

const array = [5,2,12,15,25];
 
const dividedByFive = array.filter(item => item % 5 === 0);
const dividedByFiveSum = dividedByFive.reduce((res, item) => res += item, 0);
 
console.log(`Делятся без остатка на 5: ${dividedByFive}. Их сумма: ${dividedByFiveSum}`)