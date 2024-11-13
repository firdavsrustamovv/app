import { useState } from "react";
import { Input } from "../ui/constants";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="text-center mt-5">
      <main className="form-signin w-25 m-auto">
        <form>
          <h1 className="h3 mb-3 fw-normal">Please Login</h1>
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
          <button className="btn btn-primary w-100 py-2" type="submit">
            Sign in
          </button>
        </form>
      </main>
    </div>
  );
}

export default Login;
