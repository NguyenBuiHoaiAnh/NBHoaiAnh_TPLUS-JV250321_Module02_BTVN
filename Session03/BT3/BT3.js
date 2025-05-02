let n = +prompt("Nhập vào một số nguyên n:");

if (isNaN(n) || n < 0) {
    console.log("Dữ liệu nhập vào k hợp lệ");
}

let sumSole = 0;

for (i = 1;i < n;i++){
    if (i % 2 !== 0){
        sumSole += i;
        console.log(`tổng các số lẻ trong khoảng từ 1 - n: ${sumSole}`);
    }
}