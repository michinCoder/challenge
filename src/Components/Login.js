import { React, useState } from 'react';
import { Form } from "react-bootstrap";

import { useNavigate } from "react-router-dom";
import axios from 'axios';

const Login = () => {

  const navigate = useNavigate();

  const [phoneNum, setPhoneNum] = useState("");
  const [otpVal, setOtpVal] = useState("");
  const [err, seterrr] = useState("");

  const LoginHandling = (e) => {
    e.preventDefault();
    // console.log(phoneNum, otpVal);

    const params = new URLSearchParams();
    params.append("phone", phoneNum);
    params.append("otp", otpVal);
    params.append("dial_code", "+91");

    axios
      .post("https://staging.fastor.in/v1/pwa/user/login", params, {
        headers: {
          "content-type": "application/x-www-form-urlencoded",
        },
      })
      .then((res) => {
        console.log(res);
        navigate("/formdata");
      })
      .catch((err) => {
        console.log(err)
      });
  };

  // console.log(err)

  return (
    <div className='customerForm'>
      <h3 className='form-heading mb-3'>Login</h3>
      <Form onSubmit={LoginHandling}>
        <Form.Group className='mb-3'>
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            placeholder='Enter your registered phone number'
            value={phoneNum}
            onChange={(e) => setPhoneNum(e.target.value)}
          />
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            placeholder='Enter Password. *Your default password is 123456*'
            value={otpVal}
            onChange={(e) => setOtpVal(e.target.value)}
          />
        </Form.Group>
        <button type='submit' className='submit mt-3' >
          Login
				</button>
      </Form>
    </div>
  );
}

export default Login;