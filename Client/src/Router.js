import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import "./App.css"
import Navbar from './components/Navbar'
import PostTask from './components/PostTask'
import CardList from './components/CardList'

export default function Router() {
    return (
        <BrowserRouter>
        <Navbar/>
        <Switch>
            <Route eaxt path = "/">
                <CardList/>
            </Route>
            <Route path ="/posttask">
                <PostTask/>
                </Route>
        </Switch>
        </BrowserRouter>

    )

}