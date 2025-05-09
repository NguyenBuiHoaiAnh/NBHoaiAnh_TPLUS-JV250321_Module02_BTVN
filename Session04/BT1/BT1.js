let userName = "";
let userAge;

let exit = false;
while (!exit) {

    let n = +prompt(`=== MENU QUẢN LÝ THÔNG TIN ===

1. Nhập tên người dùng
2. Nhập tuổi người dùng
3. Kiểm tra người dùng đủ tuổi trưởng thành chưa
4. In ra tên viết hoa
5. Thoát
Lựa chọn của bạn: `);


    switch (n) {
        case 1:
            userName = prompt("Nhập tên người dùng:");
            console.log(userName);
            break;
        case 2:
            userAge = +prompt(" Nhập tuổi người dùng");
            console.log(userAge);
            break;
        case 3:
            userAge = +prompt(" Nhập tuổi người dùng");
            if (userAge >= 18) {
                console.log("Người dùng đã đủ tuổi trưởng thành");
            } else {
                console.log("Người dùng chưa đủ tuổi trưởng thành");
            }
            break;
        case 4:
            userName = prompt("Nhập tên người dùng:");
            console.log(userName.toUpperCase());
            break;
        case 5:
            exit = true;
            console.log("Chương trình kết thúc");
            break;
        default:
            console.log("Lựa chọn không hợp lệ");
    }
}
