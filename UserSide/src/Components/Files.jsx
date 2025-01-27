import React from 'react'
import ResponsiveDrawer from './ResponsiveDrawer'

import FloatingApp from './Pages/FloatingApp'
// import Routing from '../Routes/Routing'
import Footer from './Pages/Footer'
import CssBaseline from '@mui/material/CssBaseline';
import Routing from '../Routing/Routing';



function Files() {
    return (
        <>
            <CssBaseline />
            <ResponsiveDrawer />
            <FloatingApp />
            <Routing />
            <Footer />
        </>
    )
}

export default Files