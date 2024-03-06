import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import {useAuth} from "../store/auth";

// const URL = "http://localhost:5001/results/";

export const UpdateResult = () => {

    const {state} = useLocation();

    const [result, setResult] = useState({
        roll_no : state.roll_no,
        name : "",
        english : "",
        cs : "",
        physics : "",
        chemistry : "",
        maths : "",
        status : "",
        dob : ""
      });

      const navigate = useNavigate();
    //   const {storeTokenInLs} = useAuth();

      //handle input values
      const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
    
        setResult({
            ...result,
            [name] : value,
        })
      }

      const handleSubmit =async (e) => {
        e.preventDefault();
        const response =await fetch(`http://localhost:5001/results/${state.roll_no}`, {
            method:"PUT",
            headers:{
                'Content-Type':'application/json', 
            },
            body: JSON.stringify(result)
        });

        console.log("update result", response);

        if(response.ok){
            const data = await response.json();
            console.log(data);
            alert("UPDATED SUCCESSFULLY")
            setResult({
                roll_no : "",
                name : "",
                english : "",
                cs : "",
                physics : "",
                chemistry : "",
                maths : "",
                status : "",
                dob : ""
              });
            navigate("/teacher");
        }else{
            alert("INVALID DATA");
        }
      }

    return (
        <>
          <section>
            <main>
              <div className="section-login">
                  <div className="login-form">
                    <h1 className="main-heading mb-3">Update result</h1>
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
                          value={result.roll_no}
                          onChange={handleInput}
                        />
                      </div>
                      <div>
                        <label htmlFor="name">Name: </label>
                        <input
                          type="text"
                          name="name"
                          placeholder="Enter the name"
                          id="name"
                          required
                          autoComplete="off"
                          value={result.name}
                          onChange={handleInput}
                        />
                      </div>
    
                      <div>
                        <label htmlFor="english">English: </label>
                        <input
                          type="number"
                          name="english"
                          placeholder="Enter the english marks"
                          id="english"
                          required
                          autoComplete="off"
                          value={result.english}
                          onChange={handleInput}
                        />
                      </div>
                      <div>
                        <label htmlFor="cs">CS: </label>
                        <input
                          type="number"
                          name="cs"
                          placeholder="Enter the CS marks"
                          id="cs"
                          required
                          autoComplete="off"
                          value={result.cs}
                          onChange={handleInput}
                        />
                      </div>

                      <div>
                        <label htmlFor="physics">Physics: </label>
                        <input
                          type="number"
                          name="physics"
                          placeholder="Enter the physics marks"
                          id="physics"
                          required
                          autoComplete="off"
                          value={result.physics}
                          onChange={handleInput}
                        />
                      </div>

                      <div>
                        <label htmlFor="chemistry">Chemistry: </label>
                        <input
                          type="number"
                          name="chemistry"
                          placeholder="Enter the chemistry marks"
                          id="chemistry"
                          required
                          autoComplete="off"
                          value={result.chemistry}
                          onChange={handleInput}
                        />
                      </div>

                      <div>
                        <label htmlFor="maths">Maths: </label>
                        <input
                          type="number"
                          name="maths"
                          placeholder="Enter the maths marks"
                          id="maths"
                          required
                          autoComplete="off"
                          value={result.maths}
                          onChange={handleInput}
                        />
                      </div>

                      <div>
                        <label htmlFor="status">Status: </label>
                        <input
                          type="text"
                          name="status"
                          placeholder="Enter the status (PASS/FAIL)"
                          id="status"
                          required
                          autoComplete="off"
                          value={result.status}
                          onChange={handleInput}
                        />
                      </div>

                      <div>
                        <label htmlFor="dob">Date of birth: </label>
                        <input
                          type="text"
                          name="dob"
                          placeholder="Enter the date of birth"
                          id="dob"
                          required
                          autoComplete="off"
                          value={result.dob}
                          onChange={handleInput}
                        />
                      </div>

                      <br />
                      <button type="submit" className="btn btn-submit">
                        Add
                      </button>
                    </form>
                  </div>
              </div>
            </main>
          </section>
        </>
      );
}
