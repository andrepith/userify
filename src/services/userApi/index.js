import axios from "axios";

const api = "http://dummy.restapiexample.com/api/v1/";

export const employeeApi = {
  getList: () => axios.get(api + "employees"),
  createEmployee: (data) => axios.post(api + "create", data),
  updateEmployee: (data, id) => axios.patch(api + "update/" + id, data),
  deleteEmployee: (id) => axios.delete(api + "delete/" + id),
};
