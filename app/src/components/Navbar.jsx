import React from 'react';

function Navbar() {


    
    return (
        
        <nav className="navbar navbar-expand-lg navbar-light bg-light bg-dark">
            <a className="navbar-brand" href="0">
                <img src="./ducklogo.png" width="150" height="75" className="d-inline-block align-top" alt=""></img>
                
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">

                <div className="btn-group" role="group" aria-label="Basic example">
                    <button type="button" className="btn btn-secondary">Python</button>
                    <button type="button" className="btn btn-secondary">Java</button>
                </div>
                
                <button className="btn btn-outline-success ml-auto" type="button" padding="30">Refresh</button>
            </div>
        </nav>)

}

export default Navbar;