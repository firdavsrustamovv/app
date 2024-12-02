import { useState } from "react";
import { Input } from "../ui/constants";
import { useSelector, useDispatch } from "react-redux";
import {
  registerinUserStart,
  registerUserSuccess,
  registerUserFailure,
} from "../slice/auth";
import AuthService from "../service/auth";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.auth);
  const registerHandler = async (e) => {
    e.preventDefault();
    dispatch(registerinUserStart());
    const user = { username: name, email, password };
    try {
      const response = await AuthService.userRegister(user);
      console.log(response);
      dispatch(registerUserSuccess());
    } catch (error) {
      dispatch(registerUserFailure());
    }
  };
  return (
    <div className="text-center mt-5">
      <main className="form-signin w-25 m-auto">
        <form>
          <h1 className="h3 mb-3 fw-normal">Please Register</h1>
          <Input
            label={"Username"}
            type={"text"}
            state={name}
            setState={setName}
            margin={"mt-5"}
          />
          <Input
            label={"Email address"}
            type={"email"}
            state={email}
            setState={setEmail}
            margin={"mt-2"}
          />
          <Input
            label={"Password"}
            type={"password"}
            state={password}
            setState={setPassword}
            margin={"mt-2"}
          />

          <div className="form-check text-start my-3"></div>
          <button
            className="btn btn-primary w-100 py-2"
            type="submit"
            disabled={isLoading}
            onClick={registerHandler}
          >
            {isLoading ? "Loading...." : "Register"}
          </button>
        </form>
      </main>
    </div>
  );
}

export default Register;
