import React from 'react'
import ReactDOM from 'react-dom/client'
import { Dashboard } from './Dashboard'
import { Nav } from './Nav'
import { Overview } from './Overview'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <main>
    <Nav />
    <Dashboard />
    <Overview />
  </main>
)
