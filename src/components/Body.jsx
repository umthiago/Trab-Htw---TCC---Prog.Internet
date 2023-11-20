import React from 'react'

const Body = () => {
    return (
        <><div className="about">
            <div className="container_width">
                <div className="row d_flex">
                    <div className="col-md-7">
                        <div className="titlepage text_align_left">
                            <h2>Sobre Ansiedade</h2>
                            <p>
                                A ansiedade é um estado de tensão causado pela antecipação de perigo ou do desconhecido.
                            </p>
                            <a className="read_more" href="about.html">Saiba mais...</a>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="about_img text_align_center">
                            <figure><img src="src/assets/img/banner-ansiedade.png" alt="#" /></figure>
                        </div>
                    </div>

                </div>
            </div>
        </div><div className="about2">
                <div className="container">
                    <div className="row d_flex grid">
                        <div className="col-md-7">
                            <div className="coronata_img text_align_left">
                                <figure><img
                                    src="https://www.tjdft.jus.br/informacoes/programas-projetos-e-acoes/pro-vida/dicas-de-saude/pilulas-de-saude/depressao-causas-sintomas-tratamentos-diagnostico-e-prevencao/@@images/43ea4c3c-272d-4063-9389-3d76f3e00024.jpeg"
                                    alt="#" /></figure>
                            </div>
                        </div>
                        <div className="col-md-5 oder1">
                            <div className="titlepage text_align_left">
                                <h2>Depressão o que é isso?</h2>
                                <p>A depressão pode se manifestar nos variados quadros clínicos, incluindo o transtorno de estresse
                                    pós-traumático, demência, esquizofrenia, alcoolismo, doenças clínicas. Pode ainda ocorrer como
                                    resposta a situações estressantes, ou a circunstâncias sociais e econômicas.
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
            </div></>
    );
}

export default Body;