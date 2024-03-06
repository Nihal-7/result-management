import { useState } from "react";
import {useNavigate} from "react-router-dom";
import {useAuth} from "../store/auth";

const URL = "http://localhost:5001/teacher/login";

export const Login = () => {
    // <Navbar/>
    const [teacher, setTeacher] = useState({
        username : "",
        password : ""
      });
    
      const navigate = useNavigate();
      const {storeTokenInLs} = useAuth();

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
            },
            body: JSON.stringify(teacher)
        });

        // console.log("login", response);

        if(response.ok){
            const data = await response.json();
            console.log("login",data);
            storeTokenInLs(data.accToken);
            alert("LOGIN SUCCESSFUL")
            setTeacher({username : "",
            password : ""});
            navigate("/teacher");
            window.location.reload();
        }else{
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
                      src="/images/teacher.jpg"
                      alt="Login image"
                      width="500"
                      height="500"
                    />
                  </div>
                  <div className="login-form">
                    <h1 className="main-heading mb-3">Teacher login</h1>
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
                        <label htmlFor="password">Password: </label>
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
}
