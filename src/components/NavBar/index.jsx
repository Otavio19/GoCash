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
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { useState } from 'react'

import MenuIcon from '@mui/icons-material/Menu';

const NavBar = ({ openMenu }) => {

    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const DrawerList = (
        <Box sx={{ width: 250, backgroundColor: 'var(--color-greyDark)', minHeight: '100vh', color: '#fff' }} role="presentation" onClick={toggleDrawer(false)}>
            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem key={text} disablePadding sx={{ '&:hover': { color: 'var(--color-green)' } }}>
                        <ListItemButton>
                            <ListItemIcon sx={{ color: '#fff' }}>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem key={text} disablePadding sx={{ '&:hover': { color: 'var(--color-green)' } }}>
                        <ListItemButton>
                            <ListItemIcon sx={{ color: '#fff' }}>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
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