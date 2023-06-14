import { Typography } from '@mui/material';
import { Button, Grid, Link, TextField } from '@mui/material';
import { Google } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks/useForm';
import { useDispatch, useSelector } from 'react-redux';
import { checkingCredentials } from '../../store/auth/authSlice';
import { checkingAuthentication, startGoogleSignIn } from '../../store/auth/thunks';
import { useMemo } from 'react';

export const LoginPage = () => {
    const dispatch = useDispatch();
    const {status} = useSelector(state => state.auth);
    console.log(status);

    const {email, password, onInputChange} = useForm({
        email: "cristian@gmail.com",
        password: "123456",
    });

    const isAuthenticating = useMemo(() => status === "checking", [status])

    const onSubmit = (event) => {
        event.preventDefault();
        console.log({email, password});
        dispatch(checkingAuthentication());
    };

    const onGoogleSignIn = () => {
        console.log("On Google SignIn");
        dispatch(startGoogleSignIn());
    }


    return (

        <AuthLayout title="Login">
            <form onSubmit={onSubmit}>
                <Grid container>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField label="Correo" type='email' name='email' onChange={onInputChange} value={email} placeholder='correo@google.com' fullWidth />
                    </Grid>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField label="Contraseña" type='password' name='password' onChange={onInputChange} value={password} placeholder='Contraseña' fullWidth />
                    </Grid>
                    <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>

                        <Grid item xs={12} sm={6}>
                            <Button disabled={isAuthenticating}  type="submit" variant='contained' fullWidth >Login</Button>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Button disabled={isAuthenticating}  onClick={onGoogleSignIn} variant='contained' fullWidth ><Google /> <Typography sx={{ ml: 1 }}>Google</Typography></Button>
                        </Grid>
                    </Grid>

                    <Grid container direction="row" justifyContent="end">
                        <Link component={RouterLink} className='btn btn-outline-info' to="/auth/register"> Crear una cuenta</Link>
                    </Grid>
                </Grid>
            </form>
        </AuthLayout>


    )
}