let gio = +prompt("Nhập giờ: ");
let phut = +prompt("Nhập phút: ");
let giay = +prompt("Nhập giây: ");

if (isNaN(gio) || isNaN(phut) || isNaN(giay) ||
    gio < 0 || phut < 0 || giay < 0 ||
    gio > 23 || phut > 59 || giay > 59) {
    console.log("K hợp lệ");
}
else {
    let period = gio >= 12 ? "PM" : "AM";
    let gio12 = gio % 12; //14 % 12 dư 2

    if (gio12 === 0) {
        gio12 = 12; // 0h hoặc 12h sẽ hiển thị là 12

        let gioStr = gio12.toString().padStart(2, "0");
        let phutStr = phut.toString().padStart(2, "0");
        let giayStr = giay.toString().padStart(2, "0");
        // .toString() đẻ thay biến thành chuỗi
        // .padStart(2, "0") để thêm 0 cào đầu,
        // tổng chiều dài kí tự là 2

        alert(`Thời gian: ${gioStr}:${phutStr}:${giayStr} ${period}`);
        // chèn biến bằng dấu đô la
    }
}