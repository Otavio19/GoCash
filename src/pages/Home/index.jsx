import { Grid2 } from '@mui/material';
import Card from '../../components/Card';
import './style.css'
const Home = () => {
    return (
        <Grid2 container spacing={2}>
            <Grid2 item size={{ md: 2, sm: 3, xm: 3 }} className="containerHome" minHeight={'100vh'} maxHeight={'100vh'}>
                <h1>Menu</h1>
            </Grid2>
            <Grid2 item size={{ md: 9, sm: 8, xs: 9 }} className="containerHome" maxHeight={'100vh'}>
                <h2>Pedidos em Fila</h2>
                <Grid2 container spacing={2}>
                    <Card />
                    <Card />
                    <Card />
                </Grid2>

                <h2>Pedidos em Andamento</h2>
                <Grid2 container spacing={2}>
                    <Card />
                    <Card />
                    <Card />
                </Grid2>
            </Grid2>
        </Grid2 >
    )
}

export default Home