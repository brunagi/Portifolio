import React from "react"
import Perfil from "./ImagensPortifolio/bruna.jpg"
import Instagram from "./ImagensPortifolio/insta-icon.png"
import Linkedin from "./ImagensPortifolio/lin-icon.png"
import * as S from "./Style.jsx"


function Inicio() {
    return (
        <S.Inicio>

            <img src={Perfil} alt="Minha imagem." />

            <h2>Bruna Regina</h2>
            <h3>Olá! Eu sou Bruna, tenho 26 anos, moro no Rio de Janeiro e
                sou Desenvolvedora Front-End. Boas vindas ao meu Portifólio! </h3>
            
            <S.RedesSociais>
                <img src={Instagram} alt="" />
                <img src={Linkedin} alt="" />
                
            </S.RedesSociais>
        </S.Inicio>

    )

}

export default Inicio