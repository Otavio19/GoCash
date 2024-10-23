import { Grid2 } from '@mui/material';

import './style.css'
const Card = () => {
    return (
        <Grid2 item size={{ md: 4, sm: 12, xs: 11 }} className="cardContainer">
            <h3> Cliente: Fulano</h3>
            <h3> ID: 99</h3>
            <h3> Valor: $ 99,99</h3>
        </Grid2>
    )
}

export default Card