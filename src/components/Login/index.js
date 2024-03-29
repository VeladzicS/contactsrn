import React from "react";
import { View, Text, Image } from "react-native";
import Container from "../common/Container";
import styles from "./styles";
import CustomButton from "../common/CustomButton";
import Input from "../common/Input";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { REGISTER } from "../../constants/routeNames";
import CustomMessage from "../common/Message";

const LoginComponent = ({ error, onChange, loading, onSubmit }) => {
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
        <Text style={styles.subtitle}>Please login here</Text>

        <View style={styles.form}>
          {error && !error?.error && (
            <CustomMessage
              danger
              onDismiss={() => {}}
              message="Invalid Credentials"
            />
          )}
          {error?.error && (
            <CustomMessage danger onDismiss={() => {}} message={error?.error} />
          )}

          <Input
            label="Username"
            iconPosition="right"
            placeholder="Enter Username"
            onChangeText={(value) => {
              onChange({ name: "userName", value });
            }}
          />

          <Input
            label="Password"
            placeholder="Enter Password"
            secureTextEntry={true}
            icon={<Text>Show</Text>}
            iconPosition="right"
            onChangeText={(value) => {
              onChange({ name: "password", value });
            }}
          />
          <CustomButton
            disabled={loading}
            onPress={onSubmit}
            title="Submit"
            loading={loading}
            primary
          />

          <View style={styles.createSection}>
            <Text style={styles.infoText}>Need a new account ?</Text>
            <TouchableOpacity
              onPress={() => {
                navigate(REGISTER);
              }}
            >
              <Text style={styles.infoBtn}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Container>
  );
};

export default LoginComponent;
