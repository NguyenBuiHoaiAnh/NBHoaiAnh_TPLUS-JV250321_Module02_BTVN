let n = parseInt(prompt("Nhập vào một số nguyên dương N:"));
let i;

let exit = false;

while (!exit) {
    let u = +prompt(`=== MENU XỬ LÝ SỐ NGUYÊN N ===
(${n} là số nguyên dương bạn nhập ban đầu)

1. Kiểm tra N có phải số nguyên tố
2. Tính tổng các số từ 1 đến N
3. Tính giai thừa của N (N!)
4. In bảng nhân của N
5. Đếm số ước của N
6. Kiểm tra N có phải số hoàn hảo
7. In tất cả số chia hết cho 3 và 5 từ 1 đến N
8. In tất cả số lẻ từ 1 đến N
9. Thoát
Lựa chọn của bạn: `);

    switch (u) {
        case 1:
            let isPrime = true;

            if (n === 1) {
                console.log("1 không phải số ng tố");
            } else if (n > 1) {
                for (let i = 2; i <= n; i++) {
                    if (n % i === 0) {
                        isPrime = false;
                        break; // Vì chia hết là sai r nên break để phá vòng lặp k kiểm tra nữa 
                    }
                }
            }

            if (isPrime) {
                console.log(`${n} là số ng tố`);
            } else {
                console.log(`${n} không phải là số ng tố`);
            }
            break;

        case 2:
            let sum = 0;
            i = 1;

            while (i <= n) {
                sum = sum + i;
                i++;
            }
            console.log(`Tổng từ 1 đến ${n} là: ${sum}`);
            break;

        case 3:
            let result = 1;
            i = 1;
            while (i <= n) {
                result = result * i;
                i++;
            }
            console.log(`${n}! = ${result}`);
            break;

        case 4:
            for (i = 1; i <= 10; i++) {
                console.log(`Bảng nhân của ${n}:${i * n}`);
                i++;
            }
            break;
        case 5:
            let count = 0;

            for (i = 1; i <= n; i++) {
                if (n % i === 0) {
                    count++;
                }
            }
            console.log(`Số ước của ${n}: ${count}`);
            break;
        case 6:
            let sum1 = 0;

            for (i = 1; i < n; i++) {
                if (n % i === 0) {
                    sum1 = sum1 + i;
                }
            }
            if (sum1 === n && sum1 !== 0) {
                console.log(`${n} là số hoàn hảo`);
            } else {
                console.log(`${n} không phải là số hoàn hảo`)
            }
            break;
        case 7:
            let result1 = 0;
            for (i = 1; i <= n; i++) {
                if (i % 3 === 0 && i % 5 === 0) {
                    result1 = result1 + i + " ";
                }
            }
            console.log(result1 ? `Các số chia hết cho 3 và 5 từ 1 đến ${n} : ${result1}` : "Không có số nào thỏa mãn");
            break;
        case 8:
            let soLe = 0;
            for (i = 1; i <= n; i++) {
                if (i % 2 !== 0) {
                    soLe = soLe + i + " ";
                }
            }
            console.log(`Các số lẻ từ 1 đến ${n} : ${soLe}`);
            break;
        case 9:
            exit = true;
            console.log("Kết thúc chương trình");
    }
}


