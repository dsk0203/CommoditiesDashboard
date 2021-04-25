import React from 'react'
import { Router } from '@reach/router'
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

import ResponsiveNavigation from './components/ResponsiveNavigation'
import './scss/base.scss'
import Home from './pages/Home'
import DashboardSelector from './pages/DashboardSelector'
import Footer from './components/ResponsiveFooter'


function App() {

  const navLinks = [
    {
    text: 'Inflation',
    path: '/',
    icon: 'ion-md-information-circle'
    },
    {
      text: 'Math',
      path: '/analytics',
      icon: 'ion-ios-checkbox-outline'
    }
  ]

  return (
    <div className="App">
      <ResponsiveNavigation
          navLinks= { navLinks }
          logo = { logo }
          background="#fff"
          hoverbackground = "#ddd"
          linkColor= "#777"
          />
        <Router>
          <Home path="/" />
          <DashboardSelector path="/analytics" axios={axios}  />
        </Router>
      <Footer name={'Dylan Kaplan'} email={'dsk0203@gmail.com'}/>
    </div>
  );
}

export default App;
