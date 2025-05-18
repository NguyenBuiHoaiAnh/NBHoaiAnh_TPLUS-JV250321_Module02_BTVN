let numbers = [];

let n = +prompt("Số phần tử trong mảng:");

for (i = 1; i <= n; i++) {
    let inPut = +prompt("Nhập số vào mảng:");
    numbers.push(inPut);
}
console.log(numbers);

let test = +prompt("Kiểm tra có số trong mảng k");
let result = 0;
for (i = 0; i < numbers.length; i++) {
    if (test === numbers[i]) {
        result++;
    }
}
if (result >= 1) {
    console.log("Bingo");
} else {
    console.log("Chúc bạn may mắn lần sau");
}

