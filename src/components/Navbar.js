import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
   
    return (
        <nav className={`navbar navbar-expand-lg text-${props.mode === 'light' ? 'dark' : 'light'} bg-${props.mode}`}>
            <div className="container-fluid">
                <Link className={`navbar-brand text-${props.mode === 'light' ? 'dark' : 'light'}`} to="/">TextUtils</Link>
                <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className={`nav-link active aria-current="page" text-${props.mode === 'light' ? 'dark' : 'light'}`} to="/">Home</Link>
                        <Link className={`nav-link text-${props.mode === 'light' ? 'dark' : 'light'}`} to="/about">{props.page}</Link>
                    </div>
                <div className="colors">
                    <span className='colorPicker' id="red" onClick={props.redMode} ></span>
                    <span className='colorPicker' id="green" onClick={props.greenMode} ></span>
                    <span className='colorPicker' id="blue" onClick={props.blueMode} ></span>
                </div>
                <div className="form-check form-switch mx-1">
                    <input className="form-check-input " onClick={props.darkMode} type="checkbox" role="switch" id="darkModeSwitch" />
                    <label className={`form-check-label text-${props.mode === 'light' ? 'dark' : 'light'}`} htmlFor="darkModeSwitch">{props.BtnText}</label>
                </div>
                </div>
            </div>
        </nav>
    )
}
