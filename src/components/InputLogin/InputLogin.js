import React from 'react';
import { Container, InputField } from './InputLoginStyle';
import { Grid } from '@material-ui/core';

const InputLogin = ({
  inputEmailValue,
  onChangeEmailValue,
  inputPasswordValue,
  idEmail,
  emailLabel,
  idPassword,
  passwordLabel,
  onChangePassword,
}) => (
    <Grid item xs={12} sm={6}>
      <form noValidate autoComplete="off">
        <InputField 
          id={idEmail}
          label={emailLabel}
          value={inputEmailValue}
          onChange={onChangeEmailValue}
          type="email"
          autoComplete="email"
          margin="normal"
          // variant="filled"
        />
        <InputField 
          id={idPassword}
          label={passwordLabel}
          value={inputPasswordValue}
          onChange={onChangePassword}
          type="password"
          autoComplete="current-password"
          margin="normal"
          // variant="filled"
        />

      </form>
    </Grid>
);

export default InputLogin;
