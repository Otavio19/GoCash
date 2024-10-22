import ContainerLogin from "../../components/ContainerLogin"
import { Grid2 } from '@mui/material';

import './style.css'
const Login = () => {
    return (
        <>
            <Grid2 container className="contentLogin" justifyContent={'center'} alignItems={'center'}>
                <Grid2 item size={{ md: 4, xs: 10, sm: 8 }}>
                    <Grid2 item className="logoLogin">
                        <h1><span>Go</span>Cash</h1>
                    </Grid2>
                    <ContainerLogin />
                </Grid2>
            </Grid2>

        </>
    )
}

export default Login