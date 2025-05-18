// let numbers = [];

// let n = +prompt("Số phần tử trong mảng:");

// for (i = 1; i <= n; i++) {
//     let inPut = +prompt("Nhập số vào mảng:");
//     numbers.push(inPut);
// }
// console.log(numbers);

let num = [2, 1, 7, 1, 1, 8, 6, 2, 2, 7];
let array = [];

for (let i = 0; i < num.length; i++) {
    let check = false;

    for (let j = 0; j < array.length; j++) {
        if (num[i] === array[j]) {
            check = true;
            break;
        }
    }
    if (check !== true) {
        array.push(num[i]);
    }
}

console.log(array);

for (i = 0; i < array.length; i++) {
    for (j = 0; j < array.length; j++) {
        if (array[j] > array[j + 1]) {
            let middle = array[j];
            array[j] = array[j + 1];
            array[j + 1] = middle;
        }
    }
}

console.log(array);