import React from 'react';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="0">
                <img src="./logo.png" width="30" height="30" class="d-inline-block align-top" alt=""></img>
                Quack
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="btn-group" role="group" aria-label="Basic example">
                    <button type="button" class="btn btn-secondary">Python</button>
                    <button type="button" class="btn btn-secondary">Java</button>
                </div>
                
                <button class="btn btn-outline-success" type="button" padding="20">Refresh</button>
            </div>
        </nav>)

}

export default Navbar;