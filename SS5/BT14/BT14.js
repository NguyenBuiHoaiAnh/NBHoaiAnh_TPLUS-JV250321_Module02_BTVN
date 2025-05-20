let exit = false;
let num = [];

while (!exit) {

    let menu = +prompt(`================== MENU ===================

1.Nhập số phần tử cần nhập và giá trị các phần tử
2.In ra giá trị các phần tử đang quản lý
3.In ra giá trị các phần tử chẵn và tính tổng
4.In ra giá trị lớn nhất và nhỏ nhất trong mảng
5.In ra các phần tử là số nguyên tố trong mảng và tính tổng
6.Nhập vào một số và thống kê trong mảng có bao nhiêu phần tử đó
7.Thêm một phần từ vào vị trí chỉ định
8.Thoát

===========================================

  	Lựa chọn của bạn: `);

    switch (menu) {
        case 1:
            let arrNum = +prompt("Số phần tử cần nhập");

            for (let i = 0; i < arrNum; i++) {
                let valueNum = +prompt("Giá trị các phần tử");
                num.push(valueNum);
            }
            console.log("Mảng update: " + num);
            break;

        case 2:
            console.log("Giá trị các phần tử đang quản lý là:" + num);
            break;

        case 3:
            let chanArray = [];
            let sumArr = 0;

            for (i = 0; i < num.length; i++) {
                if (num[i] % 2 === 0) {
                    chanArray.push(num[i]);
                }
            }
            console.log("Giá trị các phần tử chẵn:" + chanArray);

            for (j = 0; j < chanArray.length; j++) {
                sumArr = sumArr + chanArray[j];
            }
            console.log("Tổng:" + sumArr);
            break;

        case 4:
        case 5:
            let arrNT = [];

            for (let i = 0; i < num.length; i++) {

                let isPrime = true;

                if (num[i] <= 1) {
                    console.log("1 không phải số ng tố");
                } else if (num[i] > 1) {
                    for (let j = 2; j <= num[i] ^ 2; j++) {
                        if (num[i] % j === 0) {
                            isPrime = false;
                            break;
                        }
                    }
                }
                if (isPrime) {
                    arrNT.push(num[i]);
                }
            }
            console.log(arrNT);

            break;

        case 8:
            exit = true;
            console.log("Kết thúc chương trình");
            break;
    }
}