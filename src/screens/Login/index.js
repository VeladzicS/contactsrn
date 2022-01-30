import { useNavigation } from "@react-navigation/native";
import React, { useContext, useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import LoginComponent from "../../components/Login";
import loginUser from "../../context/actions/auth/loginUser";
import { GlobalContext } from "../../context/Provider";

const Login = () => {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});

  const {
    authDispatch,
    authState: { error, loading, data },
  } = useContext(GlobalContext);

  const onChange = ({ name, value }) => {
    setForm({ ...form, [name]: value });
  };

  const onSubmit = () => {
    if (form.userName && form.password) {
      loginUser(form)(authDispatch);
    }
  };
  return (
    <LoginComponent
      onSubmit={onSubmit}
      onChange={onChange}
      errors={errors}
      form={form}
      error={error}
      loading={loading}
    />
  );
};

export default Login;
