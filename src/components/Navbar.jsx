import React from 'react'

const Navbar = () => {
    return (
        <header className="header-area">
            <div className="container">
                <div className="row d_flex">
                    <div className="col-sm-3 logo_sm">
                        <div className="logo">
                            <a href="index.html"></a>
                        </div>
                    </div>
                    <div className="col-lg-10 offset-lg-1 col-md-12 col-sm-9">
                        <div className="navbar-area">
                            <nav className="site-navbar">
                                <ul>
                                    <li><a className="active" href="index.html">Início</a></li>
                                    <li><a href="ansiedade.html">Ansiedade</a></li>
                                    <li><a href="depressao.html">Depressão</a></li>
                                    <li><a href="index.html" className="logo_midle"></a></li>
                                    <li><a href="riscos.html">Riscos</a></li>
                                    <li><a href="ajuda.html">Ajuda</a></li>
                                    <li><a href="recursos.html">Recursos</a></li>
                                </ul>
                                <button className="nav-toggler">
                                    <span></span>
                                </button>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar;