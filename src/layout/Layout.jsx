import React, {useEffect} from 'react'
import {Header} from "../components"
import {Outlet, useLocation, useNavigate} from 'react-router-dom'
import {useSelector} from "react-redux";
import Container from "@mui/material/Container";
import Box from '@mui/material/Box';


const Layout = () => {

    const {isAuth} = useSelector((state) => state.auth)

    const location = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [location.pathname])

    return (
        <>
            <Header />
            <Box sx={{paddingTop: 2}} className={'main'}>
                <Container maxWidth="lg">
                    <Outlet />
                </Container>
            </Box>
        </>
    )
}

export default Layout