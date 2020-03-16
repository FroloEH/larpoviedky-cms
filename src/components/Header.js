import React from 'react'

const Header = class extends React.Component {
    render() {
      return (
        <>
        <header id="header" className="alt">
            <a href="/" className="logo"><strong>LARPoviedky</strong> <span>by Event Horizon</span></a>
            <nav>
                <a href="#menu"></a>
            </nav>
        </header>
        </>
      )
    }
}

export default Header;