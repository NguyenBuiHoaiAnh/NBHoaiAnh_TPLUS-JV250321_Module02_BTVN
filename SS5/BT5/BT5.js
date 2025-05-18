// let numbers = [];

// let n = +prompt("Số phần tử trong mảng:");

// for (i = 1; i <= n; i++) {
//     let inPut = +prompt("Nhập số vào mảng:");
//     numbers.push(inPut);
// }
// console.log(numbers);

let numbers = [1, 4, 7, 8, 3];

let sumChan = 0;
let sumLe = 0;

for (i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0){
        sumChan = sumChan + numbers[i];
    } else {
        sumLe = sumLe + numbers[i];
    }
}


console.log("Tổng các số chẵn:" + sumChan);
console.log("Tổng các số lẻ:" + sumLe);