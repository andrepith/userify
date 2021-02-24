import { useEffect } from "react";
import { connect } from "react-redux";
import { getEmployeeAction } from "../store/actions";

import Card from "../components/Card";

const Userify = ({ getEmployeeAction, employeeList }) => {
  const fetchData = () => {
    try {
      getEmployeeAction();
    } catch (error) {
      console.error(error);
    }
  };

  const createUser = () => {};

  const handleEdit = () => {};

  const handleRemove = () => {};

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div className="table-header mt-4">
        <h1>User Management</h1>
        <div className="my-auto card btn btn-add" onClick={createUser}>
          Add new user
        </div>
      </div>
      <div className="list-items p-4">
        {!!employeeList.length &&
          employeeList.map((item, key) => (
            <Card
              {...item}
              handleEdit={handleEdit}
              handleRemove={handleRemove}
            />
          ))}
      </div>
    </div>
  );
};

const mapStateToProps = ({ employeeList }) => ({ employeeList });

export default connect(mapStateToProps, { getEmployeeAction })(Userify);
