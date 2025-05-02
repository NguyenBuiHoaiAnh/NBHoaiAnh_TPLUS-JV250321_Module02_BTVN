let sumA = 0;
let sumB = 0;

for (i = 1; i <= 7; i++) {
    let n = +prompt("Nhập vào 7 số nguyên bất kì:");
    
    if (isNaN(n) || n < 0) {
        console.log("Dữ liệu nhập vào k hợp lệ");
    }

    if (n % 2 === 0){
        sumA++;
    } else {
        sumB++;
    }
}
console.log("Số lượng số chẵn:"+ sumA);
console.log("Số lượng số lẻ:"+ sumB);