import { EMPLOYEE_LIST } from "../../types";
import { employeeApi } from "../../../services/userApi";

export const getEmployeeAction = () => async (dispatch) => {
  const payload = await employeeApi.getList();

  dispatch({
    type: EMPLOYEE_LIST,
    payload,
  });
};
