import React, { FC, useState } from "react";
import {
  Wrapper,
  Container,
  FormContainer,
  Input,
  HelperText,
  Icon,
  LoginLink,
} from "./styles";
import { StyledButton } from "../../components/Navbar/styles";
import HidePasswordIcon from "../../images/icons/hide-password-icon.jpg";
import ShowPasswordIcon from "../../images/icons/show-password-icon.png";

import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema, registerSchema } from "./yupSchema";
import { useDispatch } from "react-redux";
import {
  loginUserAsync,
  registerUserAsync,
} from "../../features/user/userSlice";
import { useHistory } from "react-router";
import { IRegisterFormValues } from "../../interfaces/interfaces";

const Register: FC<{ login: boolean }> = ({ login }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [showPassword, setShowPassword] = useState(false);
  const [isLogin, setIsLogin] = useState(login);

  const {
    formState: { errors },
    handleSubmit,
    register,
    reset,
  } = useForm({
    resolver: yupResolver(isLogin ? loginSchema : registerSchema),
  });

  const isLoginHandler = () =>
    setIsLogin((isLogin) => {
      isLogin ? history.push("/register") : history.push("/login");
      return !isLogin;
    });

  const handleShowPassword = () => setShowPassword((prev) => !prev);

  const submitHandler: SubmitHandler<IRegisterFormValues> = (data) => {
    if (isLogin) {
      dispatch(loginUserAsync(data));
    } else {
      dispatch(registerUserAsync(data));
    }
    reset();
  };

  return (
    <Wrapper>
      <Container>
        <FormContainer onSubmit={handleSubmit(submitHandler)}>
          <h1>WellCome</h1>
          {isLogin || (
            <Input>
              <label htmlFor="username">Username *</label>
              <input {...register("username")} type="text" />
              {errors.username && (
                <HelperText>{errors.username.message}</HelperText>
              )}
            </Input>
          )}
          <Input>
            <label htmlFor="email">Email *</label>
            <input type="email" {...register("email")} />
            {errors.email && <HelperText>{errors.email.message}</HelperText>}
          </Input>
          <Input>
            <label htmlFor="password">Password *</label>
            <div className="password-input">
              <input
                type={showPassword ? "text" : "password"}
                {...register("password")}
              />
              <Icon
                onClick={handleShowPassword}
                src={showPassword ? HidePasswordIcon : ShowPasswordIcon}
                alt="showPassword"
              />
            </div>
            {errors.password && (
              <HelperText>{errors.password.message}</HelperText>
            )}
          </Input>
          {isLogin || (
            <Input>
              <label htmlFor="confirmPassword">Confirm Password *</label>
              <input type="password" {...register("confirmPassword")} />
              {errors.confirmPassword && (
                <HelperText>{errors.confirmPassword.message}</HelperText>
              )}
            </Input>
          )}
          <StyledButton type="submit">
            {isLogin ? "Login" : "Register"}
          </StyledButton>
          <p>
            {isLogin
              ? "Don't have and account ? "
              : "Allready have an account ? "}

            <LoginLink onClick={isLoginHandler}>
              {isLogin ? "Register Now" : "Login"}
            </LoginLink>
          </p>
        </FormContainer>
      </Container>
    </Wrapper>
  );
};

export default Register;
