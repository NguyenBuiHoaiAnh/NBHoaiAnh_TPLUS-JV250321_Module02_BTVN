let num = [1, 1, 2, 3, 4, 15, 16, 17, 4, 1];
// for (let i = 0; i < 10; i++) {
//     let input = prompt("Nhập số nguyên");
//     num.push(input);
// }

let count = 0;
for (let i = 0; i < num.length; i++) {
    if (num[i] >= 10) {
        count = count + num[i] + " ";
    } 
}
if (count <= 0){
    console.log("Không có số nào lớn hơn 10");
} else {
    console.log(count);
}
