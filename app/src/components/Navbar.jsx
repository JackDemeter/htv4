import React from 'react';

function Navbar() {


    
    return (
        
        <nav className="navbar navbar-expand-lg navbar-light bg-light bg-dark" >
            <a className="navbar-brand" href="0">
            </a>

            <img src="./ducklogo.png" width="150" height="75" className="d-inline-block align-top" alt=""></img>
            

                <div className="btn-group" role="group" aria-label="Basic example">
                    <button type="button" className="btn btn-info">Python</button>
                    <div className="text-dark">|</div>
                    <button type="button" className="btn btn-info">Java</button>
                </div>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">                
                <nav className="navbar navbar-expand-lg navbar-light" >
                    <div className="text-dark"> ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| </div>
                    
                    <a className="navbar-brand" href="0">
                        
                        < button  className="btn btn-danger ml-auto"  type="button">Refresh</button >
                        
                    </a>
                </nav>
                
            </div>
        </nav>)

}
export default Navbar;