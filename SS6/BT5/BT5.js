function isPalindrome(str) {
    // Chuyển về chữ thường và loại bỏ khoảng trắng, ký tự đặc biệt (nếu cần)
    let cleanStr = str.toLowerCase();
    
    // Đảo ngược chuỗi
    let reversedStr = cleanStr.split('').reverse().join('');
    
    // So sánh
    return cleanStr === reversedStr;
}

// Nhập từ người dùng
let input = prompt("Nhập vào một chuỗi để kiểm tra đối xứng:");

// Kiểm tra và thông báo
if (isPalindrome(input)) {
    alert("Chuỗi bạn nhập là chuỗi đối xứng");
} else {
    alert("Chuỗi bạn nhập k phải là chuỗi đối xứng");
}