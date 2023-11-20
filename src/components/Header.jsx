import React from 'react'

const Header = () => {
    return (
        
   <div className="full_bg">
      
      <div className="section">
        
         <div id="banner1" className="carousel slide slider_main">
            <ol className="carousel-indicators ">
               <li data-target="#banner1" data-slide-to="0" className="indicator-li-1">01</li>
               <li data-target="#banner1" data-slide-to="1" className="">02</li>
               <li data-target="#banner1" data-slide-to="2" className="active">03</li>
            </ol>
            <div className="carousel-inner">
               
               <div className="carousel-item active">
                  <div className="carousel-caption cuplle">
                     <div className="container">
                        <div className="row">
                           <div className="col-md-8">
                              <div className="photog">
                                 <h1>Ansiedade &<br/>Depressão</h1>
                                 <a className="read_more" href="ansiedade.html" >Ansiedade</a>
                                 <a className="read_more" href="depressao.html">Depressão</a>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
              
               <div className="carousel-item">
                  <div className="carousel-caption cuplle">
                     <div className="container">
                        <div className="row">
                           <div className="col-md-8">
                              <div className="photog">
                                 <h1>Riscos<br/></h1>
                                 <a className="read_more" href="riscos.html">Ler Mais</a>
                                 <a className="read_more" href="about.html">About Us</a>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               
               <div className="carousel-item">
                  <div className="carousel-caption cuplle">
                     <div className="container">
                        <div className="row">
                           <div className="col-md-8">
                              <div className="photog">
                                 <h1><br/>Ajuda</h1>
                                 <a className="read_more" href="ajuda.html">Ler Mais</a>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            
      
         </div>
      </div>
   </div>
   
    );
}

export default Header;