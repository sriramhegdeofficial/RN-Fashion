import React from "react";
import { View, KeyboardAvoidingView, Dimensions } from "react-native";
import { Routes, StackNavigationProps } from "../../components/Navigation";
import theme from "../../components/Theme";
import { Formik } from "formik";
import * as Yup from 'yup';

import {
  Button,
  Container,
  SocialLogin,
  RestyleText,
  TextInput,
  Checkbox,
} from "./../../components";

// const emailValidator = (email: string) => {
//   const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//   return re.test(email);
// };
// const passwordValidator = (passowrd: string) => {
//   if (passowrd.length < 6 || passowrd.length > 256) return false;
//   return true;
// };

const LoginSchema = Yup.object().shape({
  
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(6, "Too short").max(50, "Too long").required('Required')
});
const wSize = Dimensions.get("window");

const Login = ({ navigation }: StackNavigationProps<Routes, "Login">) => {
  const footer = (
    <>
      <View style={{ alignItems: "center" }}>
        <SocialLogin />
        <Button
          variant="transparent"
          onPress={function (): void {
            throw new Error("Function not implemented.");
          }}
        >
          <View style={{ flexDirection: "row", gap: 10 }}>
            <RestyleText style={{ color: theme.colors.white }}>
              Don't have an account?
            </RestyleText>
            <RestyleText variant="button">Sign up here</RestyleText>
          </View>
        </Button>
      </View>
    </>
  );
  return (
    <Container footer={footer} style={{ minHeight: wSize.height }}>
      <View
        style={{
          paddingHorizontal: theme.borderRadii.m * 3,
          paddingVertical: theme.borderRadii.m,
        }}
      >
        <RestyleText
          variant="title1"
          style={{ textAlign: "center", marginBottom: theme.borderRadii.m }}
        >
          Welcome back
        </RestyleText>
        <RestyleText
          variant="body"
          style={{ textAlign: "center", marginBottom: theme.borderRadii.m * 2 }}
        >
          Use your credentials below and login to your account
        </RestyleText>
        <Formik
     initialValues={{ email: '', password: '', remember: true }}
     validationSchema={LoginSchema}
     onSubmit={values => console.log(values)}
   >
 {({ handleChange, handleBlur, handleSubmit, setFieldValue, errors, touched, values }) => (
  <>
        <View
          style={{
            marginBottom: theme.borderRadii.m,
          }}
        >
          <TextInput
            icon="mail"
            placeholder="Enter your email"
            keyboardType="email-address"
            onChangeText={handleChange("email")}
            onBlur={handleBlur("email")}
            error={errors.email}
            touched={touched.email}
            // validator={emailValidator}
          />
        </View>
        <View>
          <TextInput
            icon="lock"
            placeholder="Enter your password"
            secureTextEntry={true}
            onChangeText={handleChange("password")}
            onBlur={handleBlur("password")}
            error={errors.password}
            touched={touched.password}
            // validator={passwordValidator}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: theme.borderRadii.m,
          }}
        >
          <Checkbox label="Remember me" checked={values.remember} onChange={() => setFieldValue("remember", !values.remember)} />
          <Button
            variant="transparent"
            onPress={function (): void {
              throw new Error("Function not implemented.");
            }}
          >
            <RestyleText color="secondary">Forgot password?</RestyleText>
          </Button>
        </View>
        <View style={{ alignItems: "center", marginTop: theme.borderRadii.m }}>
          <Button
            variant="primary"
            onPress={handleSubmit}
          >
            <RestyleText>Login to your account</RestyleText>
          </Button>
        </View>
        </>
         )}
        </Formik>
      </View>
    </Container>
  );
};

export default Login;
