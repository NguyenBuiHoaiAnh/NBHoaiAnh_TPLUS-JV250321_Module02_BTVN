let a = +prompt("Nhập độ dài cạnh 1 của một tam giác:");
let b = +prompt("Nhập độ dài cạnh 2 của một tam giác:");
let c = +prompt("Nhập độ dài cạnh 3 của một tam giác:");

if (isNaN(a) || isNaN(b) || isNaN(c) ||
    a <= 0 || b <= 0 || c <= 0) {
    console.log("K hợp lệ");
} 
else if (a + b > c && a + c > b && b + c > a) {
    if (a === b && b === c) {
        console.log("Tam giác đều");
    }
    else if (
        a * a === b * b + c * c ||
        b * b === a * a + c * c ||
        c * c === a * a + b * b
    ) {
        if (a === b || a === c || b === c) {
            console.log("Tam giác vuông cân");
        } else {
            console.log("Tam giác vuông");
        }
    }
    else if (
        a === b || a === c || b === c
    ){
        console.log("Tam giác cân");
    } else {
        console.log("Tam giác thường");
    }
} else {
    console.log("K hợp lệ");
}
