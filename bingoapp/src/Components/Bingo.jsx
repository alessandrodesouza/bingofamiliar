import React from "react";
import ImagemFundo from "./ImagemFundo";
import Sorteio from "./Sorteio";
import Sorteados from "./Sorteados";

export default () =>
  <div>
    <ImagemFundo imagem="fundo.jpg" opacidade="0.3"/>

    <div className="jumbotron">
      <div className="container lead text-muted zIndex-2">

        <div className="row">
          <div className="col-9">
            <h2>
              <img src="../images/bingoFamiliar.jpg" className="rounded" alt="bingo" height="220" width="250"/>&nbsp;
              B.I.N.G.O  F.A.M.I.L.I.A.R - <strong>SouZagato!!!</strong>
            </h2>
          </div>

          <Sorteio />

        </div>        
      </div>
    </div>

    <Sorteados numeroSorteados={[10,45,89]} />
  </div>