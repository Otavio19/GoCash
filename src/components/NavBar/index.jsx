import './style.css'

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useState } from 'react'
import { Link } from "react-router-dom";

//Icons
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import MenuIcon from '@mui/icons-material/Menu';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';

const NavBar = ({ openMenu }) => {

    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const DrawerList = (
        <Box sx={{ width: 250, backgroundColor: 'var(--color-greyDark)', minHeight: '100vh', color: '#fff' }} role="presentation" onClick={toggleDrawer(false)}>
            <List>
                {[
                    { text: 'Oportunidades', icon: <RocketLaunchIcon />, link: '/' },
                    { text: 'Carteira', icon: <AccountBalanceWalletIcon />, link: '/wallet' },
                    { text: 'Perfil', icon: <PersonIcon />, link: '/' }].map((item) => (
                        <ListItem key={item.text} disablePadding sx={{ '&:hover': { color: 'var(--color-green)' } }}>
                            <ListItemButton component={Link} to={item.link} sx={{ textDecoration: 'none' }}>
                                <ListItemIcon sx={{ color: '#fff' }}>
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText primary={item.text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
            </List>
            <Divider />
            <List>
                {[
                    { text: 'Sair', icon: <LogoutIcon /> }].map((item) => (
                        <ListItem key={item.text} disablePadding sx={{ '&:hover': { color: 'var(--color-green)' } }}>
                            <ListItemButton>
                                <ListItemIcon sx={{ color: '#fff' }}>
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText primary={item.text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
            </List>
        </Box>
    );


    return (
        <div className='navBarContainer'>
            <Button onClick={toggleDrawer(true)} sx={{ color: '#fff' }}><MenuIcon /></Button>
            <h2><span className='logoGreen'>Go</span>Cash</h2>
            <Drawer open={open} onClose={toggleDrawer(false)} sx={{ backgroundColor: 'var(--color-greyDark)' }}>
                {DrawerList}
            </Drawer>
        </div>
    )
}


export default NavBar