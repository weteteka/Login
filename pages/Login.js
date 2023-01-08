import React from "react";
import { useState } from "react";
import Button from "./Components/Button";
import Form from "./Components/Form";
import Input from "./Components/Input";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleClick = () => {
    console.log(email + " -- " + password);
  };
  return (
    <>
      <div className="fundo text-light vh-100 d-flex align-items-center justify-content-center">
        <Form
          uncontrolled="true"
          className="form rounded-3 bg-transparent border shadow-lg border-1 px-3 py-3"
        >
          <h1 className="text-light text-center fw-bold">Login</h1>
          <Input
            placeholder="seu E-mail"
            type="email"
            className="form-control my-3 text-dark"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder="sua Senha"
            type="password"
            className="form-control my-3 text-dark"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            type="button"
            value="ENTRAR"
            className="btn btn-primary col-12"
            onClick={handleClick}
          />
        </Form>
      </div>
    </>
  );
};
export default Login;
