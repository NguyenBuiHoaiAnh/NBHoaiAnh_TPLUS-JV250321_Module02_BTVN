let company = {
    name: "RikkeiSoft",
    location: "Hà Nội",
    employees: [
        {
            name: "Nguyễn Văn Luận",
            position: "Developer"
        },
        {
            name: "Nguyễn Văn Hoàng",
            position: "Tester"
        },
        {
            name: "Hoàng Nam Cao",
            position: "Manager"
        }
    ]
}

console.log("Company name: " + company.name);

console.log("Company employees:");

company.employees.forEach((employee, index) => {
    console.log(employee.name);
});
