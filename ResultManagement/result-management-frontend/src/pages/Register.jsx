import { useState } from "react";
import {useNavigate} from "react-router-dom";
import {useAuth} from "../store/auth";

const URL = "http://localhost:5001/teacher/register";

export const Register = () => {
    const [teacher, setTeacher] = useState({
        username : "",
        password : ""
      });
    
      const token = localStorage.getItem("accToken");

      const navigate = useNavigate();
      // const {storeTokenInLs} = useAuth();

      //handle input values
      const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
    
        setTeacher({
            ...teacher,
            [name] : value,
        })
      }

      const handleSubmit =async (e) => {
        e.preventDefault();
        const response =await fetch(URL, {
            method:"POST",
            headers:{
                'Content-Type':'application/json', 
                Authorization : `Bearer ${token}`
            },
            body: JSON.stringify(teacher)
        });

        if(response.ok){
          const data = await response.json();
            console.log("register",data);
            // storeTokenInLs(data.accToken);
            setTeacher({username : "",
            password : ""});
            navigate("/login");
        }else{
          alert("UNAUTHORIZED");
        }
        console.log(response);
    }

    return (
        <>
          <section>
            <main>
              <div className="section-register">
                <div className="container grid grid-two-cols">
                  <div className="register-image">
                    <img
                      src="/images/teacher.jpg"
                      alt="Register image"
                      width="500"
                      height="500"
                    />
                  </div>
                  <div className="register-form">
                    <h1 className="main-heading mb-3">Registration page</h1>
                    <br />
    
                    <form onSubmit={handleSubmit}>
                      <div>
                        <label htmlFor="username">Username: </label>
                        <input
                          type="text"
                          name="username"
                          placeholder="Enter the username"
                          id="username"
                          required
                          autoComplete="off"
                          value={teacher.username}
                          onChange={handleInput}
                        />
                      </div>
    
                      <div>
                        <label htmlFor="password">Password</label>
                        <input
                          type="password"
                          name="password"
                          placeholder="Enter the password"
                          id="password"
                          required
                          autoComplete="off"
                          value={teacher.password}
                          onChange={handleInput}
                        />
                      </div>
                      <br />
                      <button type="submit" className="btn btn-submit">
                        Register
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </main>
          </section>
        </>
      );
}
