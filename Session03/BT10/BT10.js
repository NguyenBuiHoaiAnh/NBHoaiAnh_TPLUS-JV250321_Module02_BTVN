let n = parseInt(+prompt("Nhập vào n:"));

let f0 = 1;
let f1 = 1;

// In ra n số Fibonacci
if (isNaN(n) || n < 0) {
    console.log("Không hợp lệ");
} else {
    console.log("Dãy Fibonacci gồm", n, "số đầu tiên:");
}

if (n >= 1) console.log(f0);
if (n >= 2) console.log(f1);

for (let i = 3; i <= n; i++) {
    let fn = f0 + f1;
    console.log(fn);

    // Cập nhật giá trị cho lần lặp tiếp theo
    f0 = f1;
    f1 = fn;
}




