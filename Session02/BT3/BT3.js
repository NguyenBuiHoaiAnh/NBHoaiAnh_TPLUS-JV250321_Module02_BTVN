let ten = prompt("Hãy nhập tên Quản trị viên: ");

if (ten === null) {
    console.log("Cancelled");
} else if (ten === "ADMIN") {
    let matkhau = prompt("yêu cầu nhập mật khẩu:");
    
    if (matkhau === null) {
        console.log("Cancelled");
    } else if (matkhau === TheMaster) {
        console.log("Welcome");
    }
    else {
        console.log("Wrong password");
    }
} else {
    console.log("I Don’t know you");
}
