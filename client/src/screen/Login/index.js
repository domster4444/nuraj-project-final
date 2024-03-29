import React, { useEffect } from "react";

import { LoginContainer, FormBox } from "./Login.style";
import Text from "components/Text";
import Lock from "images/lock.png";

import Input from "components/Input";
import { PrimaryButton } from "components/Button/Button";

import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { Navigate, useNavigate } from "react-router-dom";

import Alert from "components/Alert";

import { useLoginUserMutation } from "../../redux/api/auth/authenticationApi";

import { DataStorageMiddleware } from "services/AuthStorageMiddleware";
import isAuth from "services/isAuth";

const Index = () => {
  const navigate = useNavigate();
  //! RTK Generated Register Hook , "registerUser" is name of endpoint in userAuthApi.js
  const [loginUser, { isLoading }] = useLoginUserMutation();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string().min(6).required("Required"),
    }),
    onSubmit: async (values) => {
      const dataToSend = {
        email: values.email,
        password: values.password,
      };

      //! User Register Using RTK Query Method
      const res = await loginUser(dataToSend);
      console.log("response from axios");
      console.log(res);

      if (res.error) {
        toast.error(res.error.data.message);
      }

      if (res.data) {
        toast.success(res.data.message);
        DataStorageMiddleware(res, () => {
          isAuth() && isAuth().role === "customer" ? navigate("/home") : isAuth() && isAuth().role === "admin" ? navigate("/admin-private-page") : navigate("/admin-private-page");
        });
      }
    },
  });

  if (isLoading) {
    return <div>Loading, Fetching data from server</div>;
  }

  return (
    <main>
      <LoginContainer>
        <div>hi</div>
        <FormBox onSubmit={formik.handleSubmit}>
          <img src={Lock} style={{ height: "10rem", margin: "0 auto" }} alt='' />
          {/*//! redirect if user tries to go to /login path forcefully after loggedin */}
          {isAuth() ? <Navigate to='/' /> : null}
          <Text>Login</Text>
          <label htmlFor='email'>
            <Input {...formik.getFieldProps("email")} elementSize='small' placeholder='Enter your email' name='email' type='email' />

            {formik.errors.email && formik.touched.email ? <Alert type='error'>{formik.errors.email}</Alert> : null}
          </label>
          <label htmlFor='password'>
            <Input {...formik.getFieldProps("password")} elementSize='small' placeholder='Enter your password' name='password' type='password' />
            {formik.errors.password && formik.touched.password ? <Alert type='error'>{formik.errors.password}</Alert> : null}
          </label>
          <PrimaryButton> Submit</PrimaryButton>
          <br />
          <br />
          <Link to='/send-forgot-pass-email'>Forgot Password ?</Link>
        </FormBox>
      </LoginContainer>
    </main>
  );
};

export default Index;
