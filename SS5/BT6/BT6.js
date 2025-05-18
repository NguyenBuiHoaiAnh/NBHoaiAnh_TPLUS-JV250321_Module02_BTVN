// let numbers = [];

// let n = +prompt("Số phần tử trong mảng:");

// for (i = 1; i <= n; i++) {
//     let inPut = +prompt("Nhập số vào mảng:");
//     numbers.push(inPut);
// }
// console.log(numbers);

let numbers = [2, 5, 7, 4, 1, 8, 6, 2, 5, 7];
let inPut = +prompt("Nhập vào một số nguyên bất kì");

let turn = 0;

for (i = 0; i < numbers.length; i++) {
    if (inPut === numbers[i]) {
        turn++;
    }
}

console.log(`Số ${inPut} xuất hiện ${turn} lần trong mảng`);