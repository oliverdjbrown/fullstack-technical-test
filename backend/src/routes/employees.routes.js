const { Router } = require("express");
const { check } = require("express-validator");
const {  
  EmployeeGetAll,
  EmployeeGetById,
  EmployeePost,
  EmployeePut,
  EmployeeDelete
} = require("../controllers");

const { validateFields } = require("../middlewares");

const router = Router();

router.get("/", EmployeeGetAll);

router.get(
  "/:id",
  EmployeeGetById
);

router.post(
  "/",
  [    
    check("id", "id is required").not().isEmpty(),
    check("fullName", "fullName is required").not().isEmpty(),
    check("birth", "birth is required").not().isEmpty(),    
    validateFields,
  ],
  EmployeePost
);

router.put(
  "/:id",
  [ 
    check("fullName", "fullName is required").not().isEmpty(),
    check("birth", "birth is required").not().isEmpty(),    
    validateFields,
  ],
  EmployeePut
);

router.delete("/:id", [
    validateFields
], EmployeeDelete);

module.exports = router;