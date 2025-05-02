let n = +prompt("Tổng tất cả các số nguyên từ 1 đến một số N:");
if (isNaN(n) || n < 0) {
    console.log("Dữ liệu nhập vào k hợp lệ");
}

let sumA = 0;

for (i = 1; i <= n; i++) {
    sumA += i;
}

console.log("tổng tất cả các số nguyên tử:"+ sumA);
