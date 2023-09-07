import React from 'react';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const Dashboard = () => {
    return (
        <>
            <Box sx={{ display: 'flex', alignItems: "center", marginBottom: 2}}>
                <Box sx={{flex: 1}}><h1>Опросы</h1></Box>
                <Box><Button variant="outlined" size={"large"}>Создать опрос</Button></Box>
            </Box>
        </>
    );
};

export default Dashboard;