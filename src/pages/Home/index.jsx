import { useState, useEffect } from 'react';
import { USER_ID, API_URL } from "../../config/api";
import { Grid2 } from '@mui/material';
import Card from '../../components/Card';
import './style.css'

const Home = () => {
    const [response, setResponse] = useState([]);
    const [loading, setLoading] = useState(true);

    const user = localStorage.getItem('user');
    const userObj = JSON.parse(user);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const res = await fetch(`${API_URL}/orderDelivery/${userObj.id}`);
                if (!res.ok) {
                    throw new Error('Erro na requisição: ' + res.statusText);
                }
                const data = await res.json();
                setResponse(data);
                setLoading(false);
            } catch (error) {
                console.error('Erro ao fazer a requisição:', error);
                setLoading(false);
            }
        };

        fetchOrders();
    }, [userObj.id]);

    return (
        <Grid2 container spacing={2}>
            <Grid2 item size={{ md: 12, sm: 12, xs: 12 }} className="containerHome">
                <h2>Pedidos em Fila</h2>

                <Grid2 container spacing={2}>
                    {loading ? (
                        <p>Carregando pedidos...</p>
                    ) : (
                        Array.isArray(response) && response.length > 0 ? (
                            response.map(order => (
                                <Card
                                    key={order.id}
                                    cliente={order.cliente}
                                    taxa={order.taxa}
                                    totalPedido={order.price}
                                    id='1'
                                />
                            ))
                        ) : (
                            <p>Sem pedidos em fila.</p>
                        )
                    )}
                </Grid2>

                <h2>Pedidos em Andamento</h2>
                <Grid2 container spacing={2}>
                    <Card cliente="Otávio" taxa="2,00" totalPedido="100,00" id="1" />
                </Grid2>
            </Grid2>
        </Grid2>
    );
};

export default Home;
