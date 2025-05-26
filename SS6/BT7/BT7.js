// Ex-7:
// Tạo ra 1 hàm thực thi yêu cầu đề bài
// Input
// Nhận vào 1 mảng số nguyên bất kỳ
// Process
// B1: Tạo 1 hàm squareAndFilter(arr) // arr[]
function squareAndFilter(arr) {
  // B2:
  // let arr = [3, 2, 5, 4, 1]
  // Làm việc được với toàn bộ phần tử trong arr (Duyệt) - Read ALL
  //   for (let i = 0; i < arr.length; i = i + 1) {
  //     arr[i];
  //   }
  // for...of
  // B2.1: Tạo ra 1 mảng rỗng dùng để lưu trữ kết quả
  // của bài toán
  let result = [];
  for (let element of arr) {
    // B3: Bình phương toàn bộ phần tử có trong mảng arr
    element = element ** 2;
    // B4: Kiểm tra xem phần tử bình phương đó có phải
    // chẵn hay không
    // Nếu không --> Kệ nó
    // Nếu có --> Đẩy các phần tử thoả mãn vào mảng
    // result
    if (element % 2 === 0) {
      result.push(element);
    }
  }
  return result;
}
console.log(squareAndFilter([3, 2, 5, 4, 1])); // [4, 16]
// Output
// Mảng bình phương các phần tử
// Lọc ra phần tử chẵn

// 1. Chuyển đổi toàn bộ phần tử có trong mảng
// (THEO CÔNG THỨC)
// Array.map()
let numberList = [3, 2, 5, 2, 1, 4];
let result = numberList.map(function (e, i) {
  return (e + 10) ** 2;
});
console.log(result);
// Chuyển đổi toàn bộ phần tử trong mảng
// Tăng 10 và bình phương

// 2. Lọc toàn bộ phần tử có trong mảng
// (THEO ĐIỀU KIỆN)
// Array.filter()
let numberList2 = [3, 2, 5, 2, 1, 4];
// Lọc ra toàn bộ số lẻ
// Lọc ra toàn bộ phần tử thoả mãn điều kiện
// chia hết cho 2 dư 1
let result2 = numberList2.filter(function (element, index) {
  return (element % 2 === 0) & (element % 5 === 0);
});
console.log(result2);