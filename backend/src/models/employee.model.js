const { Schema, model } = require("mongoose");

const EmployeeSchema = Schema(
  {
    id: {
      type: String,
      required: [true, "Field is required"],
      unique: true,
    },
    fullName: {
      type: String,
      required: [true, "Field is required"],
    },
    birth: {
      type: Date,      
      required: [true, "Field is required"],
    }    
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

EmployeeSchema.methods.toJSON = function () {
  const { state, ...employee } = this.toObject();
  return employee;
};

module.exports = model("Employee", EmployeeSchema);
