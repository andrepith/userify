const Card = ({
  id,
  employee_name,
  employee_salary,
  employee_age,
  handleEdit,
  handleRemove,
}) => {
  return (
    <div className="card p-2">
      <div>ID: {id}</div>
      <div>Name: {employee_name}</div>
      <div>Salary: {employee_age}</div>
      <div>Salary: {employee_salary}</div>
      <div className="d-flex text-center justify-content-around mt-2">
        <div onClick={handleEdit} className="card px-4 btn">
          Edit
        </div>
        <div onClick={handleRemove} className="card px-4 btn">
          Delete
        </div>
      </div>
    </div>
  );
};

export default Card;
