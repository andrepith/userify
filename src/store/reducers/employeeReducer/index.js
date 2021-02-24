import { EMPLOYEE_LIST } from "../../types";

export const employeeList = (state = [], { type, payload }) => {
  switch (type) {
    case EMPLOYEE_LIST:
      return payload.data;
    default:
      return state;
  }
};
