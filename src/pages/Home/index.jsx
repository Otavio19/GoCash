import { Grid2 } from '@mui/material';
import Card from '../../components/Card';
import './style.css'

const Home = () => {
    return (
        <Grid2 container spacing={2}>
            <Grid2 item size={{ md: 12, sm: 12, xs: 12 }} className="containerHome">
                <h2>Pedidos em Fila</h2>
                <Grid2 container spacing={2}>
                    <Card cliente="Otávio" taxa="2,00" totalPedido="100,00" id="1" />
                    <Card cliente="Otávio" taxa="2,00" totalPedido="100,00" id="1" />
                    <Card cliente="Otávio" taxa="2,00" totalPedido="100,00" id="1" />
                </Grid2>

                <h2>Pedidos em Andamento</h2>
                <Grid2 container spacing={2}>
                    <Card cliente="Otávio" taxa="2,00" totalPedido="100,00" id="1" />
                </Grid2>
            </Grid2>
        </Grid2 >
    )
}

export default Home