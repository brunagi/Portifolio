import React from "react"
import * as S from "./Style.jsx"
import Css from "./ImagensPortifolio/css-icon.png"
import Js from "./ImagensPortifolio/js-icon.png"
import Html from "./ImagensPortifolio/html-icon.png"
import Vnw from "./ImagensPortifolio/vnw-icon.png"
import IconReact from "./ImagensPortifolio/icon-react.png"
import StyCom from "./ImagensPortifolio/sc-icon.png"

function Sobre(){
    return(
        <S.Sobre>

            <S.Estudos>
                <h2>Estudos</h2>
                <div>
                    <h3>Desenvolvimento Front-End</h3>
                    <h3>AGOSTO/2023 - MAIO/2024</h3>
                    <h3>Vai Na Web</h3>
                </div>

                <img src={Vnw} alt="Ícone Vai Na Web" />
            </S.Estudos>
        


            <S.Habilidades>
                <h2>Habilidades</h2>

                    <div>
                        <img src={Css} alt="Logo do CSS" />
                        <h3>CSS</h3>
                    </div>

                    <div>
                        <img src={Js} alt="Logo do JS" />
                        <h3>JavaScript</h3>
                    </div>

                    <div>
                        <img src={Html} alt="Logo do HTML" />
                        <h3>HTML</h3>
                    </div>

                    <div>
                        <img src={IconReact} alt="Logo do React" />
                        <h3>REACT</h3>
                    </div>

                    <div>
                        <img src={StyCom} alt="Logo do Styled Components" />
                        <h3>STYLED C.</h3>
                    </div>
            </S.Habilidades>


        </S.Sobre>
    )
}

export default Sobre