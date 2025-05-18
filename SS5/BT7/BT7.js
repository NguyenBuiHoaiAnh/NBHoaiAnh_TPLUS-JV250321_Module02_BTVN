// let numbers = [];

// let n = +prompt("Số phần tử trong mảng:");

// for (i = 1; i <= n; i++) {
//     let inPut = +prompt("Nhập số vào mảng:");
//     numbers.push(inPut);
// }
// console.log(numbers);

let num = [2, 5, 7, 4, 1, 8, 6, 2, 5, 7];

for (i = 0; i < num.length; i++) {
    for (j = 0; j < num.length; j++) {
        if (num[j] > num[j + 1]) {
            let middle = num[j];
            num[j] = num[j + 1];
            num[j + 1] = middle;
        }
    }
}
console.log(num);