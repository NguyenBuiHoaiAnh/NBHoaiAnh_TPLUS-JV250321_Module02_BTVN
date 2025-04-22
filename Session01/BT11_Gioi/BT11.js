// Sử dụng Math.abs()
// Math.abs() trả về giá trị tuyệt đối (luôn là số dương)

console.log(Math.abs(-5.5)); // Kết quả: 5.5 -> loại bỏ dấu âm
console.log(Math.abs(10));   // Kết quả: 10  -> là số dương rồi nên giữ nguyên

// Sử dụng Math.ceil()
// Math.ceil() làm tròn lên đến số nguyên lớn hơn gần nhất

console.log(Math.ceil(4.4)); // Kết quả: 5 -> làm tròn lên 5
console.log(Math.ceil(5.8)); // Kết quả: 6 -> làm tròn lên 6

// Sử dụng Math.floor()
// Math.floor() làm tròn xuống đến số nguyên nhỏ hơn gần nhất

console.log(Math.floor(5.7)); // Kết quả: 5 -> làm tròn xuống 5
console.log(Math.floor(6.1)); // Kết quả: 6 -> làm tròn xuống 6

// Sử dụng Math.round()
// Math.round() làm tròn đến số nguyên gần nhất
// Nếu .5 trở lên thì làm tròn lên, k thì xuống

console.log(Math.round(10.1)); // Kết quả: 10 
console.log(Math.round(20.6)); // Kết quả: 21