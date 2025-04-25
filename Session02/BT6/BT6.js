let a = +prompt("Nhập số thứ nhất:");
let b = +prompt("Nhập số thứ hai:");

let phepTinh = prompt("Nhập phép tính (+, -, *, /, ^):");
// k nhập dấu cộng chỗ này 

let ketQua;

switch (phepTinh) {
    case "+":
        alert(ketQua = a + b);
        break;
    case "-":
        alert(ketQua = a + b);
        break;
    case "*":
        alert(ketQua = a + b);
        break;
    case "/":
        alert(ketQua = a / b);
        break;
    default:
        alert(ketQua = "Phép tính không hợp lệ!");
}
