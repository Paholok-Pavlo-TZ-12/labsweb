function evenOrOdd(num) {
   if (typeof num == 'number') {
      return num % 2 ? 'odd' : 'even'; 
   }
   return '';
}
console.log(evenOrOdd(12));

function sumSimpleNumbers() {
   let mas = [];
   nextMove:
   for (let i = 1; i < Infinity; i++) {
      for (let j = 2; j < i; j++) {
         if (i % j == 0) continue nextMove;
      }
      mas.push(i);
      if (mas.length == 5) {
         return mas.reduce((a, b) => a + b);
      }
   }
}
console.log(sumSimpleNumbers());

function sum(n) {
   let result = 0;
   for (let i = 0; i < n; i++){
      result += Number('1'.repeat(i+1));
   }
   return result;
}
console.log(sum(7));