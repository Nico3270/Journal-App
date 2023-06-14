import { Alert, Typography } from '@mui/material';
import { Button, Grid, Link, TextField } from '@mui/material';
import { Google } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks/useForm';
import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startCreatingUserWithEmailPassword } from '../../store/auth/thunks';

const formData = {
    email: "",
    password: "",
    displayName: ""
}

export const RegisterPage = () => {
    const [formSubmitted, setFormSubmitted] = useState(false);

    const dispatch = useDispatch();

    const { status, errorMessage } = useSelector(state => state.auth);

    const isCheckingAuthentication = useMemo(() => status === "checking", [status]);

    const formValidations = {
        email: [(value) => value.includes("@"), "El correo debe tener una @"],
        password: [(value) => value.length >= 6, "El password debe de tener mas de 6 carácteres"],
        displayName: [(value) => value.length >= 1, "El nombre es obligatorio"],
    }

    const { displayName, email, password, onInputChange, passwordValid, formState, displayNameValid, emailValid, formValidation, isFormValid } = useForm(formData, formValidations);
    console.log(formState);
    const onSubmit = (event) => {
        event.preventDefault();
        setFormSubmitted(true);
        if (!isFormValid) return;
        dispatch(startCreatingUserWithEmailPassword(formState));
    }


    return (

        <AuthLayout title="Register">
            {/* <h5>Form {isFormValid ? "valido" : "incorrecto"}</h5> */}
            <form onSubmit={onSubmit} className="animate__animated animate__fadeIn">
                <Grid container>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField label="Nombre Completo" type='text' placeholder='Ingresa tu nombre'
                            error={!!displayNameValid && formSubmitted} helperText={displayNameValid}
                            fullWidth name='displayName' value={displayName} onChange={(event) => onInputChange(event)} />
                    </Grid>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField label="Correo" type='email' placeholder='correo@google.com' fullWidth
                            error={!!emailValid && formSubmitted} helperText={emailValid}
                            name='email' value={email} onChange={(event) => onInputChange(event)} />
                    </Grid>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField label="Contraseña" type='password' placeholder='Contraseña' fullWidth
                            error={!!passwordValid && formSubmitted} helperText={passwordValid}
                            name='password' value={password} onChange={(event) => onInputChange(event)}
                        />
                    </Grid>
                    <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
                        <Grid item xs={12} sm={12} display={!!errorMessage ? "" : "none"}>
                            <Alert severity='error'>{errorMessage}</Alert>
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <Button disabled={isCheckingAuthentication} type="submit" variant='contained' fullWidth >Crear cuenta</Button>
                        </Grid>

                    </Grid>

                    <Grid container direction="row" justifyContent="end">
                        <Typography variant='h6' sx={{ mr: 2 }}>¿Ya tienes una cuenta?</Typography>
                        <Link component={RouterLink} className='btn btn-outline-info' to="/auth/login"> Ingresar</Link>
                    </Grid>
                </Grid>
            </form>
        </AuthLayout>
    )
}