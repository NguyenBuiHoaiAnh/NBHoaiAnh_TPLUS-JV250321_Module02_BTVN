let n = +prompt("Tất cả các số chia hết cho 5:");

if (isNaN(n) || n < 0) {
    console.log("Dữ liệu nhập vào k hợp lệ");
}

let divi = 0;

for (i = 1;i <= n; i++){
    if (i % 5 === 0){
        divi = i;
        console.log(`Các số chia hết cho 5 từ 1 đến ${n} là: ${divi}`);
    }
}
