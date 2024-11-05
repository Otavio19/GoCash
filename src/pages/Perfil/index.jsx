import './style.css'

import { Grid2 } from '@mui/material';

const Perfil = () => {
    return (<>
        <Grid2 container spacing={2} className='containerPerfil'>
            <Grid2 item>
                <img src="https://placehold.co/100" alt="" />
            </Grid2>
            <Grid2 item>
                <h2>Otávio Afonso</h2>
            </Grid2>
        </Grid2>

        <Grid2 container className="containerChart">
            <Grid2 item>
                <h2>Email: Otavio@gmail.com</h2>
            </Grid2>
        </Grid2>
    </>)
}

export default Perfil