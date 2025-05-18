let exit = false;
let arr = [];

while (!exit) {
    let choice = +prompt(`================== MENU ===================

1. Nhập số phần tử cần nhập và giá trị các phần tử
2. In ra giá trị các phần tử đang quản lý
3. In ra giá trị các phần tử chẵn và tính tổng
4. In ra giá trị lớn nhất và nhỏ nhất trong mảng
5. In ra các phần tử là số nguyên tố trong mảng và tính tổng
6. Nhập vào một số và thống kê trong mảng có bao nhiêu phần tử đó
7. Thêm một phần từ vào vị trí chỉ định
8. Thoát
 	============================================

  	Lựa chọn của bạn: `);

    switch (choice) {
        case 1:
            let n = +prompt("Số phần tử trong mảng:");

            for (i = 1; i <= n; i++) {
                let inPut = +prompt("Nhập số vào mảng:");
                arr.push(inPut);
            }
            console.log(arr);
            break;

        case 2:
            console.log(arr);
            break;
        case 3:
            let chanArr = [];
            let sum = 0;

            for (i = 0; i < arr.length; i++) {
                if (arr[i] % 2 === 0) {
                    chanArr.push(arr[i]);
                    sum = sum + arr[i];
                }
            }
            console.log(`Các phần tử chẵn: ${chanArr}`);
            console.log(`Tổng: ${sum}`);
            break;

        case 4:
            let arrMax = 0;
            let arrMin = 0;

            for (i = 0; i < arr.length; i++) {
                if (arrMax < arr[i]) {
                    arrMax = arr[i];
                } else if (arrMin > arr[i]) {
                    arrMin = arr[i];
                }
            }
            console.log("Số lớn nhất mảng là:" + arrMax);
            console.log("Số nhỏ nhất mảng là:" + arrMin);
            break;

        case 5:
            let primeArr = [];
            let sumPrime = 0;

            for (i = 0; i < arr.length; i++) {
                if (arr[i] % 2 !== 0) {
                    primeArr.push(arr[i]);
                    sumPrime += arr[i];
                }
            }

            console.log(primeArr);
            console.log(sumPrime);
            break;

        case 6:
            let findIndex = +prompt("Nhập vào một số");
            let turn = 0;

            for (i = 0; i < arr.length; i++) {
                
                if (findIndex === arr[i]) {
                    turn++;
                }
            }

            console.log(`Có ${turn} số ${findIndex} trong mảng`);
            break;

        case 7:
            let addArr = +prompt("Thêm phần tử vào mảng:");
            let arrIndex = +prompt("Vị trí phần tử:");

            arr.splice(arrIndex, 0, addArr);
            console.log(arr);
            break;

        case 8:
            exit = true;
            console.log("Chương trình kết thúc");
            break;
    }
}