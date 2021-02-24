import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const UserForm = ({ handleNewUser, handleEditUser, editData, userData }) => {
  const isEdit = !!Object.keys(editData).length;
  return (
    <Formik
      initialValues={{
        id: isEdit
          ? userData.filter((item) => item.id === editData.id)[0].id
          : userData.length + 1,
        employee_name: isEdit ? editData.employee_name : "",
        employee_salary: isEdit ? editData.employee_salary : "",
        employee_age: isEdit ? editData.employee_age : "",
      }}
      validationSchema={Yup.object().shape({
        employee_name: Yup.string().required("Name is required"),
        employee_salary: Yup.string()
          .matches(/^\d+$/, "Salary must be number")
          .required("Salary is required"),
        employee_age: Yup.string()
          .matches(/^\d+$/, "Age must be number")
          .required("Age is required"),
      })}
      onSubmit={(fields) => {
        const data = {
          ...fields,
          employee_salary: Number(fields.employee_salary),
          employee_age: Number(fields.employee_age),
        };
        if (isEdit) {
          return handleEditUser(data);
        } else {
          return handleNewUser(data);
        }
      }}
      render={({ errors, status, touched }) => (
        <Form>
          <div className="form-group">
            <label htmlFor="employee_name">Name</label>
            <Field
              name="employee_name"
              type="text"
              className={
                "form-control" +
                (errors.employee_name && touched.employee_name
                  ? " is-invalid"
                  : "")
              }
            />
            <ErrorMessage
              name="employee_name"
              component="div"
              className="invalid-feedback"
            />
          </div>

          <div className="form-group">
            <label htmlFor="employee_salary">Salary</label>
            <Field
              name="employee_salary"
              type="text"
              className={
                "form-control" +
                (errors.employee_salary && touched.employee_salary
                  ? " is-invalid"
                  : "")
              }
            />
            <ErrorMessage
              name="employee_salary"
              component="div"
              className="invalid-feedback"
            />
          </div>

          <div className="form-group">
            <label htmlFor="employee_age">Age</label>
            <Field
              name="employee_age"
              type="text"
              className={
                "form-control" +
                (errors.employee_age && touched.employee_age
                  ? " is-invalid"
                  : "")
              }
            />
            <ErrorMessage
              name="employee_age"
              component="div"
              className="invalid-feedback"
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary mr-2">
              {isEdit ? "Edit User" : "Add New User"}
            </button>
          </div>
        </Form>
      )}
    />
  );
};

export default UserForm;
