let number = +prompt("Nhập vào một tháng bất kì trong năm:");

switch (number) {
    case 1:
    case 2:
    case 3:
        console.log("Mùa xuân");
        break;
    case 4:
    case 5:
    case 6:
        console.log("Mùa hạ");
        break;
    case 7:
    case 8:
    case 9:
        console.log("Mùa thu");
        break;
    case 10:
    case 11:
    case 12:
        console.log("Mùa đông");
        break;
    default:
        console.log("Tháng k hợp lệ");
        break;
}