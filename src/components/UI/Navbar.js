import React from 'react'

function Navbar() {
    
    const style = {
        backgroundColor: "#131923"
    }
    
    return (
        <div>
            <nav className="navbar navbar-dark mb-5" style={style}>
                <div className="container-fluid">
                    {/* <span className="navbar-brand">Fixed top</span> */}
                    <span className="navbar-brand font-three mx-auto">TASKER</span>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
