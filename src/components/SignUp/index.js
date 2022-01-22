import React from "react";
import { View, Text, Image } from "react-native";
import Container from "../common/Container";
import styles from "./styles";
import CustomButton from "../common/CustomButton";
import Input from "../common/Input";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { LOGIN } from "../../constants/routeNames";

const RegisterComponent = ({ onSubmit, onChange, errors, form }) => {
  const { navigate } = useNavigation();
  const [value, onChangeText] = React.useState("");
  return (
    <Container>
      <Image
        height={70}
        width={70}
        source={require("../../assets/images/logo.png")}
        style={styles.logoImage}
      />

      <View style={styles.form}>
        <Text style={styles.title}>Welcome to RNContacts</Text>
        <Text style={styles.subtitle}>Please register here</Text>

        <View style={styles.form}>
          <Input
            label="Username"
            iconPosition="right"
            placeholder="Enter Username"
            error={errors.userName}
            onChangeText={(value) => {
              onChange({ name: "userName", value });
            }}
          />

          <Input
            label="First Name"
            iconPosition="right"
            placeholder="Enter First name"
            onChangeText={(value) => {
              onChange({ name: "firstName", value });
            }}
            error={errors.firstName}
          />

          <Input
            label="Last Name"
            iconPosition="right"
            placeholder="Enter Last Name"
            error={errors.lastName}
            onChangeText={(value) => {
              onChange({ name: "lastName", value });
            }}
          />

          <Input
            label="Email"
            iconPosition="right"
            placeholder="Enter Email"
            error={errors.email}
            onChangeText={(value) => {
              onChange({ name: "email", value });
            }}
          />

          <Input
            label="Password"
            placeholder="Enter Password"
            secureTextEntry={true}
            icon={<Text>Show</Text>}
            iconPosition="right"
            error={errors.password}
            onChangeText={(value) => {
              onChange({ name: "password", value });
            }}
          />

          <Input
            label="Repeat Password"
            placeholder="Enter Password"
            secureTextEntry={true}
            icon={<Text>Show</Text>}
            iconPosition="right"
            error={errors.repeatPassword}
            onChangeText={(value) => {
              onChange({ name: "repeatPassword", value });
            }}
          />
          <CustomButton title="Submit" primary onPress={onSubmit} />

          <View style={styles.createSection}>
            <Text style={styles.infoText}>Already have account ?</Text>
            <TouchableOpacity
              onPress={() => {
                navigate(LOGIN);
              }}
            >
              <Text style={styles.infoBtn}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Container>
  );
};

export default RegisterComponent;
