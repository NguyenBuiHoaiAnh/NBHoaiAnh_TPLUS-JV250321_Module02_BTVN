// Ex-09:
// PHÂN TÍCH hướng làm
// [1, 2, 3, 4, 5, 6, 7, 8]
// 3

// sliceArr(arr, number)

// sliceArr([1, 2, 3, 4, 5, 6, 7, 8], 3)
// [[1, 2, 3], [4, 5, 6], [7, 8]]

// - Dựa vào số lượng mảng con (number)
// --> Tính toán số lượng phần tử
// có trong các mảng con đó
// Tổng length/number --> Làm tròn lên (3)
// - Có 1 mảng kết quả []

// - Duyệt qua toàn bộ phần tử có bên trong mảng gốc
// let subArr = []
// for(let i = 0; i < 3; i = i + 1) {
// subArr.push(arr[i]);
// }
// [1, 2, 3]

// let subArr = []
// for(let i = 3; i < 6; i = i + 1) {
// subArr.push(arr[i]);
// }
// [4, 5, 6]

// let subArr = []
// for(let i = 6; i < 9; i = i + 1) {
// subArr.push(arr[i]);
// }
// [7, 8, null]

// for(let j = 0; j < 3; j = j + 1) {
// let subArr = []
// for(let i = 6; i < 9; i = i + 1) {
// subArr.push(arr[i]);
// }
// [7, 8, null]
// }

// sliceArr([1, 2, 3, 4, 5, 6, 7, 8], 2)
// [[1, 2, 3, 4], [5, 6, 7, 8]]

// INPUT
// PROCESS
// OUTPUT

let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// [[1, 2, 3],  [4, 5, 6], [7, 8]]

let n = 2;
let number = Math.ceil(arr.length / n);

let result = [];

// let subArr = [];
// for (let i = 0 + 0; i < number + 0; i = i + 1) {
//   subArr.push(arr[i]);
// }

// let subArr2 = [];
// for (let i = 0 + 3; i < number + 3; i = i + 1) {
//   subArr.push(arr[i]);
// }

// let subArr3 = [];
// for (let i = 0 + 6; i < number + 6; i = i + 1) {
//   subArr.push(arr[i]);
// }

for (let j = 0; j < arr.length - 1; j = j + number) {
  let subArr = [];
  for (let i = 0 + j; i < number + j; i = i + 1) {
    if (arr[i]) {
      subArr.push(arr[i]);
    }
  }
  result.push(subArr);
}
console.log(result);