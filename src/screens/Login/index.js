import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import Container from "../../components/common/Container";
import Input from "../../components/common/Input";

const Login = () => {
  const [value, onChangeText] = React.useState("");
  return (
    <Container>
      <Input
        label="Username"
        onChangeText={(text) => onChangeText(text)}
        value={value}
      />

      <Input
        label="Password"
        onChangeText={(text) => onChangeText(text)}
        value={value}
        icon={<Text>HIDE</Text>}
        iconPosition="left"
      />
    </Container>
  );
};

export default Login;
