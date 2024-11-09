import './style.css'

import { Grid2 } from '@mui/material';

const Perfil = () => {

    const user = localStorage.getItem('user');
    const userObj = JSON.parse(user)
    console.log(userObj)
    if(!user){
        console.log('Usuário não encontrado.')
    }

    return (<>
        <Grid2 container spacing={2} className='containerPerfil' >
            <Grid2 item>
                <img src="https://placehold.co/100" alt="" />
            </Grid2>
            <Grid2 item>
                <h2>Olá, { user ? userObj.name : ''}</h2>
            </Grid2>
        </Grid2>

        <Grid2 container className="containerChart" direction="column" spacing={2} sx={{color: '#fff' }}>
            <Grid2 item>
                <h2>Email: {user ? userObj.email : ''}</h2>
            </Grid2>
            <Grid2 item >
                <h2>Carteira: <span style={{ color: 'var(--color-green)' }}> {user ? userObj.wallet : ''}$</span></h2>
            </Grid2>
        </Grid2>
    </>)
}

export default Perfil