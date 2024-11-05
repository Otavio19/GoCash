import './style.css'
import React, { useState } from 'react';

import { Grid2 } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
const Login = ({ setLogin }) => {

    const [user, setUser] = useState()

    const getText = () => {
        const { name, value } = event.target;

        setUser({ ...user, [name]: value });
    }

    const login = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('http://localhost:3333/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
            });

            if (!response.ok) {
                throw new Error('Erro na requisição');
            }

            const data = await response.json();
            console.log('Resposta do servidor:', data);
            localStorage.setItem("token", data.token);
            localStorage.setItem("user", JSON.stringify(data.userFound[0]));
            setLogin(true)
        } catch (error) {
            console.error('Erro:', error);
        }
    }

    return (
        <>
            <Grid2 container className="contentLogin" justifyContent={'center'} alignItems={'center'}>
                <Grid2 item size={{ md: 4, xs: 10, sm: 8 }}>
                    <Grid2 item className="logoLogin">
                        <h1><span>Go</span>Cash</h1>
                    </Grid2>

                    <Grid2 container spacing={{ mobile: 1, tablet: 2, laptop: 3 }} className="containerLogin" >
                        <Grid2 item container spacing={2}>
                            <Grid2 item size={12}>
                                <TextField
                                    label="Login"
                                    variant="outlined"
                                    color=""
                                    name='email'
                                    id='txt_login'
                                    fullWidth
                                    onChange={getText}
                                    sx={{
                                        '& .MuiOutlinedInput-root': {
                                            '&.Mui-focused fieldset': {
                                                borderColor: '#4caf50',
                                            },
                                        },
                                    }}
                                />
                            </Grid2>
                            <Grid2 item size={12}>
                                <TextField
                                    color=""
                                    label="Senha"
                                    variant="outlined"
                                    name='password'
                                    id='txt_password'
                                    fullWidth
                                    onChange={getText}
                                    sx={{
                                        '& .MuiOutlinedInput-root': {
                                            '&.Mui-focused fieldset': {
                                                borderColor: '#4caf50',
                                            },
                                        },
                                    }}
                                />
                            </Grid2>
                            <Grid2 item size={6} className="containerButton">
                                <Button size="large" fullWidth color="" onClick={login}>
                                    Acessar
                                </Button>
                            </Grid2>
                        </Grid2>
                    </Grid2 >
                </Grid2>
            </Grid2>

        </>
    )
}

export default Login