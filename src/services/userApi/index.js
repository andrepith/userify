import axios from "axios";

// const api = "http://dummy.restapiexample.com/api/v1/";
const api = "http://localhost:5000/users/";

export const employeeApi = {
  // getList: () => axios.get(api + "employees"),
  // createEmployee: (data) => axios.post(api + "create", data),
  // updateEmployee: (data, id) => axios.patch(api + "update/" + id, data),
  // deleteEmployee: (id) => axios.delete(api + "delete/" + id),
  getList: () => axios.get(api),
  createEmployee: (data) => axios.post(api, data),
  updateEmployee: (data, id) => axios.patch(api + id, data),
  deleteEmployee: (id) => axios.delete(api + id),
};
