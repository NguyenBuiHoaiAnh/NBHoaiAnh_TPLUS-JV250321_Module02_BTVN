// Ex-6:
// Tạo ra 1 hàm
// INPUT:
// - Chuỗi ký tự bất kỳ
// - "hello WORld"
// PROCESS:
// B1: Tạo hàm capitalize(str) // str
function capitalize(str) {
  // let str = "hello WORld"
  // B2: Chuẩn hoá lại các ký tự có trong trong chuỗi
  // str --> Về dạng viết thường "hello world"
  str = str.toLowerCase();

  // B3: Xác định từng từ có trong chuỗi ký tự str
  let words = str.split(" "); // ['hello', 'world']

  // B4: Tìm ký tự đầu tiên có trong từng từ
  // B4.1: Duyệt qua mảng words
  for (let i = 0; i <= words.length - 1; i = i + 1) {
    words[i]; // 'hello', 'world'
    // B4.2: Viết hoa ký tự đầu tiên của từng từ
    // - Làm việc được với từng ký tự có trong từng từ (words[i])
    let letters = words[i].split(""); // ['h', 'e', 'l', 'l', 'o'] // ['w', 'o'...]
    // - Viết hoa phần tử đầu tiên của mảng letters
    letters[0] = letters[0].toUpperCase(); // ['H', 'e'...] // ['W', 'o' ...];
    // - Nối các ký tự đó lại và cập nhật lại giá trị
    // cho từng từ trong mảng gốc
    words[i] = letters.join(""); // 'Hello' / 'World'
  }
  // words = ['Hello', 'World']
  let result = words.join(" ");
  return result;
}
console.log(capitalize("hello WORld ABASEC mcnvxkjh")); // "Hello World"
// OUTPUT:
// - Chuỗi ký tự đã được chuẩn hoá viết hoa chữ cái
// đầu tiên của từng từ
// - "Hello World"

//
// Duyệt từ đầu đến cuối
// gặp khoảng trắng thì ký tự tiếp theo
// viết hoa thì có được không ạ?

function capitalize2(str) {
  //   str = str.toLowerCase();
  let letters = str.toLowerCase().split("");
  letters[0] = letters[0].toUpperCase();
  for (let i = 0; i < letters.length; i = i + 1) {
    if (letters[i] === " ") {
      letters[i + 1] = letters[i + 1].toUpperCase();
    }
  }
  let result = letters.join("");
  return result;
}

console.log(capitalize2("hello WORld"));