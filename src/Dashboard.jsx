import React from 'react'
import facebook from './images/icon-facebook.svg'
import instagram from './images/icon-instagram.svg'
import twitter from './images/icon-twitter.svg'
import youtube from './images/icon-youtube.svg'
import up from './images/icon-up.svg'
import down from './images/icon-down.svg'
import './styles.css'

export const Dashboard = () => {
  return (
    <div className='dashboard-div'>
        <div className='dashboard-container'>
        <span className='dashboard-bar bar1'></span>
            <div className='dashboard-users'>
                <img src={facebook} alt="facebook icon" />
                <p>@nathanf</p>
            </div>
            <h2>1987</h2>
            <span>FOLLOWERS</span>
            <div className='dashboard-changes'>
                <img src={up} alt="up icon" />
                <p className='green'>12 Today</p>
            </div>
        </div>

        <div className='dashboard-container'>
        <span className='dashboard-bar bar2'></span>
            <div  className='dashboard-users'>
                <img src={twitter} alt="twitter icon" />
                <p>@nathanf</p>
            </div>
            <h2>1044</h2>
            <span>FOLLOWERS</span>
            <div className='dashboard-changes'>
                <img src={up} alt="up icon" />
                <p className='green'>99 Today</p>
            </div>
        </div>

        <div className='dashboard-container'>
        <span className='dashboard-bar bar3'></span>
            <div className='dashboard-users'>
                <img src={instagram} alt="instagram icon" />
                <p>@realnathanf</p>
            </div>
            <h2>11k</h2>
            <span>FOLLOWERS</span>
            <div className='dashboard-changes'>
                <img src={up} alt="up icon" />
                <p className='green'>1099 Today</p>
            </div>
        </div>

        <div className='dashboard-container'>
            <span className='dashboard-bar bar4'></span>
            <div className='dashboard-users'>
                <img src={youtube} alt="youtube icon" />
                <p>Nathan F.</p>
            </div>
            <h2>8239</h2>
            <span>FOLLOWERS</span>
            <div className='dashboard-changes'>
                <img src={down} alt="down icon" />
                <p className='red'>144 Today</p>
            </div>
        </div>
    </div>
  )
}
