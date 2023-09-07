import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Container from "@mui/material/Container";
import classes from "./header.module.sass";
import {Tabs} from "@mui/material";
import {fakeAuth} from "../../pages/Auth/auth.slice.js";
import {useDispatch, useSelector} from "react-redux";



function Header() {
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const dispatch = useDispatch()

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <Box className={classes.header}>
            <Container>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                    alignItems: 'center'}}>
                    <Box className={classes.header__logo}>
                        <svg viewBox="0 0 90 34" width="90" height="34" className="header-navbar-logo">
                            <use xlinkHref="#darkLogoFill" transform="translate(.6 .42)" fill="#000"/>
                            <defs>
                                <path id="darkLogoFill" fillRule="evenodd"
                                      d="M77.447.143c3.36-.495 6.436.308 8.508 2.256 1.915 1.762 2.888 4.265 2.637 6.923-.44 4.915-2.857 8.872-9.638 15.394l-11.082.371s7.692-6.924 10.611-10.293c1.884-2.194 2.7-4.544 1.915-6.12-.502-.99-1.6-1.484-2.95-1.422V.142zM54.75 4.037v6.399l9.606-1.02V2.708l-9.606 1.33zM46.902 33V5.12l6.592-.929v28.81h-6.592zM20.814 8.735v5.41l7.283-.804V7.746l-7.283.99zM14.818 33V9.57l5.054-.71V33h-5.054zM0 11.61v4.791l13.06-1.421V9.817L0 11.61zm4.175 5.069V33h4.772V16.185l-4.772.494zm16.639 6.956v-5.503l4.771-.402v5.657l-4.771.248zm0 3.956V33h7.283v-5.627l-7.283.217zm33.936-5.78v-6.522l6.31-.556v6.738l-6.31.34zm0 4.792V33h9.606v-6.708l-9.606.31zM30.012 33V7.468l5.745-.804V33h-5.745zm6.812-5.873V33h8.32v-6.12l-8.32.247zm29.667-.896l.031 6.77H89v-7.42l-22.509.65zm.314-12.149C66.428 6.355 69.63 1.626 76.16.266l.031 7.233c-1.38.556-2.73 1.608-2.417 5.965l-6.97.618z"/>
                            </defs>
                        </svg>
                    </Box>
                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Владимир" src="" />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >

                            <MenuItem onClick={handleCloseUserMenu}>
                                <Typography textAlign="center" onClick={() => dispatch(fakeAuth(false))}>Выйти</Typography>
                            </MenuItem>

                        </Menu>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}
export default Header;