// let numbers = [];

// let n = +prompt("Số phần tử trong mảng:");

// for (i = 1; i <= n; i++) {
//     let inPut = +prompt("Nhập số vào mảng:");
//     numbers.push(inPut);
// }
// console.log(numbers);

let numbers = [2, 1, 4, 3, 5];

for (i = 0; i < numbers.length; i++) {
    for (j = 0; j < numbers.length; j++) {
        if (numbers[j] > numbers[j + 1]) {
            let middle = numbers[j];
            numbers[j] = numbers[j + 1];
            numbers[j + 1] = middle;
        }
    }
}
numbers.reverse();

console.log(numbers);

