import './style.css'

//Components
import { Grid2 } from '@mui/material';
import { BarChart } from '@mui/x-charts/BarChart';
import { Gauge, gaugeClasses } from '@mui/x-charts/Gauge';

//Icons
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

const Wallet = () => {

    const dataset = [
        { day: 'Segunda', value: 4 },
        { day: 'Terça', value: 3 },
        { day: 'Quarta', value: 5 },
        { day: 'Quinta', value: 2 },
        { day: 'Sexta', value: 6 },
        { day: 'Sábado', value: 4 },
        { day: 'Domingo', value: 3 },
    ];
    return (
        <>
            <Grid2 container>
                <Grid2 item className="containerChart">
                <h1 className='titleChart'> <span className='labelChart'><AttachMoneyIcon fontSize="large" /></span>Carteira: <span className='labelChart'>100$</span></h1>
                </Grid2>
            </Grid2>

            <Grid2 container spacing={2} sx={{ mt: 2 }}>

                <Grid2 item size={{ md: 5, sm: 12, xs: 12 }} className="containerChart">
                    <h1 className='titleChart'> <span className='labelChart'><AttachMoneyIcon fontSize="large" /></span>Semanal</h1>
                    <BarChart
                        series={[
                            { data: [35, 44, 24, 34, 20, 15, 10] }
                        ]}
                        height={290}
                        xAxis={[{ data: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom'], scaleType: 'band' }]}
                        margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
                        className='chart'
                    />
                </Grid2>

                <Grid2 item size={{ md: 5, sm: 12, xs: 12 }} className="containerChart">
                    <h1 className='titleChart'> <span className='labelChart'><RocketLaunchIcon fontSize="large" /></span>Meta (Diária)</h1>
                    <Gauge
                        value={75}
                        startAngle={-110}
                        endAngle={110}
                        sx={{
                            width: '100%',
                            height: 200,
                            [`& .${gaugeClasses.valueText}`]: {
                                fontSize: 30,
                                transform: 'translate(-1px, 0px)',
                                
                            },
                            [`& .${gaugeClasses.valueArc}`]: {
                                fill: 'var(--color-green)',
                                color: 'var(--color-green)'
                            },
                        }}
                        text={({ value, valueMax }) => `${value} / ${valueMax}`}
                    />
                </Grid2>

            </Grid2>
        </>
    );
}

export default Wallet;
