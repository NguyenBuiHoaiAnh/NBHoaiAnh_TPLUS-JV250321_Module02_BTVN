let userName;
let userAge;

let exit = false;

while (!exit) {
    let n = +prompt(`=== MENU QUẢN LÝ HỌC SINH ===

1. Nhập tên học sinh
2. Nhập tuổi học sinh
3. Nhập điểm Toán, Văn, Anh
4. Tính điểm trung bình và xếp loại
5. Hiển thị thông tin học sinh
6. Thoát
Lựa chọn của bạn: `);

    let monToan;
    let monVan;
    let monAnh;

    switch (n) {
        case 1:
            userName = prompt("Nhập tên học sinh");
            console.log(userName);
            break;
        case 2:
            userAge = +prompt("Nhập tuổi học sinh");
            console.log(userAge);
            break;
        case 3:
            monToan = +prompt("Nhập điểm Toán");
            monVan = +prompt("Nhập điểm Văn");
            monAnh = +prompt("Nhập điểm Anh");
            console.log(`Điểm Toán: ${monToan}, Điểm Văn: ${monVan}, Điểm Anh: ${monAnh}`);
            break;
        case 4:
            monToan = +prompt("Nhập điểm Toán");
            monVan = +prompt("Nhập điểm Văn");
            monAnh = +prompt("Nhập điểm Anh");

            let result = (monToan + monAnh + monVan) / 3;
            console.log("Điểm trung bình:" + Math.round(result));
            
            if (result < 5) {
                console.log("Học sinh trung bình");
            } else if (result < 7) {
                console.log("Học sinh Khá");
            } else {
                console.log("Học sinh Giỏi");
            }
            break;
        case 5:
            userName = prompt("Nhập tên học sinh");
            userAge = +prompt("Nhập tuổi học sinh");
            console.log("Tên học sinh:" + userName);
            console.log("Tuổi học sinh:" + userAge);
            break;
        case 6:
            exit = true;
            console.log("Chương trình kết thúc");
            break;
        default:
            console.log("Lựa chọn không hợp lệ");
    }
}