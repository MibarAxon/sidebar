import React from 'react'
import routes from './util/routes'
import { BrowserRouter as Router } from 'react-router-dom'
import data from './data'

const RootComponent = () => {
    return (
        <Router>
            {routes(data.baseRoute)}
        </Router>
    )
}


export default RootComponent

