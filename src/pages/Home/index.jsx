import { Grid2 } from '@mui/material';
import Card from '../../components/Card';
import NavBar from '../../components/NavBar'
import './style.css'

const Home = () => {
    return (
        <Grid2 container spacing={2}>
            <Grid2 item size={{ md: 2, sm: 1, xs: 3 }} className="containerHome" minHeight={'100vh'} maxHeight={'100vh'}>
                <NavBar />
            </Grid2>
            <Grid2 item size={{ md: 9, sm: 8, xs: 9 }} className="containerHome" maxHeight={'100vh'}>
                <h2>Pedidos em Fila</h2>
                <Grid2 container spacing={2}>
                    <Card cliente="Otávio" taxa="2,00" totalPedido="100,00"  id="1" />
                </Grid2>

                <h2>Pedidos em Andamento</h2>
                <Grid2 container spacing={2}>
                    <Card cliente="Otávio" taxa="2,00" totalPedido="100,00"  id="1" />
                </Grid2>
            </Grid2>
        </Grid2 >
    )
}

export default Home