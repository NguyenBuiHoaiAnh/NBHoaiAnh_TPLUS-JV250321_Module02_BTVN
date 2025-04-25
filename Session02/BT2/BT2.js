let monToan = +prompt("Nhập điểm môn Toán: ");
let monVan = +prompt("Nhập điểm môn Văn: ");
let monAnh = +prompt("Nhập điểm môn Anh: ");

let result = (monToan + monAnh + monVan)/3;

alert(result);

if (result < 5.0){
    alert("Yếu");
}else if (result < 6.4){
    alert("Khá");
}else if (result < 7.9){
    alert("Trung Bình");
}else {
    alert("Giỏi")
}
