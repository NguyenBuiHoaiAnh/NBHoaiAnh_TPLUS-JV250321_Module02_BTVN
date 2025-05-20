let num = [-1.1, 2.2, -2];

// let arrLength = +prompt("Nhập độ dài mảng:");
// for (let i = 0; i < arrLength; i++) {
//     let n = prompt("Nhập số nguyên");
//     num.push(n);
// }
let turn = 0;

for (i = 1; i < num.length; i++) {

    if (num[i] < 0) {
        turn++;
    }
}
if (turn > 0) {
    console.log(turn);
} else if (turn === 0) {
    console.log("Mảng không có phần tử");
} else {
    console.log("Số lượng phần tử không hợp lệ");
}
