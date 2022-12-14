import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Alert,
  FormControl,
  Grid,
  Input,
  InputLabel,
  Paper,
  Typography,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';

import { login } from '../api/users';
import UserContext from '../context/user';

export default function Login() {
  const navigate = useNavigate();
  const context = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
    const { username, password } = event.target.elements;
    setLoading(true);
    try {
      const json = await login({
        username: username.value,
        password: password.value,
      });
      context.setUser(json.data);
      navigate(`/profile`);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {error && <Alert severity="error">{error}</Alert>}

      <Paper elevation={10} sx={{ margin: '100px auto', maxWidth: '330px' }}>
        <Grid container flexDirection="column" alignItems="center">
          <Grid item>
            <Grid container justifyContent="center" padding="20px">
              <Grid item>
                <Typography variant="h5">Factored</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="body">Log in to your account</Typography>
          </Grid>
          <Grid item>
            <Grid
              container
              component="form"
              onSubmit={handleSubmit}
              flexDirection="column"
              alignItems="center"
              padding="20px"
              spacing={2}
            >
              <Grid item>
                <FormControl>
                  <InputLabel htmlFor="username">Username</InputLabel>
                  <Input id="username" />
                </FormControl>
              </Grid>
              <Grid item>
                <FormControl>
                  <InputLabel htmlFor="password">Password</InputLabel>
                  <Input type="password" id="password" />
                </FormControl>
              </Grid>
              <Grid item>
                <LoadingButton
                  variant="contained"
                  type="submit"
                  loading={loading}
                >
                  Login
                </LoadingButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}
