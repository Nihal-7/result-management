// import { Navbar } from "../components/navbar"

import { useState } from "react";
import {useNavigate, useLocation} from "react-router-dom";
// const URL = `http://localhost:5001/results/${student.roll_no}`;

export const Home = () => {
  // <Navbar/>

  const {state} = useLocation();
  const navigate = useNavigate();

  const [student, setStudent] = useState({
    roll_no : "",
    dob : ""
  });

  //handle input values
  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setStudent({
        ...student,
        [name] : value,
    })
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    const response =await fetch( `http://localhost:5001/results/${student.roll_no}`, {
      method:"POST",
      headers:{
          'Content-Type':'application/json', 
      },
      body: JSON.stringify(student),
    });

    console.log("login", response);

    if(response.ok){
        const data1 = await response.json();
        const data = data1.resultDetails;
        console.log("Nihal", data);
        alert("LOGIN SUCCESSFUL")
        setStudent({roll_no : "",
        dob : ""});
        navigate("/result",{state:{roll_no : data.roll_no , name: data.name , dob : data.dob , english : data.english , cs : data.cs, physics : data.physics, chemistry : data.chemistry, maths : data.maths, status : data.status}, replace : true});
    }else{
      console.log(response);
        alert("INVALID CREDENTIALS");
    }
  }
  


  return (
    <>
      <section>
        <main>
          <div className="section-login">
            <div className="container grid grid-two-cols">
              <div className="login-image">
                <img
                  src="/images/login.png"
                  alt="Login image"
                  width="500"
                  height="500"
                />
              </div>
              <div className="login-form">
                <h1 className="main-heading mb-3">Student login</h1>
                <br />

                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="roll_no">Roll number: </label>
                    <input
                      type="number"
                      name="roll_no"
                      placeholder="Enter the rollnumber"
                      id="roll_no"
                      required
                      autoComplete="off"
                      value={student.roll_no}
                      onChange={handleInput}
                    />
                  </div>

                  <div>
                    <label htmlFor="dob">Date of birth: </label>
                    <input
                      type="password"
                      name="dob"
                      placeholder="Enter the date of birth (ddmmyyyy)"
                      id="dob"
                      required
                      autoComplete="off"
                      value={student.dob}
                      onChange={handleInput}
                    />
                  </div>
                  <br />
                  <button type="submit" className="btn btn-submit">
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};
