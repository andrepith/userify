import { useState, useEffect } from "react";
import { connect } from "react-redux";
import Modal from "react-modal";
import { getEmployeeAction } from "../store/actions";
import { employeeApi } from "../services/userApi";
import { customStyles } from "./properties";

import Card from "../components/Card";
import UserForm from "../components/Form";

const Userify = ({ getEmployeeAction, employeeList }) => {
  const [showModal, setShowModal] = useState(false);
  const [editData, setEditData] = useState({});
  const closeModal = () => setShowModal(false);
  const fetchData = () => {
    try {
      getEmployeeAction();
    } catch (error) {
      console.error(error);
    }
  };

  const createUser = () => {
    setEditData({});
    setShowModal(true);
  };

  const handleNewUser = (fields) => {
    employeeApi.createEmployee(fields).then(() => fetchData());
    closeModal();
  };

  const handleEditUser = () => {
    closeModal();
  };

  const handleEdit = (data) => () => {
    setShowModal(true);
    setEditData(data);
  };

  const handleRemove = (data) => () => {
    employeeApi.deleteEmployee(data.id).then(() => fetchData());
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
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
                key={key}
              />
            ))}
        </div>
      </div>
      <Modal
        isOpen={showModal}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <UserForm
          handleNewUser={handleNewUser}
          handleEditUser={handleEditUser}
          userData={!!employeeList.length ? employeeList : []}
          editData={editData}
        />
      </Modal>
    </>
  );
};

Modal.setAppElement("#root");

const mapStateToProps = ({ employeeList }) => ({ employeeList });

export default connect(mapStateToProps, { getEmployeeAction })(Userify);
