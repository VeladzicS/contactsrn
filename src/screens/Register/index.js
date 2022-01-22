import React, { useState } from "react";
import RegisterComponent from "../../components/SignUp";

const Register = () => {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});

  const onChange = ({ name, value }) => {
    setForm({ ...form, [name]: value });
    console.log(form.password);
    if (value !== "") {
      if (name === "password" || name === "repeatPassword") {
        if (value.length < 6) {
          setErrors((prev) => {
            return { ...prev, [name]: "This field needs min 6 chars!" };
          });
        } else {
          setErrors((prev) => {
            return { ...prev, [name]: null };
          });
        }
      } else {
        setErrors((prev) => {
          return { ...prev, [name]: null };
        });
      }
    } else {
      setErrors((prev) => {
        return { ...prev, [name]: "This field is required" };
      });
    }
  };

  const onSubmit = () => {
    //validations
    if (form.password !== form.repeatPassword) {
      setErrors((prev) => {
        return {
          ...prev,
          password: "Passwords do not match!",
          repeatPassword: "Passwords do not match!",
        };
      });
    }
    if (!form.userName) {
      setErrors((prev) => {
        return { ...prev, userName: "This field is required" };
      });
    }

    if (!form.firstName) {
      setErrors((prev) => {
        return { ...prev, firstName: "This field is required" };
      });
    }

    if (!form.lastName) {
      setErrors((prev) => {
        return { ...prev, lastName: "This field is required" };
      });
    }

    if (!form.email) {
      setErrors((prev) => {
        return { ...prev, email: "This field is required" };
      });
    }

    if (!form.password) {
      setErrors((prev) => {
        return { ...prev, password: "This field is required" };
      });
    }
    if (!form.repeatPassword) {
      setErrors((prev) => {
        return { ...prev, repeatPassword: "This field is required" };
      });
    }
  };
  return (
    <RegisterComponent
      onSubmit={onSubmit}
      onChange={onChange}
      errors={errors}
      form={form}
    />
  );
};

export default Register;
