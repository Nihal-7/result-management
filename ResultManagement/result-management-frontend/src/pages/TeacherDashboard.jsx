import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import {useAuth} from "../store/auth";

export const TeacherDashboard = () => {
  //   const {user} = useAuth();

  const navigate = useNavigate();
  const handleUpdate = (roll_no) => {
    // Logic for updating student where passing rollno for updating records
    navigate("/updateResult", { state: { roll_no: roll_no }, replace: true });
    console.log(`Update student with ID: ${roll_no}`);
  };

  const handleAddStudent = () => {
    navigate("/create");
  };

  const handleAddTeacher = () => {
    navigate("/register");
  };

  const handleDelete = async (roll_no) => {
    // Logic for deleting student
    try {
      const response = await fetch(`http://localhost:5001/results/${roll_no}`, {
        method: "DELETE",
      });
      if (response.ok) {
        const res_data = await response.json();
        console.log("res from server ", res_data);
        navigate("/teacher");
        window.location.reload();
      }
      console.log(response);
    } catch (error) {
      console.log("DeleteStudent ", error);
    }
  };

  const [students, setStudents] = useState([]);
  useEffect(() => {
    //logic for fetching all records for backend
    const students1 = async () => {
      try {
        const students = await fetch(`http://localhost:5001/results/`, {
          method: "GET",
        });

        const student = await students.json();
        setStudents(student.AllResults);
        console.log("nihal", student);

        if (students.ok) {
          const res_data = await students.json();
        }
      } catch (error) {
        console.log(error);
      }
    };
    //calling fetch all records function
    students1();
  }, []);

  return (
    <>
      <section>
        <main>
          <div>
            <div className="container">
                <div className="col-md-6 text-right">
                  <button
                    className="btn btn-info btn-lg"
                    onClick={() => handleAddStudent()}
                  >
                    Add Record
                  </button>
                </div>
                <div className="col-md-6 text-left">
                  <button
                    className="btn btn-primary btn-lg"
                    onClick={() => handleAddTeacher()}
                  >
                    Register new teacher
                  </button>
              </div>
            </div>
            <div className="tablediv">
              <table className="table-studentdetails">
                <thead>
                  <tr>
                    <th scope="col">Roll Number</th>
                    <th scope="col">Name</th>
                    <th scope="col">English</th>
                    <th scope="col">CS</th>
                    <th scope="col">Physics</th>
                    <th scope="col">Chemistry</th>
                    <th scope="col">Maths</th>
                    <th scope="col">Status</th>
                    <th scope="col">DOB</th>
                  </tr>
                </thead>
                <tbody>
                  {students.map((element) => (
                    <tr key={element._id} className="head">
                      <td>{element.roll_no}</td>
                      <td>{element.name}</td>
                      <td>{element.english}</td>
                      <td>{element.cs}</td>
                      <td>{element.physics}</td>
                      <td>{element.chemistry}</td>
                      <td>{element.maths}</td>
                      <td>{element.status}</td>
                      <td>{element.dob}</td>
                      <td>
                        <button onClick={() => handleUpdate(element.roll_no)}>
                          <img
                            style={{ margin: "0px 20px" }}
                            src="https://img.icons8.com/material-outlined/30/000000/edit.png"
                            alt="Edit"
                          />
                        </button>
                        <button onClick={() => handleDelete(element.roll_no)}>
                          <img
                            style={{ margin: "0px 20px" }}
                            src="https://img.icons8.com/ios-glyphs/30/000000/filled-trash.png"
                            alt="Delete"
                          />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};
