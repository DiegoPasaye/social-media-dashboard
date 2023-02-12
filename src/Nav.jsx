import React from 'react'
import './styles.css'
import {Overview} from './Overview'

export const Nav = () => {
  const darkMode = () => {
    const dashboardContainers = document.querySelectorAll(".dashboard-container")
    const overviewContainers = document.querySelectorAll(".overview-container")
    const spans = document.querySelectorAll("span")

    for (let i = 0; i < spans.length; i++){
      spans[i].classList.toggle("spans-dark")
    }
    for (let i = 0; i < dashboardContainers.length; i++){
      dashboardContainers[i].classList.toggle("dashboard-container-dark")
    }
    for (let i = 0; i < overviewContainers.length; i++){
      overviewContainers[i].classList.toggle("overview-container-dark")
    }
    document.querySelector("html").classList.toggle("html-dark")
    document.querySelector("h1").classList.toggle("h1-dark")
    document.querySelector(".total-followers").classList.toggle("total-followers-dark")
    document.querySelector(".text-dark").classList.toggle("dark-mode-text-dark")
    document.querySelector(".overview-theme").classList.toggle("overview-theme-dark")
  }
  return (
    <nav>
        <div>
            <h1>Social Media Dahsboard</h1>
            <p className='total-followers'>Total Followers: 23,004</p>
        </div>

        <div className='dark-mode'>
            <p className='text-dark'>Dark Mode</p>
            <div className='switchContainer'>
              <input type="checkbox" name="" id="switch" />
              <label onClick={darkMode} htmlFor="switch" className='lbl'></label>
            </div>
        </div>
    </nav>
  )
}
