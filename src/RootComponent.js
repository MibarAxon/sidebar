import React from 'react'
import routes from './util/routes'
import { BrowserRouter as Router } from 'react-router-dom'

const RootComponent = () => {
    return (
        <Router>
            {routes()}
        </Router>
    )
}


export default RootComponent

