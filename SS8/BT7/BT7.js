// Viết một chương trình có menu để quản lý nhân viên với các yêu cầu sau:

// Mỗi nhân viên có các thuộc tính: id, name, position, salary
// Chương trình có các chức năng:
// Thêm nhân viên mới.
// Xóa nhân viên theo id.
// Tìm thấy nhân viên có id confirm người dùng muốn xóa nhân viên hay không?
// Không tìm thấy nhân viên có id thì hiển thị thông báo.
// Cập nhật mức lương của nhân viên theo id
// Tìm kiếm nhân viên theo tên.

// Input:
// Nhập vào sự lựa chọn
// Process:
// B0: Xây dựng một kho lưu trữ dữ liệu mô phỏng
// CSDL - Cơ sở dữ liệu

let employeeList = [
  {
    id: 1,
    name: "Ngọc Trinh",
    position: "Người mẫu",
    salary: 5000,
  },
  {
    id: 2,
    name: "Hồ Ngọc Hà",
    position: "Ca sĩ/Người mẫu",
    salary: 3000,
  },
  {
    id: 3,
    name: "Hiền Hồ",
    position: "Ca sĩ",
    salary: 20000,
  },
];

// B1:
// Hiển thị ra menu tuỳ chọn để người dùng có thể lựa chọn
// các tuỳ chọn trong menu đó
let menu = `
-------------- MENU --------------
1. Thêm nhân viên mới.
2. Xóa nhân viên theo id.
- Tìm thấy nhân viên có id confirm người dùng muốn xóa nhân viên hay không?
- Không tìm thấy nhân viên có id thì hiển thị thông báo.
3. Cập nhật mức lương của nhân viên theo id
4. Tìm kiếm nhân viên theo tên.
5. Thoát
`;
let loop = true;
while (loop) {
  // B2: Thu thập sự lựa chọn của người dùng thông
  // qua câu lệnh prompt
  let userInput = +prompt(menu);

  // B3: Xây dựng khung chương trình
  // Sử dụng câu điều kiện rẽ nhánh để điều hướng chương trình
  // tuỳ từng trường hợp
  switch (userInput) {
    case 1:
      // Thêm mới nhân viên
      // B4: Thêm mới 1 nhân viên
      // - Tạo ra 1 đối tượng (id, name, position, salary)
      // B5: Cho người dùng nhập vào name, position và salary
      let name = prompt("Mời bạn nhập tên của nhân viên mới");
      let position = prompt("Mời bạn nhập chức vụ của nv mới");
      let salary = prompt("Mời bạn nhập mức lượng của nv mới");
      // B6: Sinh ra id là một đại lượng độc nhất
      let id = Math.random(); // [0 --- 0.99999999999999]
      // B7: Tạo ra 1 đối tượng mới và thêm đối tượng đó
      // vào trong mảng employeeList
      let newEmployee = {
        id: id,
        name: name,
        position: position,
        salary: salary,
      };
      employeeList.push(newEmployee);
      // B8: Hiển thị ra toàn bộ đối tượng nhân viên có trong
      // mảng employeeList
      showEmployeeInfo();
      break;
    case 2:
      // Xoá nhân viên theo id
      // B1: Cho người dùng nhập vào id của nhân viên muốn xoá
      let deleteId = +prompt("Mời bạn nhập vào id của nv muốn xoá");
      // B2: Tìm kiếm nhân viên đó theo id người dùng nhập vào
      let findIndex = findById(deleteId); // -1, index

      // findById(deleteId) // --> vị trí index của nv
      if (findIndex === -1) {
        console.log("Không có nhân viên với id mà bạn vừa nhập");
      } else {
        // B3: Tiến hành hiển thị ô confirm (Bạn có muốn xoá hay không???)
        let isConfirm = confirm("Bạn có muốn xoá nhân viên này không???"); // true
        // B4: Nếu có --> Tiến hành xoá
        if (isConfirm) {
          // Tiến hành xoá
          employeeList.splice(findIndex - 1, 1);
          showEmployeeInfo();
        }
        // B5: Nếu không --> Không xoá
        // B6: Hiển thị mảng nhân viên (Để quan sát sự thay đổi)
      }

      break;
    case 3:
      // Cập nhật mức lương của nhân viên theo id
      // B1: Cho người dùng nhập vào id của nhân viên muốn thay đổi
      // mức lương
      let updateId = +prompt("mời bạn nhập vào id của nv muốn thay đổi lương");
      // B2: Tìm kiếm nhân viên theo id
      // findById(updateId)
      let updateIndex = findById(updateId);
      // B3: Tiến hành cập nhật
      if (updateIndex === -1) {
        console.log("Không tìm thấy nhân viên với id như trên");
      } else {
        let newSalary = prompt("Mời bạn nhập vào mức lương mới của nv trên");
        employeeList[updateIndex - 1].salary = newSalary;
        showEmployeeInfo();
      }
      break;
    case 4:
      // Tìm kiếm nhân viên theo tên
      break;
    case 5:
      // Thoát
      console.log("Thanks for using the app !!!");
      loop = false;
      break;
  }
}

// Output:
// Thực hiện các tính năng tuỳ thuộc vào sự lựa chọn
// của người dùng

function showEmployeeInfo() {
  for (let i = 0; i < employeeList.length; i = i + 1) {
    console.log(`${i + 1}.------`); // {id, name...}, {id, name ...}
    console.log(`id: ${employeeList[i].id}`);
    console.log(`name: ${employeeList[i].name}`);
    console.log(`salary: ${employeeList[i].salary}`);
    console.log(`position: ${employeeList[i].position}`);
  }
}

function findById(id) {
  let findIndex = -1;
  for (let i = 0; i < employeeList.length; i = i + 1) {
    if (employeeList[i].id === id) {
      findIndex = i;
      break;
    }
  }
  return findIndex;
}