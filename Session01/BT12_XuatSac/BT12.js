let number = prompt("Nhập số tiền gửi: ");
let date = prompt("Nhập số tháng gửi: ");
price = Number(number);
date = Number(date);

let laiSuat = 4.3/12/100;
let tienLai = number * laiSuat * date;

alert("Tiền lãi nhận được là: " + tienLai + " VNĐ");