import React from 'react'
import Header from './Header'
import Sidebar from './sidebar/Sidebar'
import data from  './data'

const App = () => {
    
    return (
        <div>
            <Header />
            <Sidebar {...data}/>
        </div>
    )
}

export default App
