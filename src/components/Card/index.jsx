import { Grid2 } from '@mui/material';

import './style.css'

import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '70vw',
  bgcolor: 'var(--color-greyDark)',
  color: '#fff',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
const Card = ({cliente, taxa, totalPedido, id}) => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleRedirect = () => {
      window.location.href = 'https://google.com.br/maps/place/R.+Rubião+de+Almeida,+Sorocaba+-+SP,+18076-290';
    };

    return (
        <>
        <Grid2 item size={{ md: 4, sm: 12, xs: 11 }} className="cardContainer" onClick={handleOpen}>
            <h3> Cliente: {cliente}</h3>
            <h3> ID: {id}</h3>
            <h3> Valor: $ {totalPedido}</h3>
        </Grid2>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="modalCard"
      >

        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          <h3> Cliente: {cliente}</h3>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <p> ID: {id}</p>
          <p> Valor: $ {totalPedido}</p>
          <p>Taxa: $ <span className='taxaCard'>{taxa}</span> </p>
          </Typography>
          <Button size="large" fullWidth color="" onClick={handleRedirect}>
                        Seguir Rota
          </Button>
          <p className='enderecoCard'>
            Endereço: 
          </p>
        </Box>
      </Modal>
        </>
    )
}

export default Card