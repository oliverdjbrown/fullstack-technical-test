const { response } = require("express");
const {
  status200,

  status400,
  status404,
} = require("../../constants");

let employeesData = [
  {
    id: 1,
    fullName: "John Doe",
    birth: Date(1990, 1, 1),
  },
  {
    id: 2,
    fullName: "Jane Doe",
    birth: Date(1997, 2, 1),
  },
  {
    id: 3,
    fullName: "Juan Doe",
    birth: Date(2000, 3, 1),
  },
  {
    id: 4,
    fullName: "Juana Doe",
    birth: Date(2004, 4, 1),
  },
];

const EmployeeGetAll = async (req = request, res = response) => {
  const { limit = 5, skip = 0 } = req.query;

  const employees = employeesData.slice(Number(skip), Number(skip) + Number(limit));

  res.status(status200.code).json(employees);
};

const EmployeeGetById = async (req = request, res = response) => {
  const { id } = req.params;

  const employee = employeesData.find((emp) => emp.id === Number(id));

  if (!employee) {
    return res.status(status404.code).json("Employee not found");
  }

  res.status(status200.code).json([employee]);
};

const EmployeePost = async (req, res = response) => {
  const { employee } = req.body;

  const existingEmployee = employeesData.find(
    (emp) => emp.fullName === employee.fullName
  );

  if (existingEmployee) {
    return res.status(status400.code).json("Employee already exists");
  }

  employeesData.push(employee);

  res.status(status200.code).json(employeesData);
};

const EmployeePut = async (req, res = response) => {
  const { id } = req.params;
  const { employee } = req.body;

  const existingEmployee = employeesData.find((emp) => emp.id === Number(id));

  if (!existingEmployee) {
    return res.status(status404.code).json("Employee not found");
  }

  const updatedEmployee = { ...existingEmployee, ...employee };

  const tempEmployees = employeesData.filter((u) => u.id != id);

  const employees = [...tempEmployees, updatedEmployee];

  res.status(status200.code).json(employees);
};

const EmployeeDelete = async (req, res = response) => {
  const { id } = req.params;

  const tempEmployees = employeesData.filter((emp) => emp.id != id);

  employeesData = [...tempEmployees];

  res.status(status200.code).json("Employee deleted");
};

module.exports = {
  EmployeeGetAll,
  EmployeeGetById,
  EmployeePost,
  EmployeePut,
  EmployeeDelete,
};
