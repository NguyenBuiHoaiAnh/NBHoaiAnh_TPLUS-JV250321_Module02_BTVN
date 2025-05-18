let exit = false;
let arr = [];

while (!exit) {
    let choice = +prompt(`MENU

1. Nhập vào mảng
2. Hiển thị mảng
3. Thêm phần tử
4. Sửa phần tử
5. Xóa phần tử
6. Thoát
  Lựa chọn của bạn: `);
  
    switch (choice) {
        case 1:
            let n = +prompt("Số phần tử trong mảng:");

            for (i = 1; i <= n; i++) {
                let inPut = prompt("Nhập số vào mảng:");
                arr.push(inPut);
            }
            console.log(arr);
            break;
        case 2:
            console.log(arr);
            break;
        case 3:
            let addArr = prompt("Thêm phần tử vào mảng:");
            arr.push(addArr);
            console.log(arr);
            break;

        case 4:
            let fixIndex = +prompt("Vị trí cần sửa phần tử:");
            let fixArr = prompt("Phần tử cần sửa:")

            arr.splice(fixIndex - 1,1,fixArr);
            console.log(arr);
            break;

        case 5:
            let delIndex = +prompt("Vị trí cần xóa phần tử:");
            arr.splice(delIndex,1);
            console.log(arr);
            break;

        case 6:
            exit = true;
            console.log("Chương trình kết thúc");
            break;
    }
}