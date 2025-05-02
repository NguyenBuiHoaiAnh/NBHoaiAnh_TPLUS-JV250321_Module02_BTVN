
for (let i = 1; i <= 10; i++) {
  // Tạo màu ngẫu nhiên theo dạng RGB

  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  
  let color = `rgb(${red}, ${green}, ${blue})`;

  // In ra console với màu sắc ngẫu nhiên
  console.log(`%c Màu sắc đã được thay đổi`, `color: ${color};font-size: 15px`);
}