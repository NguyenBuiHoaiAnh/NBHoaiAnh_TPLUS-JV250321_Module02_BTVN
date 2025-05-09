let exit = false;
let a = 0;
let i = 0;


while (!exit) {
    let n = +prompt(`=== MENU BẢNG CỬU CHƯƠNG NÂNG CAO ===

1. Hiển thị bảng cửu chương từ 1 đến 9
2. Hiển thị bảng cửu chương của một số cụ thể
3. Kiểm tra kết quả phép nhân
4. Hiển thị bảng cửu chương ngược
5. Luyện tập bảng nhân với số lần tùy chọn
6. Thống kê kết quả đúng/sai
7. Thoát
Lựa chọn của bạn: `);

    switch (n) {
        case 1:
            for (i = 1; i < 10; i++) {
                for (a = 1; a <= 10; a++) {
                    console.log(i + "*" + a + "=" + i * a);
                }
            }
            break;
        case 2:
            a = +prompt("Bảng cửu chương của một số cụ thể");

            for (i = 1; i <= 10; i++) {
                console.log(a + "*" + i + "=" + i * a);
            }
            break;
        case 3:
            let x = Math.floor(Math.random() * 9 + 1); // +1 để Math.random() [0 - 0.9999]*9 + 1 --> [1 - 9.9999]
            let y = Math.floor(Math.random() * 9 + 1);

            let ans = +prompt(`${x} * ${y} = ?`);

            if (ans === x * y) {
                console.log("Đúng!");
            } else {
                console.log("Sai!");
            }
            break;
        case 4:
            for (i = 10; i >= 1; i--) {
                for (a = 9; a >= 1; a--) {
                    console.log(i + "*" + a + "=" + i * a);
                }
            }
            break;
        case 5:
            let soLan = +prompt("Số lần luyện tập bảng nhân:");
            let times = 0;

            while (times < soLan) {
                let x = Math.floor(Math.random() * 9 + 1); // +1 để Math.random() [0 - 0.9999]*9 + 1 --> [1 - 9.9999]
                let y = Math.floor(Math.random() * 9 + 1);

                let ans = +prompt(`${x} * ${y} = ?`);

                if (ans === x * y) {
                    console.log("Đúng!");
                    a++;
                } else {
                    console.log("Sai!");
                    i++;
                }
                times++;
            }
            break;
        case 6:
            console.log(`KẾT QUẢ: Đúng: ${a} Sai: ${i}`);
            break;
        case 7:
            exit = true;
            console.log("Chương trình kết thúc");
            break;

        default:
            console.log("Lựa chọn không hợp lệ");
    }
}