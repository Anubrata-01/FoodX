import React from "react";
import styled from "styled-components";
import { GlobalStyle } from "../Styles/globalStyles";
import { useFormik } from "formik";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Utilities/Firebase";
import { Link, useNavigate } from "react-router-dom";
import { signInSchema } from "../Schema/signInSchema";
import { useDispatch } from "react-redux";
import { setisLogged } from "../../Redux Store/restaurantSlice";
import { useToast } from "@chakra-ui/react";
// import Toast from "../../Utilities/Toast";

const initialValues = {
  email: "",
  password: "",
};
// const toast=useToast()

const Signin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toast = useToast();
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: signInSchema,
      onSubmit: async (values, action) => {
        try {
          const userCredential = await signInWithEmailAndPassword(
            auth,
            values.email,
            values.password
          );
          const user = userCredential.user;
          dispatch(setisLogged(true));
          toast({
            title: "Login",
            description: "You are Logged into your ac..",
            status: "success",
            duration: 9000,
            isClosable: true,
          });
          navigate("/");
          action.resetForm();
        } catch (error) {
          console.error("Sign in failed:", error.message);
        }
      },
    });

  return (
    <>
      <GlobalStyle />
      <Wrapper className=" bg-slate-50">
        <div className="container">
          <div className="modal">
            <div className="modal-container">
              <div className="modal-left">
                <h1 className=" text-red-700">Welcome!</h1>
                <p className="modal-desc">Sign in with email and password</p>
                <form onSubmit={handleSubmit}>
                  <div className="input-block">
                    <label htmlFor="email" className="input-label">
                      Email
                    </label>
                    <input
                      type="email"
                      autoComplete="off"
                      name="email"
                      id="email"
                      placeholder="Email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.email && touched.email && (
                      <p className="form-error">{errors.email}</p>
                    )}
                  </div>
                  <div className="input-block">
                    <label htmlFor="password" className="input-label">
                      Password
                    </label>
                    <input
                      type="password"
                      autoComplete="off"
                      name="password"
                      id="password"
                      placeholder="Password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.password && touched.password && (
                      <p className="form-error">{errors.password}</p>
                    )}
                  </div>
                  <div className="modal-buttons">
                    <button className="input-button" type="submit">
                      Sign in
                    </button>
                  </div>
                </form>
                <p className="sign-up">
                  Don't have an account?{" "}
                  <Link to={"/login"}>Create a new account</Link>
                </p>
              </div>
              <div className="modal-right"></div>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
 
  .container {
    position: fixed;
    top: 0;
    left: 10rem;
    right: 0;
    bottom: 0;
    background-color: #efedee;
    /* background-image: linear-gradient(135deg, rgba(234, 234, 234,0.06) 0%, rgba(234, 234, 234,0.06) 50%,rgba(169, 169, 169,0.06) 50%, rgba(169, 169, 169,0.06) 100%),linear-gradient(90deg, rgb(20,20,20),rgb(20,20,20)); background-size: 72px 72px; */
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .modal {
    width: 100%;
    margin-top: 1rem;
    /* height: 60px; */
    background: rgba(51, 51, 51, 0.5);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: 0.4s;
  }
  .modal-container {
    display: flex;
    max-width: 30vw;
    width: 100%;
    border-radius: 10px;
    overflow: hidden;
    position: absolute;

    transition-duration: 0.3s;
    background: #fff;
  }
  .modal-title {
    margin: 0;
    font-weight: 400;
    color: #55311c;
  }
  .form-error {
    font-size: 1.4rem;
    color: #b22b27;
  }
  .modal-desc {
    margin: 6px 0 30px 0;
  }
  .modal-left {
    padding: 6px 30px 20px;
    background: #fff;
    flex: 1.5;
    transition-duration: 0.5s;
    opacity: 1;
  }

  .modal.is-open .modal-left {
    transform: translateY(0);
    opacity: 1;
    transition-delay: 0.1s;
  }
  .modal-buttons {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .modal-buttons a {
    color: rgba(51, 51, 51, 0.6);
    font-size: 14px;
  }
  .gmail:hover {
    color: rgba(114, 69, 69, 0.6);
  }
  .sign-up {
    margin: 60px 0 0;
    font-size: 14px;
    text-align: center;
  }
  .sign-up a {
    color: #8c7569;
  }
  .input-button {
    padding: 1rem 3rem;
    outline: none;
    text-transform: uppercase;
    border: 0;
    color: #fff;
    border-radius: 4px;
    background: #8c7569;
    transition: 0.3s;
    cursor: pointer;
    font-family: "Nunito", sans-serif;
  }
  .input-button:hover {
    background: #55311c;
  }
  .input-label {
    font-size: 11px;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 0.7px;
    color: #8c7569;
    transition: 0.3s;
  }

  .input-block {
    display: flex;
    flex-direction: column;
    padding: 10px 10px 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
    margin-bottom: 20px;
    transition: 0.3s;
  }
  .input-block input {
    outline: 0;
    border: 0;
    padding: 4px 0 0;
    font-size: 14px;
  }

  .input-block input::-moz-placeholder {
    color: #ccc;
    opacity: 1;
  }
  .input-block input:-ms-input-placeholder {
    color: #ccc;
    opacity: 1;
  }
  .input-block input::placeholder {
    color: #ccc;
    opacity: 1;
  }
  .input-block:focus-within {
    border-color: #8c7569;
  }
  .input-block:focus-within .input-label {
    color: rgba(140, 117, 105, 0.8);
  }

  @media (max-width: 750px) {
    .modal-container {
      max-width: 90vw;
    }

    .modal-right {
      display: none;
    }
  }
`;

export default Signin;
