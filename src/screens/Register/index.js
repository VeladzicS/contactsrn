import { useNavigation } from "@react-navigation/native";
import { useFocusEffect } from "@react-navigation/native";
import React, { useContext, useEffect, useState } from "react";
import RegisterComponent from "../../components/SignUp";
import { LOGIN } from "../../constants/routeNames";
import register, { clearAuthState } from "../../context/actions/auth/register";
import { GlobalContext } from "../../context/Provider";
import axios from "../../helpers/axiosInterceptor";
const Register = () => {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const { navigate } = useNavigation();
  const {
    authDispatch,
    authState: { error, loading, data },
  } = useContext(GlobalContext);

  useEffect(() => {
    console.log(data);
    data ? navigate(LOGIN) : "";
  }, [data]);

  useFocusEffect(
    React.useCallback(() => {
      return () => {
        if (data || error) {
          clearAuthState()(authDispatch);
        }
      };
    }, [data, error])
  );

  const onChange = ({ name, value }) => {
    setForm({ ...form, [name]: value });

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

    if (
      Object.values(form).length === 6 &&
      Object.values(form).every((item) => item.trim().length > 0) &&
      Object.values(errors).every((item) => !item)
    ) {
      register(form)(authDispatch);
    }
  };
  return (
    <RegisterComponent
      onSubmit={onSubmit}
      onChange={onChange}
      errors={errors}
      form={form}
      error={error}
      loading={loading}
    />
  );
};

export default Register;
