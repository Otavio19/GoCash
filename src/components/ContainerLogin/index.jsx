import './style.css'

import TextField from '@mui/material/TextField';
import { Grid2 } from '@mui/material';
import Button from '@mui/material/Button';
const ContainerLogin = () => {
    return (
        <Grid2 container spacing={{ mobile: 1, tablet: 2, laptop: 3 }} className="containerLogin" >
            <Grid2 item container spacing={2}>
                <Grid2 item size={12}>
                    <TextField
                        id="outlined-login"
                        label="Login"
                        variant="outlined"
                        color=""
                        fullWidth // Adicione esta linha
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
                        id="outlined-senha"
                        label="Senha"
                        variant="outlined"
                        fullWidth // Adicione esta linha
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
                    <Button size="large" fullWidth color="">
                        Acessar
                    </Button>
                </Grid2>
            </Grid2>
        </Grid2 >
    );
}

export default ContainerLogin