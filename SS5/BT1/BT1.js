let num = []
let n = +prompt("Số phần tử trong mảng:");

for (i = 1; i <= n; i++) {
    let inPut = +prompt("Nhập số vào mảng:");
    num.push(inPut);
}

console.log(num);