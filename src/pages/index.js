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

  const handleEdit = () => {};

  const handleRemove = () => {};

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="table-header">
        <h1>User Management</h1>
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
    </>
  );
};

const mapStateToProps = ({ employeeList }) => ({ employeeList });

export default connect(mapStateToProps, { getEmployeeAction })(Userify);
