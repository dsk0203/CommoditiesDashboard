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
import NotFound from './pages/DefaultPath'
import BlogHome from './pages/BlogHome'

function App() {

  const navLinks = [
    {
    text: 'Commodities',
    path: '/',
    icon: 'ion-md-information-circle'
    },
    {
      text: 'Blogs',
      path: '/blog',
      icon: 'ion-ios-checkbox-outline'
    },
    {
      text: 'Blog Home',
      path: '/ds',
      icon: 'ion-md-star-half'
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
          <DashboardSelector path="/blog" axios={axios}  />
          <BlogHome path="/ds" background={"'url(./images/techBackground.jpg'"} />

          <NotFound default />
        </Router>
      <Footer name={'Dylan Kaplan'} email={'dsk0203@gmail.com'}/>
    </div>
  );
}

export default App;
