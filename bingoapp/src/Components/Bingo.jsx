import React from "react";
import ImagemFundo from "./ImagemFundo";

export default () =>
  <div>
    <ImagemFundo imagem="fundo.jpg" opacidade="0.1"/>

    <div className="jumbotron">
      <div className="container lead text-muted zIndex-2">

        <div className="row">
          <div className="col-9">
            <h2>
              <img src="../images/bingoFamiliar.jpg" className="rounded" alt="bingo" height="220" width="250"/>&nbsp;
              B.I.N.G.O  F.A.M.I.L.I.A.R - <strong>SouZagato!!!</strong>
            </h2>
          </div>

          <div className="col-3 zIndex-2">
            <button id="sortear" className="btn btn-success">Sortear Próximo &raquo;</button>&nbsp;
            <button id="reiniciar" className="btn btn-outline-success">Reiniciar</button>
            <hr/>
            <div className="card text-white text-center bg-warning mb-3" style={{maxWidth: "18rem"}}>
              <div className="card-header">SORTEIO</div>
              <div className="card-body">
                <h5 className="card-title">Último sorteado</h5>
                <p className="card-text text-success"><h1 class="animated infinite flash">99</h1></p>
              </div>
            </div>
          </div>

        </div>        
      </div>
    </div>

    <div class="alert alert-success" role="alert">
      <h2>Números sorteados:</h2>
    </div>

    <div className="text-success text-center animated zoomIn">
      <h1>
        01 &nbsp;
        01 &nbsp;
        01 &nbsp;
        01 &nbsp;
        01 &nbsp;
        01 &nbsp;
        01 &nbsp;
        01 &nbsp;
        01 &nbsp;
        01 &nbsp;
        01 &nbsp;
        01 &nbsp;
        01 &nbsp;
        01 &nbsp;
        01 &nbsp;
        01 &nbsp;
        01 &nbsp;
        01 &nbsp;
        01 &nbsp;
        01 &nbsp;
        01 &nbsp;
        01 &nbsp;
        01 &nbsp;
        01 &nbsp;
        01 &nbsp;
        01 &nbsp;
        01 &nbsp;
        01 &nbsp;
        01 &nbsp;
        01 &nbsp;
        01 &nbsp;
        01 &nbsp;
        01 &nbsp;
        01 &nbsp;
        01 &nbsp;
        01 &nbsp;
        01 &nbsp;
        01 &nbsp;
        01 &nbsp;
        01 &nbsp;
        01 &nbsp;
        01 &nbsp;
        01 &nbsp;
        01 &nbsp;
        01 &nbsp;
        01 &nbsp;
        01 &nbsp;
        01 &nbsp;
        01 &nbsp;
        01 &nbsp;
        01 &nbsp;
        01 &nbsp;
        01 &nbsp;
        01 &nbsp;
        01 &nbsp;
        01 &nbsp;
        01 &nbsp;
        01 &nbsp;
        01 &nbsp;
        01 &nbsp;
        01 &nbsp;
        01 &nbsp;
        01 &nbsp;
        01 &nbsp;
        01 &nbsp;
        01 &nbsp;
        01 &nbsp;
        01 &nbsp;
        01 &nbsp;
        01 &nbsp;
        01 &nbsp;
        01 &nbsp;
        01 &nbsp;
        01 &nbsp;
        01 &nbsp;
        01 &nbsp;
        01 &nbsp;
        01 &nbsp;
        01 &nbsp;
        01 &nbsp;
        01 &nbsp;
        01 &nbsp;
        01 &nbsp;
        01 &nbsp;
        01 &nbsp;
        01 &nbsp;
        01 &nbsp;
        01 &nbsp;
        01 &nbsp;
        01 &nbsp;
      </h1>
    </div>
  </div>