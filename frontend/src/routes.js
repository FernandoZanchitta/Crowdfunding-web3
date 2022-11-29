import React from 'react'
import {Routes, Route, BrowserRouter} from 'react-router-dom'

import Home from './Home/homepage'
import Project from './Project/index'
import NewProject from './NewProject/index'

const RoutesPages = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/projects" element={<Project/>} />
            <Route exact path="/newproject" element={<NewProject/>} />
        </Routes>
    </BrowserRouter>
)

export default RoutesPages