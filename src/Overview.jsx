import React from 'react'
import up from './images/icon-up.svg'
import down from './images/icon-down.svg'
import facebook from './images/icon-facebook.svg'
import twitter from './images/icon-twitter.svg'
import instagram from './images/icon-instagram.svg'
import youtube from './images/icon-youtube.svg'
import './styles.css'

export const Overview = () => {
  return (
    <div className='overview'>
        <h2 className='overview-theme'>Overview - Today</h2>
        <div className='overview-divs'>
            <div className='overview-container'>
                <div className='overview-pages'>
                    <p>Page Views</p>
                    <img src={facebook} alt="facebook icon" />
                </div>
                <div className='overview-stats'>
                    <h2>87</h2>
                    <div className='overview-changes'>
                        <img src={up} alt="up icon" />
                        <span className='green'>3%</span>
                    </div>
                </div>
            </div>

            <div className='overview-container'>
                <div className='overview-pages'>
                    <p>Likes</p>
                    <img src={facebook} alt="facebook icon" />
                </div>
                <div className='overview-stats'>
                    <h2>52</h2>
                    <div className='overview-changes'>
                        <img src={down} alt="down icon" />
                        <span className='red'>2%</span>
                    </div>
                </div>
            </div>

            <div className='overview-container'>
                <div className='overview-pages'>
                    <p>Likes</p>
                    <img src={instagram} alt="instagram icon" />
                </div>
                <div className='overview-stats'>
                    <h2>5462</h2>
                    <div className='overview-changes'>
                        <img src={up} alt="up icon" />
                        <span className='green'>2257%</span>
                    </div>
                </div>
            </div>

            <div className='overview-container'>
                <div className='overview-pages'>
                    <p>Profile Views</p>
                    <img src={instagram} alt="instagram icon" />
                </div>
                <div className='overview-stats'>
                    <h2>52k</h2>
                    <div className='overview-changes'>
                        <img src={up} alt="up icon" />
                        <span className='green'>1375%</span>
                    </div>
                </div>
            </div>

            <div className='overview-container'>
                <div className='overview-pages'>
                    <p>Retweets</p>
                    <img src={twitter} alt="twitter icon" />
                </div>
                <div className='overview-stats'>
                    <h2>117</h2>
                    <div className='overview-changes'>
                        <img src={up} alt="up icon" />
                        <span className='green'>303%</span>
                    </div>
                </div>
            </div>

            <div className='overview-container'>
                <div className='overview-pages'>
                    <p>Likes</p>
                    <img src={twitter} alt="twitter icon" />
                </div>
                <div className='overview-stats'>
                    <h2>507</h2>
                    <div className='overview-changes'>
                        <img src={up} alt="up icon" />
                        <span className='green'>553%</span>
                    </div>
                </div>
            </div>

            <div className='overview-container'>
                <div className='overview-pages'>
                    <p>Likes</p>
                    <img src={youtube} alt="youtube icon" />
                </div>
                <div className='overview-stats'>
                    <h2>107</h2>
                    <div className='overview-changes'>
                        <img src={down} alt="down icon" />
                        <span className='red'>19%</span>
                    </div>
                </div>
            </div>

            <div className='overview-container'>
                <div className='overview-pages'>
                    <p>Total Views</p>
                    <img src={youtube} alt="youtube icon" />
                </div>
                <div className='overview-stats'>
                    <h2>1407</h2>
                    <div className='overview-changes'>
                        <img src={down} alt="down icon" />
                        <span className='red'>12%</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
