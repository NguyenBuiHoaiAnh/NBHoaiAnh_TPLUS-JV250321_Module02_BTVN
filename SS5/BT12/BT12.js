let num = [1, 1, 2, 3, 4, 15, 16, 17, 2, 1];
// for (let i = 0; i < 10; i++) {
//     let input = prompt("Nhập số nguyên");
//     num.push(input);
// }

let max = num[0];
let turn = 0;

for (let i = 0; i < num.length; i++) {

    if (num[i] > max) {
        max = num[i];
        turn = i;
    }
}
// if (turn >= 0){
//     cconsole.log("Số lớn nhất:" + max);
//     console.log("Vị trí:" + turn);
// } 
// else {console.log("Không có số lớn nhất")};
console.log("Số lớn nhất:" + max);
console.log("Vị trí:" + turn);