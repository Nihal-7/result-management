import { useLocation, useNavigate } from "react-router-dom";

export const Result = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/");
  };
  return (
    <>
      <section>
        <main>
          <div className="section-login">
            <div className="container grid grid-two-cols">
              <div className="login-image">
                <img
                  src="/images/result.jpg"
                  alt="Result image"
                  width="500"
                  height="500"
                />
              </div>
              <div className="result-form">
                <h1 className="main-heading mb-3">Result</h1>
                <br />

                <div className="container d-flex justify-content-center align-items-center vh-100">
                  <div
                    className="card text-center p-3"
                    style={{ maxWidth: "400px" }}
                  >
                    <div className="card-body">
                      <h1 className="card-title">{state.name}</h1>
                      <div className="mb-3">
                        <strong>Roll number :</strong> {state.roll_no}
                      </div>
                      <div className="mb-3">
                        <strong>English :</strong> {state.english}
                      </div>
                      <div className="mb-3">
                        <strong>CS :</strong> {state.cs}
                      </div>
                      <div className="mb-3">
                        <strong>Physics :</strong> {state.physics}
                      </div>
                      <div className="mb-3">
                        <strong>Chemistry :</strong> {state.chemistry}
                      </div>
                      <div className="mb-3">
                        <strong>Maths :</strong> {state.maths}
                      </div>
                      <div className="mb-3">
                        <strong>Status :</strong> {state.status}
                      </div>
                      <div className="mb-3">
                        <strong>Date of birth :</strong> {state.dob}
                      </div>
                    </div>
                  </div>
                  <br />
                  <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={handleNavigate}
                  >
                    Back
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};
