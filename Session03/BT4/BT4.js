let sumA = 0;

for (i = 1; i <= 7; i++) {
    let n = +prompt("Nhập vào 7 số nguyên bất kì:");
    
    if (isNaN(n) || n < 0) {
        console.log("Dữ liệu nhập vào k hợp lệ");
    }

    if (n % 2 === 0){
        sumA += n;
    }
}
console.log(`tổng các số chẵn trong 7 số nguyên đã nhập: ${sumA}`);
