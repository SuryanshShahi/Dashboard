import React, { Component } from 'react'
import './HorizontalNav.css'

export class HorizontalNav extends Component {
    render() {
        return (
            <div className="HorizontalNav">
                <div className="HorizontalNav-container">
                    <div className='HorizontalNav-logo'>
                        <i className="fa fa-bars"></i><p>Welcome, Zura</p>
                    </div>
                    <div className='HorizontalNav-user-details'>
                        <i className="fa fa-bell"></i>
                        <sup>2</sup>
                        <div></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HorizontalNav